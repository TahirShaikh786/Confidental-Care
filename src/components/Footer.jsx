import "../styles/sections.css";

const FOOTER_COLS = [
  {
    title: "Services",
    items: [
      "Dental Implants",
      "Teeth Whitening",
      "Root Canal",
      "Cosmetic Dentistry",
      "Tooth Extraction",
      "General Checkup",
    ],
  },
  {
    title: "Quick Links",
    items: [
      "About Dr. Memon",
      "Our Clinic",
      "Testimonials",
      "Book Appointment",
      "Contact Us",
      "Privacy Policy",
    ],
  },
  {
    title: "Contact",
    items: [
      "📍 Confidental Care, 10, Sai Dwar Building, Shirdi Nagar, Navghar Phatak Road, Bhayandar East, Thane.",
      "📞 +92 300 1234567",
      "✉️ info@confidentalcare.pk",
      "🕐 Mon–Sat: 9am – 6pm",
      "🔴 Sunday: Closed",
    ],
  },
];

const SOCIALS = ["📘", "📸", "🐦", "▶️"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Brand col */}
        <div>
          <span className="footer-logo">
            Confi<span>dental</span> Care
          </span>
          <p className="footer-desc">
            Your smile is our priority. World-class dental care delivered with
            compassion, precision, and a genuine personal touch for every patient.
          </p>
          <div className="social-links">
            {SOCIALS.map((icon, i) => (
              <button key={i} className="social-btn">{icon}</button>
            ))}
          </div>
        </div>

        {/* Link cols */}
        {FOOTER_COLS.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2025 Confidental Care. All rights reserved.</p>
        <div className="footer-bottom-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}
