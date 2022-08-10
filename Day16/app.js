const animationEles = document.querySelectorAll('.aos');

function toggleAnimation(ele) {
    let rect = ele.getClientRects()[0],
        heigtScreen = window.innerHeight;

        if(!(rect.bottom < 0 || rect.top > heigtScreen)) {
            ele.classList.add('start');
        } else {
            ele.classList.remove('start')
        }
}

function checkAnimation() {
    animationEles.forEach(e => {
        toggleAnimation(e);
    });
}

window.onscroll = checkAnimation;