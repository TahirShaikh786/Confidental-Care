import "../styles/Hero.css";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      {/* Left Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Trusted by 10,000+ patients across Mumbai
        </div>

        <h1 className="hero-title">
          Your <em>Smile,</em>
          <br />
          Our Priority
        </h1>

        <p className="hero-desc">
          Expert dental care with Dr. Shabana Rafiq Memon. Specializing in surgical extractions, implants, and comprehensive dental treatments in Bhayandar East, Mumbai.
        </p>

        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo("appointment")}>
            + Book Appointment
          </button>
          <button className="btn-outline" onClick={() => scrollTo("services")}>
            View Our Services
          </button>
        </div>
      </div>

      {/* Right Image Panel */}
      <div className="hero-image-panel">
        <div className="hero-img-box">
          <div className="hero-img-emoji">
            {/* <img src={heroImg} alt="🦷" /> */}🦷
            </div>

          <div className="hero-img-label">
            <span />
            Now Accepting Patients
          </div>

          <div className="hero-float-card">
            <div className="hero-float-icon">⭐</div>
            <div className="hero-float-text">
              <strong>4.9 / 5.0 Patient Rating</strong>
              <span>Based on 2,400+ verified reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
