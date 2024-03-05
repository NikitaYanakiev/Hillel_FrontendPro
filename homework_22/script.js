const button = document.getElementById('button');
let data;

const ALL_LANGUAGES = {
    en: 'English',
    de: 'Deutsche',
    ru: 'Russian',
    ua: 'Ukrainian'
}

const ALL_GENDERS = {
    M: 'Male',
    F: 'Female',
}

const ALL_CITIES = {
    0: '',
    1: 'Odessa',
    2: 'New York',
    3: 'Toronto',
}

button.addEventListener('click', () => {
    data = getData();
    makeTable();
})

function getData() {
    const form = document.forms.mainForm;
    const name = form.elements.name.value;
    const surname = form.elements.surname.value;
    const date = form.elements.dateOfBirth.value;
    const gender = form.elements.gender.value;
    const city = form.elements.city.value;
    const address = form.elements.address.value;
    
    const languages = [];
    form.languages.forEach(language => {
        if (language.checked) {
            languages.push(ALL_LANGUAGES[language.value]);
        }
    })

    const data = {
        name,
        surname,
        date,
        gender,
        city,
        address,
        languages,
    }

    console.log(data);
    return data;
}


function makeTable() {
    document.body.innerHTML = '';

    const table = `
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>City</th>
                <th>Address</th>
                <th>Languages</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${data.name}</td>
                <td>${data.surname}</td>
                <td>${data.date}</td>
                <td>${ALL_GENDERS[data.gender]}</td>
                <td>${ALL_CITIES[data.city]}</td>
                <td>${data.address}</td>
                <td>${data.languages}</td>
            </tr>
        </tbody>
    </table>
    `;

    document.body.innerHTML = table;
}