const color = document.querySelector('input[type="color"]'),
    eraser = document.querySelector('.eraser'),
    decrease = document.querySelector('.size--down'),
    size = document.querySelector('#size'),
    increase = document.querySelector('.size--up'),
    save = document.querySelector('.save'),
    clearBtn = document.querySelector('.clear'),
    canvas = document.querySelector('#main');
    canvas.height = canvas.clientHeight;
    canvas.width = canvas.clientWidth;

const ctx = canvas.getContext('2d');
    let currentPos = {
        x: 0,
        y: 0
    };
    isDrawing = false,
    colorPicker = '#000000';

function initCanvas() {
    document.addEventListener('mousedown', (e) => isDrawing = true);
    document.addEventListener('mouseup', (e) => isDrawing = false);
    document.addEventListener('mousemove', function(e) {
        if(currentPos.x == 0 || currentPos.y == 0 || !isDrawing)
            return currentPos = {
                x: e.clientX,
                y: e.clientY
            }

        if(isDrawing) {
            let newPos = {
                x: e.clientX,
                y: e.clientY
            }
            draw(currentPos, newPos)
        }
    });
}

function initSize() {
    size.addEventListener('click', function(e) {
        const input = document.createElement('input');
        input.value = size.innerText;
        input.addEventListener('blur', function() {
            LineWidth(input.value);
            size.innerText = LineWidth();
            size.classList.remove('hide');
            if(input)
            size.parentElement.removeChild(input);
        });
        input.addEventListener('keydown',(e) => {
            if(e.key == 'Enter') {
                LineWidth(input.value);
                size.innerText = LineWidth();
                size.classList.remove('hide');
            }
        });
        size.classList.add('hide');
        input.focus();
        size.parentElement.appendChild(input);
    });
    decrease.addEventListener('click', () => size.innerText = ctx.lineWidth == 1? 1 : --ctx.lineWidth);
    increase.addEventListener('click', () => size.innerText = ++ctx.lineWidth);
}
    
function LineWidth(width = null) {
    if(!width) return ctx.lineWidth;
    ctx.lineWidth = parseInt(width);
}
    
function draw(currentPos, newPos) {
    ctx.beginPath();
    ctx.moveTo(currentPos.x, currentPos.y-50);
    ctx.lineTo(newPos.x, newPos.y-50);
    ctx.stroke();
    currentPos.x = newPos.x;
    currentPos.y = newPos.y;
}

function init() {
    initCanvas();
    LineWidth(10);
    initSize();
    color.addEventListener('change', (e) => ctx.strokeStyle = e.target.value)
    eraser.addEventListener('click', () => {
        if(eraser.classList.contains('active')) {
            ctx.strokeStyle = colorPicker;
        } else {
            colorPicker = color.value;
            ctx.strokeStyle = '#ffffff';
        }
        eraser.classList.toggle('active');
    });
    save.addEventListener('click', () => {
        let data = canvas.toDataURL('image/png'),
            a = document.createElement('a');

        a.href = data;
        a.download = 'sketch.png';
        a.click();

    });
    clearBtn.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))
}

init();