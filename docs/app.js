let currentPage = "dashboard";

function navigate(page) {
  currentPage = page;
  render();
}

function render() {
  const app = document.getElementById("app");

  switch (currentPage) {
    case "dashboard":
      app.innerHTML = Dashboard();
      break;

    case "itinerary":
      app.innerHTML = ItineraryList();
      break;

    case "documents":
      app.innerHTML = DocumentsPage();
      break;

    case "map":
      app.innerHTML = MapPage();
      break;
  }
}

/* -----------------------------
   HALAMAN DASHBOARD
------------------------------ */
function Dashboard() {
  return `
    <section class="hero">
      <h1 class="hero-title">Itinerary Umroh</h1>
      <p class="hero-subtitle">Panduan lengkap perjalanan Anda hari ini</p>
    </section>

    <section class="section">
      <h2 class="section-title">Itinerary Hari Ini</h2>

      <div class="itinerary-card">
        <div class="item"><span class="time">06:00</span> <span class="activity">Sarapan & Briefing</span></div>
        <div class="item"><span class="time">08:00</span> <span class="activity">Berangkat ke Masjidil Haram</span></div>
        <div class="item"><span class="time">09:00</span> <span class="activity">Tawaf</span></div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">Menu Cepat</h2>
      <div class="menu-grid">
        <div class="menu-item" onclick="navigate('itinerary')"><span class="icon">📅</span>Itinerary</div>
        <div class="menu-item" onclick="navigate('documents')"><span class="icon">📄</span>Dokumen</div>
        <div class="menu-item" onclick="navigate('map')"><span class="icon">📍</span>Map</div>
      </div>
    </section>
  `;
}

/* -----------------------------
   HALAMAN ITINERARY
------------------------------ */
function ItineraryList() {
  return `
    <section class="hero small-hero">
      <h1 class="hero-title">Itinerary Umroh</h1>
      <p class="hero-subtitle">Jadwal lengkap perjalanan Anda</p>
    </section>

    <section class="section">
      <h2 class="section-title">Hari 1 — Kedatangan</h2>

      <div class="itinerary-card">
        <div class="item"><span class="time">06:00</span><span class="activity">Tiba di Jeddah, proses imigrasi</span></div>
        <div class="item"><span class="time">09:00</span><span class="activity">Perjalanan menuju Makkah</span></div>
        <div class="item"><span class="time">12:00</span><span class="activity">Check-in hotel & istirahat</span></div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">Hari 2 — Umroh</h2>

      <div class="itinerary-card">
        <div class="item"><span class="time">08:00</span><span class="activity">Ziarah sekitar Masjidil Haram</span></div>
        <div class="item"><span class="time">13:00</span><span class="activity">Pelaksanaan Umroh</span></div>
        <div class="item"><span class="time">19:00</span><span class="activity">Makan malam bersama</span></div>
      </div>
    </section>
  `;
}

/* -----------------------------
   HALAMAN DOKUMEN
------------------------------ */
function DocumentsPage() {
  return `
    <section class="hero small-hero">
      <h1 class="hero-title">Dokumen</h1>
      <p class="hero-subtitle">Kelengkapan perjalanan Anda</p>
    </section>

    <section class="section">
      <div class="card">📘 Paspor</div>
      <div class="card">🎫 Visa</div>
      <div class="card">🛫 Tiket Pesawat</div>
    </section>
  `;
}

/* -----------------------------
   HALAMAN MAP
------------------------------ */
function MapPage() {
  return `
    <section class="hero small-hero">
      <h1 class="hero-title">Lokasi</h1>
      <p class="hero-subtitle">Tempat penting selama perjalanan</p>
    </section>

    <section class="section">
      <div class="card">
        <a href="https://maps.google.com?q=Masjidil+Haram" target="_blank">
          📍 Masjidil Haram
        </a>
      </div>
    </section>
  `;
}

window.onload = render;
