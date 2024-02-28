'use strict';

const text = document.getElementById('text');
const div = document.querySelector('.div-ghost');

text.addEventListener('focus', () => {
    div.classList.add('visible');
})

text.addEventListener('focusout', () => {
    div.classList.remove('visible');
})