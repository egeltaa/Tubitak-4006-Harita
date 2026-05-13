const map = L.map('map').setView([41.0185, 29.0255], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
map.invalidateSize();

const yerler = [
    {
        id: 1,
        ad: "Şair Nedim Caddesi",
        koordinat: [41.044008, 29.001633],
        resim: "Foto\\Sair Nedim.jpeg",
        link: "https://maps.app.goo.gl/R7eLG8ddvSAiadjw9",
        aciklama: "İstanbul'un tarihli sokaklarından biri."
    },
    {
        id: 2,
        ad: "Cemal Süreya Sokak",
        koordinat: [40.988698, 29.022150],
        resim: "Foto\\Cemal Süreya.jpeg",
        link: "https://maps.app.goo.gl/29rp5uA48WMgJuAB9", 
        aciklama: "Edebiyat tarihinin önemli bir mekânı."
    },
    {
        id: 3,
        ad: "Can Yücel Sokak",
        koordinat: [41.030207, 29.037386],
        resim: "Foto\\Can Yücel Sokak.jpeg",
        link: "https://maps.app.goo.gl/zrXcUtAaceLnVHeP8",
        aciklama: "İstanbul'un sanat ve kültür merkezi."
    },
    {
        id: 4,
        ad: "Fazıl Hüsnü Dağlarca Sokak",
        koordinat: [40.986343, 29.025519],
        resim: "Foto\\Dağlarca.jpeg",
        link: "https://maps.app.goo.gl/qcnJngEQ9aq44eT8A",
        aciklama: "Şair Dağlarca'nın yaşadığı sokak."
    },
    {
        id: 5,
        ad: "Melih Cevdet Anday Sokak",
        koordinat: [40.989181, 29.061434],
        resim: "Foto\\Melih Cevdet Anday.jpeg",
        link: "https://maps.app.goo.gl/PknRQqF2tdBMTFPR7",
        aciklama: "Meşhur şair Anday'ın izleri."
    },
    {
        id: 6,
        ad: "Mehmet Akif Ersoy Caddesi",
        koordinat: [41.036914, 29.065755],
        resim: "Foto\\Mehmet Akif.jpeg",
        link: "https://maps.app.goo.gl/RBnz5gqEDT9LmBsH8",
        aciklama: "Milli Şair Ersoy'un anısına adanmış cadde."
    },
    {
        id: 7,
        ad: "Necip Fazıl Kısakürek Sokak",
        koordinat: [41.037376, 29.089138],
        resim: "Foto\\NecipFazıl.jpeg",
        link: "https://maps.app.goo.gl/8v5p2qQ4v6dD6",
        aciklama: "Mübarek Sokak'ın yazarı Kısakürek'in adıyla anılıyor."
    },
    {
        id: 8,
        ad: "Oğuz Atay'ın Evi",
        koordinat: [41.031901, 28.980064],
        resim: "Foto\\OğuzAtay.jpg",
        link: "https://maps.app.goo.gl/doRUYd4m89Dm7NSP7",
        aciklama: "Ünlü eseri 'Tutunamayanlar'ın yazıldığı ev."
    },
    {
        id: 9,
        ad: "Sadri Alışık Sokak",
        koordinat: [41.034043, 28.981196],
        resim: "Foto\\SadriAlışık.png",
        link: "https://maps.app.goo.gl/a21fAWdLwMHMKVua6",
        aciklama: "Ünlü oyuncunun adıyla anılıyor."
    },
    {
        id: 10,
        ad: "Orhan Kemal Müzesi",
        koordinat: [41.03055, 28.98357],
        resim: "Foto\\OrhanKemal.png",
        link: "https://maps.app.goo.gl/QCBdr64bdsTNL8xn9",
        aciklama: "Ünlü yazarın yaşadığı ve müzeleştirilmiş evi."
    },
    {
        id: 11,
        ad: "Yahya Kemal Parkı",
        koordinat: [41.0505, 29.0068],
        resim: "Foto\\Park.jpeg",
        link: "https://maps.app.goo.gl/nkcfcjfzy2pmPSmE9",
        aciklama: "Şair Yahya Kemal'e adanmış park."
    },
    {
        id: 12,
        ad: "Şair Leyla Sokağı",
        koordinat: [41.043219, 29.004534],
        resim: "Foto\\Şair Leyla.jpeg",
        link: "https://maps.app.goo.gl/mJmGr8FGZ7PZgtH1A",
        aciklama: "İstanbul'un edebiyat tarihi içinde önemli bir mekân."
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
        <a href="${yer.link}" target="_blank" class="btn">Konumu Gör</a>
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