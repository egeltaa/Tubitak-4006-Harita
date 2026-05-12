const map = L.map('map').setView([41.0185, 29.0255], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
map.invalidateSize();

const yerler = [
    {
        id: 1,
        ad: "Şair Nedim Caddesi",
        koordinat: [41.044008, 29.001633],
        resim: "",
        link: "https://wikipedia.org",
        aciklama: "."
    },
    {
        id: 2,
        ad: "Cemal Süreya Sokak",
        koordinat: [40.988698, 29.022150],
        resim: "",
        link: "https://wikipedia.org",
        aciklama: "."
    },
    {
        id: 3,
        ad: "Can Yücel Sokak",
        koordinat: [41.030207, 29.037386],
        resim: "",
        link: "https://wikipedia.org",
        aciklama: "."
    },
    {
        id: 4,
        ad: "Fazıl Hüsnü Dağlarca Sokak",
        koordinat: [40.986343, 29.025519],
        resim: "",
        link: "https://wikipedia.org",
        aciklama: "."
    },
    {
        id: 5,
        ad: "Melih Cevdet Anday Sokak",
        koordinat: [40.989181, 29.061434],
        resim: "",
        link: "https://wikipedia.org",
        aciklama: "."
    },
    {
        id: 6,
        ad: "Mehmet Akif Ersoy Caddesi",
        koordinat: [41.036914, 29.065755],
        resim: "",
        link: "https://wikipedia.org",
        aciklama: "."
    },
    {
        id: 7,
        ad: "Necip Fazıl Kısakürek Sokak",
        koordinat: [41.037376, 29.089138],
        resim: "",
        link: "https://wikipedia.org",
        aciklama: "."
    },
    {
        id: 8,
        ad: "Oğuz Atay'ın Tutunamayanları yazdığı ev",
        koordinat: [41.031901, 28.980064],
        resim: "",
        link: "https://wikipedia.org",
        aciklama: "."
    },
    {
        id: 9,
        ad: "Sadri Alışık Sokak",
        koordinat: [41.034043, 28.981196],
        resim: "",
        link: "https://wikipedia.org",
        aciklama: "."
    },
    {
        id: 10,
        ad: "Orhan Kemal Müzesi",
        koordinat: [41.03055, 28.98357],
        resim: "",
        link: "https://wikipedia.org",
        aciklama: "."
    },
    {
        id: 11,
        ad: "Yahya Kemal Parkı",
        koordinat: [41.0505, 29.0068],
        resim: "",
        link: "https://wikipedia.org",
        aciklama: "."
    },
    {
        id: 12,
        ad: "Şair Leyla Sokağı",
        koordinat: [41.043219, 29.004534],
        resim: "",
        link: "https://wikipedia.org",
        aciklama: "."
    }
];

function detayGoster(id) {
    const yer = yerler.find(y => y.id === id);
    if (!yer) return;

    const listPanel = document.getElementById('list-view');
    const detailsPanel = document.getElementById('details-view');
    const content = document.getElementById('details-content');

    listPanel.style.display = 'none';
    detailsPanel.classList.add('active');

    content.innerHTML = `
        <img src="${yer.resim}" alt="${yer.ad}">
        <h3>${yer.ad}</h3>
        <p>${yer.aciklama}</p>
        <a href="${yer.link}" target="_blank" class="btn">Detaylı Bilgi (Yan Sekme)</a>
    `;

    map.flyTo(yer.koordinat, 18);
}

function listeyeDon() {
    document.getElementById('list-view').style.display = 'block';
    document.getElementById('details-view').classList.remove('active');
}

window.onload = function() {
    const listDiv = document.getElementById('location-list');

    if (listDiv) {
        yerler.forEach(yer => {
            const marker = L.marker(yer.koordinat).addTo(map);
            marker.on('click', () => detayGoster(yer.id));

            const div = document.createElement('div');
            div.className = 'location-item';
            div.innerHTML = `<h3>${yer.ad}</h3><p>Görmek için tıklayın...</p>`;
            div.onclick = () => detayGoster(yer.id);

            listDiv.appendChild(div);
        });
    }
};