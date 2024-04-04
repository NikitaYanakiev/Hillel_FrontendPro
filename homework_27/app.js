function loadCards(url, wrapperSelector, type, next) {
    let apiUrl = next || url;
    fetch(apiUrl)
        .then(result => result.json())
        .then(result => {
            const wrapper = document.querySelector(wrapperSelector);

            result.results.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');

                const title = document.createElement('h2');
                title.textContent = item.name;

                const viewButton = document.createElement('button');
                viewButton.classList.add('view-btn');
                viewButton.textContent = 'View';
                viewButton.setAttribute('data-url', item.url);
                viewButton.setAttribute('data-type', type); 
                card.appendChild(title);
                card.appendChild(viewButton);
                wrapper.appendChild(card);
            });

            if (result.next) {
                const loadMoreButton = document.createElement('button');
                loadMoreButton.classList.add('load-more');
                loadMoreButton.textContent = 'Load More';
                loadMoreButton.addEventListener('click', () => {
                    loadCards(url, wrapperSelector, type, result.next); 
                    loadMoreButton.remove();
                });
                wrapper.parentElement.appendChild(loadMoreButton);
            }
        })
}

loadCards('https://swapi.dev/api/people/', '#characters', 'people');
loadCards('https://swapi.dev/api/planets/', '#planets', 'planets');
loadCards('https://swapi.dev/api/starships/', '#starships', 'starships');

document.querySelectorAll('.cards').forEach(item => {
    item.addEventListener('click', (event) => {
        if (event.target.classList.contains('view-btn')) {
            const modal = document.querySelector('#myModal');
            const itemName = modal.querySelector('.item-name');
            const itemDetails = modal.querySelector('.item-details');
            const itemType = event.target.getAttribute('data-type');
            const itemUrl = event.target.getAttribute('data-url');
    
            fetch(itemUrl)
                .then(result => result.json())
                .then(data => {
                    let details = '';
                    if (itemType === 'people') {
                        fetch(data.homeworld)
                            .then (result => result.json())
                            .then(planet => {
                                details = `<p class="item-details">
                                    <span>Home:</span> ${planet.name}<br>
                                    <span>Gender:</span> ${data.gender}<br>
                                    <span>Height:</span> ${data.height} cm<br>
                                    <span>Mass</span>: ${data.mass} kg<br>
                                    <span>Skin color:</span> ${data.skin_color}</p>`;
                                itemName.innerText = data.name;
                                itemDetails.innerHTML = details;
                            })
                    } else if (itemType === 'planets') {
                        details = `<p class="item-details">
                            <span>Terrain:</span> ${data.terrain}<br>
                            <span>Climate:</span> ${data.climate}<br>
                            <span>Diameter:</span> ${data.diameter} km<br>
                            <span>Population:</span> ${data.population}
                        </p>`;
                        itemName.innerText = data.name;
                        itemDetails.innerHTML = details;
                    } else if (itemType === 'starships') {
                        details = `<p class="item-details">
                            <span>Model:</span> ${data.model}<br>
                            <span>Manufacturer:</span> ${data.manufacturer}<br>
                            <span>Length:</span> ${data.length} m<br>
                            <span>Crew:</span> ${data.crew}<br>
                            <span>Coast:</span> ${data.cost_in_credits} credits
                        </p>`;
                        itemName.innerText = data.name;
                        itemDetails.innerHTML = details;
                    }
                    modal.style.display = 'block';
                })
        }
    });
})

const modal = document.querySelector('#myModal');

modal.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});

document.getElementById('tabs').addEventListener('click', (event) => {
    if (event.target.classList.contains('tab')) {
        const containers = document.querySelectorAll('.container');
        const tab = document.querySelectorAll('.tab');
        const dataTab = event.target.getAttribute('data-tab');
        containers.forEach(item => {
            item.classList.remove('active');
        });

        tab.forEach(item => {
            item.classList.remove('tab_active');
        })
        event.target.classList.add('tab_active');
        const section = document.getElementById(dataTab);
        section.parentElement.classList.add('active');
    }
})