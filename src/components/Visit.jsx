import "../styles/sections.css";

const CONTACT_INFO = [
  {
    icon: "📍",
    title: "Address",
    text: "Confidental Care, 10, Sai Dwar Building, Shirdi Nagar, Navghar Phatak Road, Bhayandar East, Thane.",
  },
  {
    icon: "📞",
    title: "Phone",
    text: "+92 300 1234567\n+92 21 1234567",
  },
  {
    icon: "✉️",
    title: "Email",
    text: "info@confidentalcare.pk\nappointments@confidentalcare.pk",
  },
  {
    icon: "🕐",
    title: "Clinic Hours",
    text: "Monday – Saturday: 9:00 AM – 6:00 PM\nSunday: Closed",
  },
];

export default function Visit() {
  return (
    <section className="visit-section" id="contact">
      <div className="visit-wrap">

        {/* Left — Info */}
        <div>
          <span className="section-tag">Find Us</span>
          <h2 className="section-title">Visit Our Clinic</h2>
          <p className="section-sub">
            Conveniently located in the heart of Karachi — accessible, welcoming,
            and ready to serve you.
          </p>

          <div className="visit-info-list">
            {CONTACT_INFO.map(({ icon, title, text }) => (
              <div className="visit-item" key={title}>
                <div className="visit-icon">{icon}</div>
                <div>
                  <h4>{title}</h4>
                  <p>{text.split("\n").map((line, i) => (
                    <span key={i}>{line}{i < text.split("\n").length - 1 && <br />}</span>
                  ))}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="visit-cta">
            <button className="btn-primary">
              Get Directions →
            </button>
          </div>
        </div>

        {/* Right — Map placeholder */}
        <div className="map-box">
          🗺️
          <div className="map-label">
            📍 Confidental Care — Karachi
          </div>
        </div>

      </div>
    </section>
  );
}
