const usersData = [
  {
    id: "1",
    name: 'John Smith',
    login: 'jsmith',
    password: '12345678',
    email: 'john.smith@ithillel.ua',
    phoneNumber: '+380333333333',
    cardNumber: '1111222233334444',
    age: 30,
  },
  {
    id: "2",
    name: 'Stacie Mcdonald',
    login: 'smcdonald',
    password: 'qwer1234',
    email: 'stacie.mcdonald@ithillel.ua',
    phoneNumber: '+380444444444',
    cardNumber: '1111222233334444',
    age: 25,
  },
];

let users = JSON.parse(localStorage.getItem('Users list'));
if (!users) {
    localStorage.setItem('Users list', JSON.stringify(usersData));
    users = JSON.parse(localStorage.getItem('Users list'));
}