function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function loadStores() {
    fetch('/api/stores')
        .then(response => response.json())
        .then(stores => {
            const storesList = document.getElementById('storesList');
            storesList.innerHTML = '';
            stores.forEach(store => {
                const storeElement = document.createElement('div');
                storeElement.className = 'grid-item';
                storeElement.innerHTML = `
                    <h2>${store.name}</h2>
                    <p>District: ${store.district || 'N/A'}</p>
                    <a href="https://${store.url}">To store</a>
                `;
                storesList.appendChild(storeElement);
            });
        })
        .catch(error => console.error('Error fetching stores:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    const loadButton = document.getElementById('loadStoresButton');
    loadButton.addEventListener('click', loadStores);
});