var btnOpen = document.querySelector('#open');
var modal = document.querySelector('.modal--container');
var close = document.querySelectorAll('.close');

/**
 * Sự kiện hiển thị modal
 * 04.08.2022
 */
btnOpen.addEventListener("click", function() {
    ModalShow();
});

/**
 * Sự kiện ẩn modal
 * 04.08.2022
 */
close.forEach(e => {
    e.addEventListener("click", function() {
        ModalShow();
    });
});

/**
 * Hàm ẩn hiện Modal
 * 04.08.2022
 */
function ModalShow() {
    modal.classList.toggle('show');
}