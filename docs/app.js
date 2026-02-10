const app = document.getElementById("app");

function navigate(page) {
  window.location.hash = page;
  render();
}

function Dashboard() {
  return `
    <div class="card">
      <h2>Countdown</h2>
      <p>Menuju kegiatan berikutnya: <b>Tawaf</b></p>
      <p><span id="countdown">Loading...</span></p>
    </div>

    <div class="card">
      <h3>Menu Cepat</h3>
      <button onclick="navigate('itinerary')">Lihat Itinerary</button><br/>
      <button onclick="navigate('documents')">Dokumen</button><br/>
      <button onclick="navigate('map')">Lihat Map</button>
    </div>
  `;
}

function ItineraryList() {
  return `
    <h2>Itinerary Harian</h2>
    <div class="card">
      <b>06:00</b> — Sarapan & briefing  
    </div>
    <div class="card">
      <b>08:00</b> — Berangkat ke Masjidil Haram  
    </div>
    <div class="card">
      <b>09:00</b> — Tawaf  
      <button onclick="navigate('detail')">Detail</button>
    </div>
  `;
}

function ItineraryDetail() {
  return `
    <h2>Detail Kegiatan</h2>
    <div class="card">
      <p><b>Kegiatan:</b> Tawaf</p>
      <p><b>Lokasi:</b> Masjidil Haram</p>
      <p><b>Catatan:</b> Pastikan membawa sandal & tas kecil.</p>
      <button onclick="window.open('https://maps.google.com?q=Masjidil+Haram')">Buka di Maps</button>
    </div>
  `;
}

function Documents() {
  return `
    <h2>Dokumen</h2>
    <div class="card">Paspor (upload ditempat Anda)</div>
    <div class="card">Visa</div>
    <div class="card">Tiket</div>
  `;
}

function MapPage() {
  return `
    <h2>Map Lokasi</h2>
    <div class="card">
      <button onclick="window.open('https://maps.google.com?q=Masjidil+Haram')">
        Masjidil Haram
      </button>
    </div>

    <div class="card">
      <button onclick="window.open('https://maps.google.com?q=Masjid+Nabawi')">
        Masjid Nabawi
      </button>
    </div>
  `;
}

function render() {
  const page = window.location.hash.replace("#", "") || "dashboard";
  if (page === "dashboard") app.innerHTML = Dashboard();
  if (page === "itinerary") app.innerHTML = ItineraryList();
  if (page === "detail") app.innerHTML = ItineraryDetail();
  if (page === "documents") app.innerHTML = Documents();
  if (page === "map") app.innerHTML = MapPage();
}

window.addEventListener("hashchange", render);
render();

