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
    const email = form.elements.email.value;
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
        email,
        age
    }

    if (validationForm(userInfo)) {
        clearForm();

        grid.innerHTML = '';
        users.push(userInfo);
        localStorage.setItem('Users list', JSON.stringify(users));
        showUsers(users);
        document.querySelector('#form').classList.add('hidden');
    }
}

function validationForm(formData) {
    for(let value in formData) {
      if (formData[value] === '' && value !== 'id') {
        document.getElementById(`${value}`).classList.add('error');
        return false
      } else if (formData[value] !== '' && value !== 'id') {
        document.getElementById(`${value}`).classList.remove('error');
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
}