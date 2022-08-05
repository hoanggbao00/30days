const btn = document.querySelector('.keypress'),
    result = document.querySelector('.result'),
    circle = document.querySelector('.circle'),
    cardResults = document.querySelectorAll('.card p:last-child');


var pressed = false;

document.addEventListener('keydown', function(e) {
    if(!pressed) btn.classList.add('hide');
    if(result.classList.contains('hide')) result.classList.remove('hide');

    showResult(e);
});

function showResult(event) {
    cardResults.forEach(element => {
        const id = element.getAttribute('id');

        element.innerText = event[id];
        circle.classList.contains(id) ? circle.innerText = event[id] : '';
    });
}
