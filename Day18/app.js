const boxes = document.querySelectorAll('.box'),
     targetList = document.querySelectorAll('.target');
let current = null;


targetList.forEach(target => {
    target.addEventListener('dragstart', function(e) {
        this.classList.add('dragging');
        current = this;
    });
    target.addEventListener('dragend', function(e) {
        this.classList.remove('dragging');
    });
});

boxes.forEach(box => {
    box.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    box.addEventListener('drop', function(e) {
        if(!box.querySelector('.target')) {
            this.appendChild(current);
        }
    });
});