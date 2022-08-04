var images = document.querySelectorAll('.image img');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery--inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;

function showGallery() {
    if(!gallery.classList.contains('show'))
        gallery.classList.add('show');
    galleryImg.src = images[currentIndex].src;

    if(currentIndex == 0) {
        prev.style.display = 'none';
    } else if(currentIndex == images.length-1){
        next.style.display = 'none';
    } else {
        prev.style.display = 'unset';
        next.style.display = 'unset';
    }
}

images.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentIndex = index;
        showGallery();
    })
});

close.addEventListener('click', function() {
    gallery.classList.remove('show');
});

document.addEventListener('keydown', function(e) {
    if(e.key == "Escape") {
        gallery.classList.remove('show');
    }
});

prev.addEventListener('click', function() {
    currentIndex -= 1;
    showGallery();
});

next.addEventListener('click', function() {
    currentIndex += 1;
    showGallery();
});