const usersData = [
  {
    id: "1",
    name: 'John Smith',
    login: 'jsmith',
    email: 'john.smith@ithillel.ua',
    age: 30,
  },
  {
    id: "2",
    name: 'Stacie Mcdonald',
    login: 'smcdonald',
    email: 'stacie.mcdonald@ithillel.ua',
    age: 25,
  },
];

let users = JSON.parse(localStorage.getItem('Users list'));
if (!users) {
    localStorage.setItem('Users list', JSON.stringify(usersData));
    users = JSON.parse(localStorage.getItem('Users list'));
}