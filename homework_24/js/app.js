document.addEventListener('DOMContentLoaded', () => {
  showUsers(users);
});

document.querySelector('.add_btn').addEventListener('click', () => {
  document.querySelector('#form').classList.remove('hidden');
  clearForm();
});

document.getElementById('view').addEventListener('click', (event) => {
  if (event.target.classList.contains('view_close')) {
    document.querySelector('#view').classList.add('hidden');
  }
})