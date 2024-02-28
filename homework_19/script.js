'use strict';

const images = document.querySelectorAll('.img');
const btn = document.getElementById('btn');

function showRandomImg() {
    let randomNum = Math.floor(Math.random() * images.length) + 1;

    images.forEach((item, i) => {
        item.style.display = 'none';

        if (i + 1 === randomNum) {
            item.style.display = '';
        }
    })
}

showRandomImg();

btn.addEventListener('click', showRandomImg);