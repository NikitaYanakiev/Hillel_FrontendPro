document.querySelector('.save_btn').addEventListener('click', () => {
    const grid = document.querySelector('#grid');

    if (grid.classList.contains('NOW_EDIT')) {
        saveEdit();
    } else {
        addUser();
    }
})

function addUser() {
    const grid = document.querySelector('#grid');

    const form = document.forms.userForm;
    const name = form.elements.name.value;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    const email = form.elements.email.value;
    const phoneNumber = form.elements.phoneNumber.value;
    const cardNumber = form.elements.cardNumber.value;
    const age = form.elements.age.value;
    let lastID;
    if (users.length < 1) {
        lastID = 0;
    } else {
        lastID = parseInt(users[users.length - 1].id);
    }
    const id = String(lastID + 1);

    const userInfo = {
        id,
        name,
        login,
        password,
        email,
        phoneNumber,
        cardNumber,
        age
    }

    if (validationForm(userInfo)) {
        clearForm();
        console.log(userInfo);
        grid.innerHTML = '';
        users.push(userInfo);
        localStorage.setItem('Users list', JSON.stringify(users));
        showUsers(users);
        document.querySelector('#form').classList.add('hidden');
    }
}

function validationForm(formData) {
    const regexpName = /^[A-Z][a-z]{1,} [A-Z][a-z]{1,}$/;
    const regexpEmail = /^[a-z0-9.]{1,}@[a-z0-9.]{1,}$/i; 
    const regexpPhoneNumber = /^\+?\d{10,15}$/;
    const regexpCardNumber = /^\d{16}$/;
    const regexpAge = /^(?:[1-9][0-9]?|1[0-2][0-9])$/;

    for (let value in formData) {
        if (formData[value] === '' && value !== 'id') {
            document.getElementById(`${value}`).classList.add('error');
            return false
        } else if (formData[value] !== '' && value !== 'id') {
            document.getElementById(`${value}`).classList.remove('error');
            const errorText = document.querySelectorAll('.error_text');
            errorText.forEach(text => {
                text.remove();
            })
        }

        if (value === 'name' && !regexpName.test(formData[value])) {
            document.getElementById(`${value}`).classList.add('error');
            createElement('span', { className: 'error_text' }, 'Incorrect name', document.getElementById(`${value}`).parentElement);
            return false;
        } 

        if (value === 'email' && !regexpEmail.test(formData[value])) {
            document.getElementById(`${value}`).classList.add('error');
            createElement('span', { className: 'error_text' }, 'Incorrect email', document.getElementById(`${value}`).parentElement);
            return false;
        }

        if (value === 'phoneNumber' && !regexpPhoneNumber.test(formData[value])) {
            document.getElementById(`${value}`).classList.add('error');
            createElement('span', { className: 'error_text' }, 'Incorrect phone number', document.getElementById(`${value}`).parentElement);
            return false;
        }

        if (value === 'cardNumber' && !regexpCardNumber.test(formData[value])) {
            document.getElementById(`${value}`).classList.add('error');
            createElement('span', { className: 'error_text' }, 'Incorrect card number', document.getElementById(`${value}`).parentElement);
            return false;
        }

        if (value === 'age' && !regexpAge.test(formData[value])) {
            document.getElementById(`${value}`).classList.add('error');
            createElement('span', { className: 'error_text' }, 'Incorrect age', document.getElementById(`${value}`).parentElement);
            return false;
        }
    }

    return true;
}

function clearForm() {
    document.querySelector('#grid').classList.remove('NOW_EDIT');
    const form = document.forms.userForm;
    form.elements.name.value = '';
    form.elements.login.value = '';
    form.elements.email.value = '';
    form.elements.age.value = '';
    form.elements.password.value = '';
    form.elements.phoneNumber.value = '';
    form.elements.cardNumber.value = '';
}