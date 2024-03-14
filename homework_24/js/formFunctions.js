document.querySelector('.save_btn').addEventListener('click', () => {
  // TBD: Validation
  const grid = document.querySelector('#grid');

  if (grid.classList.contains('NOW_EDIT')) {
    saveEdit();
  } else {
    addUser();
  } 
})