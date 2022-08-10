const process = document.querySelector('.process'), 
        range = document.querySelector('.range'),
        value = document.querySelector('.range span');

function updateProcess(percent) {
    process.style.width = `${percent}%`;
    value.innerHTML = `${percent}%`;
}

    range.addEventListener('mousemove', function(e) {
        var processWidth = e.pageX - this.offsetLeft;
        var percent = processWidth / this.offsetWidth * 100;
        percent = Math.round(percent);
        updateProcess(percent);
    });