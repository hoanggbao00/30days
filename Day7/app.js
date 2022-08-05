const searchInput = document.querySelector('#search'),
    searchField = document.querySelector('.search-field'),
    removeAllBtn = document.querySelector('.remove-all');

var tags = [];

function renderTags() {
    searchField.innerHTML = ''
    tags.forEach((element, index) => {
        searchField.innerHTML += `<li>
        ${element}
        <i onclick="deleteTag(this)" index="${index}" class="fal fa-times"></i>
    </li>
        `
    });

    searchField.appendChild(searchInput);
    searchInput.focus();
    searchInput.value = '';
}

function addTag(tag) {
    tags.push(tag)
    renderTags();
}

searchInput.addEventListener('keydown', function(e) {
    if(e.key == 'Enter') {
        const tag = searchInput.value.trim();
        if(tag)
            addTag(tag);
    }
})

function deleteTag(ele) {
    let me = ele || null;
    
    if(!me) {
        tags.splice(0);
    } else {
        const index = me.getAttribute('index');
        if(index == 0) {
            tags.splice(0,1);
        } else {
            tags.splice(index, 1)
        }
    }
    renderTags();
}

function removeAll() {
    deleteTag();
}