const container = document.querySelector('.container'),
    upload = document.querySelector('#myImage'),
    label = document.querySelector('.container .label'),
    preview = document.querySelector('#preview'),
    close = document.querySelector('.close');

    upload.addEventListener('change', function(e) {
        let file = upload.files[0];
        if(!file) return;
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.classList.add('preview');
        label.classList.add('hide');
        preview.innerHTML = '';
        preview.appendChild(img);
        if(close.className.includes('hide')) close.classList.remove('hide');
    });

    close.addEventListener('click', function(e) {
        preview.innerHTML = '';
        delete upload.files;
        label.classList.remove('hide');
        close.classList.add('hide');
    });