const btns = document.querySelectorAll('.btn'),
    warpper = document.querySelector('#toast-wrapper');

btns.forEach(ele => {
    ele.addEventListener('click', function() {
        let me = this;

        let status = me.className.replace('btn','').trim();
        showToast(status);
    });
});

function showToast(status, message = `This is ${status} message !`) {
    let toast = document.createElement('div'),
        icon = '';
    toast.classList.add(`toast`);
    toast.classList.add(status);

    if (status == 'success') {
        icon = `<i class="fas fa-check-circle"></i>`
    }
    
    if (status == 'warning') {
        icon = `<i class="fad fa-exclamation-circle"></i>`
    }

    if (status == 'error') {
        icon = `<i class="fad fa-exclamation-triangle"></i>`;
    }

    toast.innerHTML = `
    <div class="toast--icon">${icon}</i></div>
    <div class="toast--message">
        <span>${message}</span></div>
    <div class="timer"></div>
    `

    warpper.appendChild(toast);

    setTimeout(() => {
        toast.style.animationName = 'hide';
    }, 2000);
    setTimeout(() => {
        warpper.removeChild(toast);
    }, 3000);
}