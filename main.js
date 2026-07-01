// Store all loaded catalogue data globally
let allData = [];

// 1. Lade die JSON-Daten
fetch('data/katalog.json')
    .then(response => {
        if (!response.ok) throw new Error('JSON file could not be loaded');
        return response.json();
    })
    .then(data => {
        allData = data;
        renderKatalog(allData);
        // Erst wenn die Daten geladen sind, die Buchstaben hinzufügen
        addFloatingLetters(); 
    })
    .catch(error => console.error('Error loading JSON:', error));

// 2. Rendering-Funktion
function renderKatalog(items) {
    const container = document.getElementById('katalog');
    if (!container || !Array.isArray(items)) return;

    container.innerHTML = items.map(item => `
        <div class="card">
            <div class="card-header">
                <h3>${item.titel}</h3>
            </div>
            <img src="${item['@bild_pfad']}" alt="${item.titel}">
            <div class="card-content">
                <p>${item.text}</p>
            </div>
        </div>
    `).join('');
}

// 3. Hier muss die Funktion definiert sein!
function addFloatingLetters() {
    console.log("Floating Letters werden hinzugefügt...");
    // Hier steht dein Code, der die Buchstaben erzeugt.
    // Beispiel: document.querySelectorAll('.floating-letter').forEach(...)
}

// 4. DOMContentLoaded abwarten
window.addEventListener('DOMContentLoaded', () => {
    // Hier ggf. Initialisierungen, die NICHT vom JSON abhängen
});