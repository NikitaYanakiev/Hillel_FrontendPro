'use strict';

function showRandomImg(elementCount) {
    let randomImg = Math.floor(Math.random() * elementCount) + 1;

    const img = document.createElement('img');
          img.setAttribute('src', `img/${randomImg}.jpg`);
          img.setAttribute('alt', `image`);
          document.body.append(img);
}

showRandomImg(9);