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
    const parent = document.getElementById('products');
    const product = document.getElementById('product');

    parent.innerHTML = '';
    product.innerHTML = '';

    parent.classList.add('active');
    product.classList.remove('active');

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
    <h2 class="product_name">${selectedProduct.name}</h2>
    <p class="product_price">Price: $${selectedProduct.price}</p>
    <p>${selectedProduct.description}</p>
    `;

    const buyButton = document.createElement('input');
    buyButton.setAttribute('type', 'button');
    buyButton.setAttribute('value', 'Buy');
    buyButton.classList.add('button');

    parent.appendChild(buyButton);
}

function openForm() {
    const shop = document.getElementById('shop');
    const wrapper = document.createElement('div');
    wrapper.classList.add('form__wrapper');

    const form = `
    <form action="#" name="userForm">
        <p><input type="text" name="name" id="name" placeholder="Enter your full name"><span class='error_name'></span></p>


        <select name="city" id="city">
            <option value="0">--select city--</option>
            <option value="1">Odessa</option>
            <option value="2">Kiev</option>
            <option value="3">Lviv</option>
            <option value="4">Kharkiv</option>
        </select>
        <span class='error_city'></span>

        <p><input type="text" name="post" id="post" placeholder="Enter post office"><span class='error_post'></span></p>

        <p><input type="radio" name="payment" value="cash" class="payment"/> Cash </p>
        <p><input type="radio" name="payment" value="card" class="payment" /> Bank card </p>
        <span class='error_payment'></span>

        <p><input type="number" name="count" id="count" min="1" value="1"> Quantity of product </p>

        <textarea name="comment" id="comment" cols="25" rows="8" placeholder="Order comment"></textarea>

        <p><input type="button" value="Order" class="orderBtn"></p>
    </form>
    `;

    wrapper.innerHTML = form;
    shop.append(wrapper);
}

function getDataOfForm() {
    const form = document.forms.userForm;
    const name = form.elements.name.value;
    const city = form.elements.city.value;
    const post = form.elements.post.value;
    const payment = form.elements.payment.value;
    const count = form.elements.count.value;
    const comment = form.elements.comment.value;
    const productName = product.querySelector('.product_name').innerText;
    const productPrice = product.querySelector('.product_price').innerText.slice(8);
    const totalPrice = count * productPrice;
    const date = getDateAndTime();

    const dataOrder = {
        date,
        productName,
        productPrice,
        name,
        city,
        post,
        payment,
        count,
        totalPrice,
        comment
    }

    if (validationForm(dataOrder)) {
        console.log(dataOrder);
        console.log(dataOrder.date);
        showOrderInfo(dataOrder);
        addOrderInLocalStorage(dataOrder);
        return dataOrder;
    }
}

function showOrderInfo(dataOrder) {
    const wrapper = document.querySelector('.form__wrapper');
    const info = document.getElementById('info');
    const products = document.getElementById('products');
    const product = document.getElementById('product');

    const oderInfo = `
        <table class='table'>
            <thead class='thead'>
                <tr class='tr'>
                    <th class='th'>Product name</th>
                    <th class='th'>Product price</th>
                    <th class='th'>Name</th>
                    <th class='th'>City</th>
                    <th class='th'>Post Office</th>
                    <th class='th'>Payment</th>
                    <th class='th'>Quantity of product</th>
                    <th class='th'>Total price</th>
                    <th class='th'>Order comment</th>
                </tr>
            </thead>
            <tbody class='tbody'>
                <tr class='tr'> 
                    <td class='td'>${dataOrder.productName}</td>
                    <td class='td'>${dataOrder.productPrice}$</td>
                    <td class='td'>${dataOrder.name}</td>
                    <td class='td'>${ALL_CITIES[dataOrder.city]}</td>
                    <td class='td'>${dataOrder.post}</td>
                    <td class='td'>${dataOrder.payment}</td>
                    <td class='td'>${dataOrder.count}</td>
                    <td class='td'>${dataOrder.totalPrice}$</td>
                    <td class='td'>${dataOrder.comment}</td>
                </tr>
            </tbody>
        </table>
        `;

    wrapper.innerHTML = '';
    products.innerHTML = '';
    product.innerHTML = '';

    info.innerText = 'Thank you for buying!';

    products.classList.remove('active');
    product.classList.remove('active');
    info.classList.add('active');

    wrapper.innerHTML = oderInfo;
}

function clearInfo() {
    const info = document.getElementById('info');
    const wrapper = document.querySelector('.form__wrapper');

    if (wrapper && info) {
        info.innerHTML = '';
        wrapper.innerHTML = '';

        info.classList.remove('active');
        wrapper.remove();
    }
}

function validationForm(formData) {
    for (const key in formData) {
        if (key === 'name' && formData[key] === '') {
            document.querySelector('.error_name').innerHTML = 'Enter name for order';
            document.getElementById('name').classList.add('error');
            return false;
        } else if (key === 'name' && formData[key] !== '') {
            document.querySelector('.error_name').innerHTML = '';
            document.getElementById('name').classList.remove('error');
        }

        if (key === 'city' && formData[key] === '0') {
            document.querySelector('.error_city').innerHTML = 'Enter city for order';
            document.getElementById('city').classList.add('error');
            return false;
        } else if (key === 'city' && formData[key] !== '0') {
            document.querySelector('.error_city').innerHTML = '';
            document.getElementById('city').classList.remove('error');
        }

        if (key === 'post' && formData[key] === '') {
            document.querySelector('.error_post').innerHTML = 'Enter post office for order';
            document.getElementById('post').classList.add('error');
            return false;
        } else if (key === 'post' && formData[key] !== '') {
            document.querySelector('.error_post').innerHTML = '';
            document.getElementById('post').classList.remove('error');
        }

        if (key === 'payment' && formData[key] === '') {
            document.querySelector('.error_payment').innerHTML = 'Enter payment for order';
            return false;
        } else if (key === 'payment' && formData[key] !== '') {
            document.querySelector('.error_payment').innerHTML = '';
        }

    }
    return true;
}

function openOrderList() {
    const shop = document.getElementById('shop');
    const orders = document.getElementById('orders');
    const btn = document.getElementById('myOrder');

    if (shop.classList.contains('active')) {
        shop.classList.toggle('active');
        orders.classList.toggle('active');
        btn.innerText = 'Back';
        makeOrdersList();
    } else {
        shop.classList.toggle('active');
        orders.classList.toggle('active');
        btn.innerText = 'My orders';
        orders.innerHTML = '';
    }
}

function addOrderInLocalStorage(object) {
    orderList.push(object);
    localStorage.setItem('My orders', JSON.stringify(orderList));
}

function makeOrdersList() {
    const myOrders = JSON.parse(localStorage.getItem('My orders'));
    const ordersWrapper = document.getElementById('orders');

    const orderInfo = `
        <div class="orders__list">
            <div class="orders__head">
                <div class="head__orders-item">Date</div>
                <div class="head__orders-item">Total Price</div>
                <div class="head__orders-item">Delete</div>
            </div>
       
        </div>
        `;
    ordersWrapper.innerHTML = orderInfo;

    const list = document.querySelector('.orders__list');
    myOrders.forEach((order, i) => {
        let item = document.createElement('div');
        item.classList.add('orders__item');

        let orderRow = `
                    <div class="orders__item-body">
                        <div class="item__orders-date">${order.date}</div>
                        <div class="item__orders-totalprice">${order.totalPrice}$</div>
                        <div class="item__orders-remove"><span class="remove" data-remove="${i}">X</span></div>
                    </div>
                    <div class="orders__item-info">
                        <div class="orders__item-details"><span>Product name:</span> ${order.productName}</div>
                        <div class="orders__item-details"><span>Product price:</span> ${order.productPrice}$</div>
                        <div class="orders__item-details"><span>Full name:</span> ${order.name}</div>
                        <div class="orders__item-details"><span>City:</span> ${ALL_CITIES[order.city]}</div>
                        <div class="orders__item-details"><span>Post office:</span> ${order.post}</div>
                        <div class="orders__item-details"><span>Payment:</span> ${order.payment}</div>
                        <div class="orders__item-details"><span>Quantity of product:</span> ${order.count}</div>
                        <div class="orders__item-details"><span>Total price:</span> ${order.totalPrice}$</div>
                        <div class="orders__item-details"><span>Comment:</span> ${order.comment}</div>
                    </div>
            `;

        item.innerHTML = orderRow;
        list.append(item);
    });

    if (myOrders.length < 1) {
        ordersWrapper.innerHTML = '<h1 class="orders_empty"> No orders :(</h1>';
    }
}

function getDateAndTime() {
    let date = new Date();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    return formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
}

function deleteOrder(index) {
    const myOrders = JSON.parse(localStorage.getItem('My orders'));
    let indexToDelete = index;

    myOrders.splice(indexToDelete, 1);

    localStorage.setItem('My orders', JSON.stringify(myOrders));

    makeOrdersList();
}