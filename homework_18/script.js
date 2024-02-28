'use strict';

function makeTable(from, to) {
    const newTable = document.createElement('table');
          newTable.classList.add('table');
          document.body.append(newTable);

    let newRow;
    for (let i = from; i <= to; i++) {
        if (i % 10 === 1) {
            newRow = document.createElement('tr');
            newTable.append(newRow);
        }

    const newElement = document.createElement('td');
          newElement.classList.add('element');
          newElement.innerText = `${i}`;
          newRow.append(newElement);
    }
}

makeTable(1, 100);