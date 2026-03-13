import "../styles/sections.css";
import toothExtraction from "/extraction.jpeg"
import implant from "/implants.jpeg"
import filling from "/filling.jpeg"

const SERVICES = [
  {
    icon: "🦷",
    image: toothExtraction,
    title: "Surgical Tooth Extractions",
    desc: "Expert tooth extraction with precision care and minimal discomfort for a fast, smooth recovery.",
    imgBg: "linear-gradient(135deg,#f0ddd0,#ddc8b4)",
    iconBg: "#fde8d8",
  },
  {
    icon: "✨",
    image: implant,
    title: "Artificial Teeth & Implants",
    desc: "High-quality dental implants for a natural look and lasting feel — your confidence, restored.",
    imgBg: "linear-gradient(135deg,#c8e0d4,#b0ccbc)",
    iconBg: "#e8f5f0",
  },
  {
    icon: "💎",
    image: filling,
    title: "Dental Fillings",
    desc: "Composite and ceramic fillings blended seamlessly with your natural tooth structure and colour.",
    imgBg: "linear-gradient(135deg,#d8d0e8,#c4bcd4)",
    iconBg: "#f0e8f8",
  },
  {
    icon: "🌟",
    image: toothExtraction,    
    title: "Comprehensive Tooth Care",
    desc: "Full dental checkups, cleanings, and preventive care tailored uniquely to your oral health needs.",
    imgBg: "linear-gradient(135deg,#f0e4c8,#dcd0b4)",
    iconBg: "#fef8e0",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <div>
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-sub">
            Comprehensive dental care tailored for every member of your family.
          </p>
        </div>
        <button className="btn-outline">View All Services →</button>
      </div>

      <div className="services-grid">
        {SERVICES.map((s) => (
          <div className=" service-card" key={s.title}>
            <div className="service-img">
              <img src={s.image} alt={s.icon} />
            </div>
            <div className="service-body">
              <div className="service-icon" style={{ background: s.iconBg }}>
                {s.icon}
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-link">Learn more →</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
