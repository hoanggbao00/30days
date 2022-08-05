const btnRegister = document.querySelector('.btnRegister'),
    formInputs = document.querySelectorAll('.form--control input');

function showError(input, message) {
    let parent = input.parentElement,
        value = input.value.trim();
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerText = message;
}

function removeError(input) {
    let parent = input.parentElement,
        value = input.value.trim(),
        small = parent.querySelector('small');

        small.innerText = '';

    parent.classList.remove('error');
}

function checkEmptyError(input) {
    let isEmpty = false,
        value = input.value.trim();

        if(value == '') {
            isEmpty = true;
            showError(input,`${input.getAttribute('placeholder')} khong duoc de trong`);
        } else {
            removeError(input);
        }
    
    return isEmpty;
}

function checkEmail(input) {
    
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    input.value = input.value.trim();

    let isEmailInvalid = regexEmail.test(input.value);

    if(isEmailInvalid) {
        removeError(input);   
    } else {
        showError(input, 'Email khong hop le');
    }

    return isEmailInvalid;
}

function checkLength(input, min, max) {
    let inputLength = input.value.length,
        isInvalid = true;

    if(inputLength < min) {
        showError(input, `MK phai co it nhat ${min} ky tu`);
        isInvalid = false; 
    } else {
        showError(input, `MK khong duoc qua ${max} ky tu`);
        isInvalid = false;
    }

    return isInvalid;
}

function checkPassword() {
    let password = '',
        confirm = '',
        isInvalid = false;
        formInputs.forEach(e => {
            if(e.getAttribute('id') == 'password') {
                password = e;
            }
            if(e.getAttribute('id') == 'confirm') {
                confirm = e;
            }
        });
    
    isInvalid = password.value == confirm.value ? true : false;
    if(!isInvalid) {
        showError(password, 'MK khong khop nhau');
        showError(confirm, 'MK khong khop nhau');
    } else {
        if(checkLength(password,6,12)) {
            removeError(password);
        }
        if(checkLength(confirm, 6, 12)) {
            removeError(confirm);
        }
    }
    return isInvalid;
}

btnRegister.addEventListener('click', function() {
    formInputs.forEach(ele => {
        if(!checkEmptyError(ele)) {
            if(ele.getAttribute('id') == 'email') {
                checkEmail(ele);
            }
            checkPassword();
            }
    });

});