// Store all loaded catalogue data globally
let allData = [];

// Load the JSON file from the data folder
fetch('data/katalog.json')
    .then(response => {
        console.log('JSON response:', response);
        if (!response.ok) {
            throw new Error('JSON file could not be loaded');
        }
        return response.json();
    })
    .then(data => {
        console.log('Loaded JSON data:', data);
        allData = data;
        renderKatalog(allData); 
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
        const container = document.getElementById('katalog');
        if (container) {
            container.innerHTML = '<div class="loading">Error loading data</div>';
        }
    });

// Render catalogue items into the HTML page
function renderKatalog(items) {
    const container = document.getElementById('katalog');
    if (!container) return;

    let html = '';
    items.forEach(function(item) {
        const bild = item['@bild_pfad'];
        const titel = item.titel;
        const text = item.text;

        html += '<div class="card">' +
                '<img src="' + bild + '" alt="' + titel + '">' +
                '<h3>' + titel + '</h3>' +
                '<p>' + text + '</p>' +
                '</div>';
    });
    container.innerHTML = html;
}