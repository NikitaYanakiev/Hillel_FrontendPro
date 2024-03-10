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
    if (event.target.classList.contains('orderBtn')) {
        dataOrder = getDataOfForm();
    }
});

document.getElementById('myOrder').addEventListener('click', () => {
    clearInfo();
    openOrderList();
})

document.getElementById('orders').addEventListener('click', (event) => {
    if (event.target.parentElement.classList.contains('orders__item-body')) {
        event.target.parentElement.nextElementSibling.classList.toggle('active')
    }
});

document.getElementById('orders').addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
        const indexToDelete = event.target.getAttribute('data-remove');
        deleteOrder(indexToDelete);
    }
});
