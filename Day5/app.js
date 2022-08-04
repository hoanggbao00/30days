var searchBtn = document.querySelector('.search-box__button');
var searchInput = document.querySelector('.search-box__input');
var searchBox = document.querySelector('.search-box');


searchBtn.addEventListener('click', function(e) {
    searchBox.classList.add('open');
    searchInput.focus();
})

searchInput.onblur = () => {
    if(!searchInput.value)
        searchBox.classList.remove('open');

}