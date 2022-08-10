const imgPreview = document.querySelector('.image--preview img'),
    galleryImgs = document.querySelectorAll('.gallery--container .item'),
    prev = document.querySelector('#prev'),
    next = document.querySelector('#next');

    var current = 0;

    function updateBtn() {
        if(current == 0){
            next.classList.remove('hide');
            prev.classList.add('hide');
            console.log(current);
            return;
        }

        if(current == galleryImgs.length-1) {
            prev.classList.remove('hide');
            next.classList.add('hide');
            console.log(current);
            return;
        }
    }

    prev.addEventListener('click', function() {
        updateBtn();
    });

    next.addEventListener('click', function() {
        updateBtn();
    })

    function updateImage(index) {
        const active = document.querySelector('.active');
        if (active) active.classList.remove('active');

        current = index;
        imgPreview.src = galleryImgs[index].getAttribute('src');
        galleryImgs[index].classList.add('active');
    }

    galleryImgs.forEach((img, index) => {
        img.addEventListener('click', e => {
            updateImage(index);
            updateBtn();
        });
    });

    setInterval(() => {
        updateImage(current);
        updateBtn();
        if(current < galleryImgs.length-1) {
            current++;
        } else {
            current = 0;
        }
    }, 1000);