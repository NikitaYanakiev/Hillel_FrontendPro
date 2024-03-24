const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus();
})

const tooltips = new bootstrap.Tooltip(document.getElementById('myInput'));

const toggleAlertBtn = document.getElementById('toggleAlertBtn');
const bootstrapAlert = document.getElementById('bootstrapAlert');
toggleAlertBtn.addEventListener('click', function () {
    if (bootstrapAlert.style.display === 'none') {
        bootstrapAlert.style.display = 'block';
    } else {
        bootstrapAlert.style.display = 'none';
    }
});


const myBirthday = moment('1999-04-07');

function writeDate (date, format, message) {
    const wrapper = document.createElement('div');
    const formattedDate = date.format(format);
    wrapper.textContent = `${message} ${formattedDate}`;
    document.body.append(wrapper);
}

writeDate(myBirthday, 'MMMM Do YYYY', 'My Birthday:');

function writeUserBirthday() {
    const userBirthdayString = prompt('Enter your date of birth in the format YYYYY-MM-DD:');
    const userBirthday = moment(userBirthdayString, 'YYYY-MM-DD');

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateRegex.test(userBirthdayString)) {
        const alertMessage = document.createElement('div');
        alertMessage.classList.add('alert', 'alert-danger');
        alertMessage.textContent = 'Incorrect date format! Use the format YYYYY-MM-DD.';
        document.body.appendChild(alertMessage);
    } else {
        writeDate(userBirthday, 'Do MMMM YYYY', 'Your date of birth:');
    }
}

writeUserBirthday();