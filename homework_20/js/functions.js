function showCategories() {
    const parent = document.getElementById('categories');

    data.forEach(category => {
        const myCategoryElement = document.createElement('div');
        myCategoryElement.textContent = category.name;
        myCategoryElement.setAttribute('data-category', category.key);

        parent.appendChild(myCategoryElement);
    });
}

function showProductsByCategory(categoryId) {
    const selectedCategory = data.find(category => category.key === categoryId);
    const info = document.getElementById('info');
    const parent = document.getElementById('products');
    const product = document.getElementById('product');

    parent.innerHTML = '';
    product.innerHTML = '';
    info.innerHTML = '';
    
    parent.classList.add('active');
    product.classList.remove('active');
    info.classList.remove('active');


    selectedCategory.products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = product.name;
        productElement.setAttribute('data-product', product.id);
        productElement.setAttribute('data-category', categoryId);

        parent.appendChild(productElement);
    });
}

function showProductInfo(categoryId, productId) {
    const selectedCategory = data.find(category => category.key === categoryId);
    const selectedProduct = selectedCategory.products.find(product => product.id == productId);

    const parent = document.getElementById('product');
    parent.classList.add('active');
    parent.innerHTML = `
    <h2>${selectedProduct.name}</h2>
    <p>Price: $${selectedProduct.price}</p>
    <p>${selectedProduct.description}</p>
  `;

    const buyButton = document.createElement('input');
    buyButton.setAttribute('type', 'button');
    buyButton.setAttribute('value', 'Buy');
    buyButton.classList.add('button');


    parent.appendChild(buyButton);
}

function showShopInformation() {
    const info = document.getElementById('info');
    const products = document.getElementById('products');
    const product = document.getElementById('product');

    products.innerHTML = ''; 
    product.innerHTML = '';

    info.innerText = 'Thank you for buying!'

    products.classList.remove('active');
    product.classList.remove('active');
    info.classList.add('active');
}