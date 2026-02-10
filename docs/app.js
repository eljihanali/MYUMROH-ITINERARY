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




