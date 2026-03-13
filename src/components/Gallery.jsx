import "../styles/sections.css";

const GALLERY = [
  { imgSrc: "/extraction.jpeg", wide: true },
  { imgSrc: "/filling.jpeg", wide: false },
  { imgSrc: "/implants.jpeg", wide: false },
  { imgSrc: "/extraction.jpeg", wide: true },
  { imgSrc: "/implants.jpeg", wide: true },
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <span className="section-tag">Our Clinic</span>
      <h2 className="section-title">State-of-the-Art Facility</h2>
      <p className="section-sub">
        Modern equipment and a warm, welcoming environment designed to make
        every visit comfortable and reassurings.
      </p>

      <div className="gallery-grid">
        {GALLERY.map((item, i) => (
          <div key={i} className={`gallery-item${item.wide ? " wide" : ""}`}>
            <div className="gallery-item-inner">
              <img src={item.imgSrc} alt={`Gallery Image ${i + 1}`} />
            </div>
            <div className="gallery-overlay" />
          </div>
        ))}
      </div>
    </section>
  );
}
