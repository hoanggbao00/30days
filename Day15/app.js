const filterInput = document.querySelector('.filter--input input'),
    productContainer = document.querySelector('.product--container'),
    handlerStatus = document.querySelector('.status');

    const data = fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(item => {
        init(item);
    });

    function init(item) {
        item.forEach(product => {
            const newProduct = document.createElement('div');
            newProduct.classList.add('product__item');
            newProduct.innerHTML = `
                 <img src="${product.image}">
                 <div class="product__item--info">
                     <h3 class="item--name">${product.title}</h3>
                     <p class="item--price">\$${product.price}</p>
                 </div>`

                 productContainer.appendChild(newProduct);
        });
        handlerStatus.innerText = '';
    }

    function checkValue(products,value) {
        products.forEach(product => {
            const text = product.querySelector('.item--name')
                        .innerText.toLowerCase();
            if(value != '') {
                if(text.includes(value)) {
                    product.classList.remove('hide');
                }
                else {
                    product.classList.add('hide');
                }
            } else {
                product.classList.remove('hide');
            }
        })
    }

    function printStatus(value) {
        let found = document.querySelectorAll('.product__item:not(.hide)').length;
        if(value == '') return handlerStatus.innerText = '';
        if(found != 0) handlerStatus.innerText = `Tìm thấy ${found} kết quả`;
        else handlerStatus.innerText = `Không tìm thấy "${value}"`;
   
    }

    filterInput.addEventListener('input', function(e) {
        const products = document.querySelectorAll('.product__item');
        let value = e.target.value;
            checkValue(products,value.toLowerCase());
            printStatus(value);
    });