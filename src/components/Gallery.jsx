import "../styles/sections.css";

const GALLERY = [
  { bg: "linear-gradient(135deg,#ddd0c0,#c8b8a8)", emoji: "🦷", wide: true },
  { bg: "linear-gradient(135deg,#c8e0d4,#b0ccc0)", emoji: "💉", wide: false },
  { bg: "linear-gradient(135deg,#e0d4c8,#ccc0b4)", emoji: "🔬", wide: false },
  { bg: "linear-gradient(135deg,#d4dce8,#c0c8d4)", emoji: "🏥", wide: false },
  { bg: "linear-gradient(135deg,#e8d4d0,#d4c0bc)", emoji: "😊", wide: true },
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <span className="section-tag">Our Clinic</span>
      <h2 className="section-title">State-of-the-Art Facility</h2>
      <p className="section-sub">
        Modern equipment and a warm, welcoming environment designed to make every
        visit comfortable and reassuring.
      </p>

      <div className="gallery-grid">
        {GALLERY.map((item, i) => (
          <div
            key={i}
            className={`gallery-item${item.wide ? " wide" : ""}`}
          >
            <div
              className="gallery-item-inner"
              style={{ background: item.bg }}
            >
              {item.emoji}
            </div>
            <div className="gallery-overlay" />
          </div>
        ))}
      </div>
    </section>
  );
}
