window.addEventListener('DOMContentLoaded', showCategories);

document.getElementById('categories').addEventListener('click', event => {
    const categoryId = event.target.getAttribute('data-category');
    showProductsByCategory(categoryId);
    clearInfo();
});

document.getElementById('products').addEventListener('click', event => {
    const productId = event.target.getAttribute('data-product');
    const categoryId = event.target.getAttribute('data-category');

    showProductInfo(categoryId, productId);
    clearInfo();
});

document.getElementById('product').addEventListener('click', event => {
    if (event.target.classList.contains('button')) {
        const form = document.querySelector('form');
        if (!form) {
            openForm();
        }
    }
});

document.body.addEventListener('click', event => {
    if (event.target.classList.contains('orderBtn'))  {
        dataOrder = getDataOfForm();
    }
});
