function showUsers(usersList) {
    const parent = document.querySelector('#grid');
    parent.addEventListener('click', gridClickHandler);

    if (usersList.length < 1) {
        parent.innerHTML = '<p class="empty"> List empty :( </p>'
    }
    
    for (let user of usersList) {
        const userRow = document.createElement('div');
        userRow.classList.add('user_row');
        userRow.setAttribute('data-id', user.id);

        createElement('div', { className: 'user_id' }, user.id, userRow);
        createElement('div', { className: 'user_name' }, user.name, userRow);

        const divButtons = createElement('div', { className: 'user_buttons' }, '', userRow);
        createElement('input', { type: 'button', value: 'View', 'data-action': 'view' }, '', divButtons);
        createElement('input', { type: 'button', value: 'Edit', 'data-action': 'edit' }, '', divButtons);
        createElement('input', { type: 'button', value: 'Delete', 'data-action': 'delete' }, '', divButtons);

        parent.appendChild(userRow);
    }
}

function createElement(tagName, attributes, content, parent, eventHandlers) {
    const element = document.createElement(tagName);

    for (let key in attributes) {
        const attribute = key === 'className' ? 'class' : key;
        element.setAttribute(attribute, attributes[key]);
    }

    for (let event in eventHandlers) {
        element.addEventListener(event, eventHandlers[event]);
    }

    element.textContent = content;
    parent.appendChild(element);

    return element;
}

function gridClickHandler(event) {
    if (event.target.nodeName === 'INPUT') {
        const dataAction = event.target.getAttribute('data-action');
        const userId = event.target.closest('.user_row').getAttribute('data-id');

        const user = getUserById(userId);
        switch (dataAction) {
            case 'view':
                showUserData(user);
                break;
            case 'edit':
                openEdit(user);
                break;
            case 'delete':
                deleteUser(user);
                break;
        }
    }
}

function getUserById(id) {
    return users.find(user => user.id === id);
}

function showUserData(user) {
    document.querySelector('#view').classList.remove('hidden');
    document.querySelector('#view').innerHTML = `
        <div class="view_modal">
            <p> User name: ${user.name} </p>
            <p> User login: ${user.login} </p>
            <p> User email: ${user.email} </p>
            <p> User age: ${user.age} </p>
            <span class="view_close">X</span>
        </div>
    `;
}

function openEdit(user) {
    document.querySelector('#form').classList.remove('hidden');

    const grid = document.querySelector('#grid');
    grid.classList.add('NOW_EDIT');

    const elems = document.querySelectorAll('.edit_element');
    if (elems) {
        elems.forEach(elem => {
            elem.classList.remove('edit_element');
        })
    }

    const editElement = document.querySelector(`[data-id="${user.id}"]`);
    editElement.classList.add('edit_element');

    const form = document.forms.userForm;
    form.elements.name.value = user.name;
    form.elements.login.value = user.login;
    form.elements.email.value = user.email;
    form.elements.age.value = user.age;
}

function saveEdit() {
    const user = document.querySelector('.edit_element');
    const userID = user.getAttribute('data-id');

    const form = document.forms.userForm;
    const name = form.elements.name.value;
    const login = form.elements.login.value;
    const email = form.elements.email.value;
    const age = form.elements.age.value;

    const userData = {
        name,
        login,
        email,
        age
    }

    users.forEach((user) => {
        if (user.id === userID) {
            user.name = userData.name;
            user.login = userData.login;
            user.email = userData.email;
            user.age = userData.age;
        }
    })

    if (validationForm(userData)) {
        clearForm();

        grid.innerHTML = '';
        showUsers(users);
        document.querySelector('#form').classList.add('hidden');
        localStorage.setItem('Users list', JSON.stringify(users));
    }
}

function deleteUser(user) {
    let confirmation = confirm('Are you sure you want to DELETE the user?');

    if (confirmation) {
        users = JSON.parse(localStorage.getItem('Users list'));
        let indexToDelete = users.findIndex(u => u.id === user.id);
    
        users.splice(indexToDelete, 1);
    
        localStorage.setItem('Users list', JSON.stringify(users));
    
        document.querySelector('#view').classList.add('hidden');

        grid.innerHTML = '';
        showUsers(users);
    }
}