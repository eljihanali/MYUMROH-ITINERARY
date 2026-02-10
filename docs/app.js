function navigate(page) {
  window.location.hash = page;
  renderPage();
}

function renderPage() {
  const page = window.location.hash.replace("#", "") || "dashboard";

  if (page === "dashboard") {
    document.getElementById("app").innerHTML = Dashboard();
  } 
  else if (page === "itinerary") {
    document.getElementById("app").innerHTML = ItineraryList();
  }
  else if (page === "documents") {
    document.getElementById("app").innerHTML = Documents();
  }
  else if (page === "map") {
    document.getElementById("app").innerHTML = MapPage();
  }
}

function Dashboard() {
  return `
    <section class="hero">
      <h1 class="hero-title">Itinerary Umroh</h1>
      <p class="hero-subtitle">Panduan lengkap perjalanan Anda hari ini</p>
    </section>

    <section class="section">
      <h2 class="section-title">Itinerary Hari Ini</h2>

      <div class="card itinerary-card">
        <div class="item">
          <span class="time">06:00</span>
          <span class="activity">Sarapan & Briefing</span>
        </div>

        <div class="item">
          <span class="time">08:00</span>
          <span class="activity">Berangkat ke Masjidil Haram</span>
        </div>

        <div class="item">
          <span class="time">09:00</span>
          <span class="activity">Tawaf</span>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">Menu Cepat</h2>
      <div class="menu-grid">
  <div class="menu-item" onclick="navigate('itinerary')">
    <span class="icon">📅</span>
    Itinerary
  </div>

  <div class="menu-item" onclick="navigate('documents')">
    <span class="icon">📄</span>
    Dokumen
  </div>

  <div class="menu-item" onclick="navigate('map')">
    <span class="icon">📍</span>
    Map
  </div>
</div>
    </section>
  `;
}

function ItineraryList() {
  return `
    <h2>Itinerary Harian</h2>
    <div class="card">
      <strong>06:00</strong> — Sarapan & Briefing
    </div>
    <div class="card">
      <strong>08:00</strong> — Berangkat ke Masjidil Haram
    </div>
    <div class="card">
      <strong>09:00</strong> — Tawaf
    </div>
  `;
}

function Documents() {
  return `
    <h2>Dokumen</h2>
    <div class="card">Paspor</div>
    <div class="card">Visa</div>
    <div class="card">Tiket Pesawat</div>
  `;
}

function MapPage() {
  return `
    <h2>Lokasi Penting</h2>
    <div class="card">
      <a href="https://maps.google.com?q=Masjidil+Haram" target="_blank">
        📍 Masjidil Haram
      </a>
    </div>
  `;
}

window.addEventListener("hashchange", renderPage);
window.addEventListener("load", renderPage);



