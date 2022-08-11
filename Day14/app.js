const imgPreview = document.querySelector('.image--preview img'),
    galleryImgs = document.querySelectorAll('.gallery--container .item'),
    prev = document.querySelector('#prev'),
    next = document.querySelector('#next');

    var current = 0;

    function updateBtn() {
        if(current == 0){
            next.classList.remove('hide');
            prev.classList.add('hide');
            return;
        }

        if(current == galleryImgs.length-1) {
            prev.classList.remove('hide');
            next.classList.add('hide');
            return;
        }

        next.classList.remove('hide');
        prev.classList.remove('hide');
    }

    prev.addEventListener('click', function() {
        clearInterval(autoplay);
        updateImage(--current);
        foo();
    });

    next.addEventListener('click', function() {
        clearInterval(autoplay);
        updateImage(++current);
        foo();
    })

    function updateImage(index) {
        const active = document.querySelector('.active');
        if (active) active.classList.remove('active');

        current = index;
        imgPreview.src = galleryImgs[index].getAttribute('src');
        galleryImgs[index].classList.add('active');
        updateBtn();
    }

    galleryImgs.forEach((img, index) => {
        img.addEventListener('click', e => {
            updateImage(index);
        });
    });

    let autoplay;
    function foo() {
        autoplay = setInterval(() => {
            updateImage(current);
            if(current < galleryImgs.length-1) {
                current++;
            } else {
                current = 0;
            }
        }, 1000);
    }

    foo();