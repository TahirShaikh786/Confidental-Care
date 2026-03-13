import "../styles/sections.css";

const TESTIMONIALS = [
  {
    text: "Dr. Memon is absolutely amazing! She made me feel completely comfortable throughout the entire treatment. The results exceeded every expectation I had.",
    name: "Nayab Wasim",
    role: "Patient",
    avatar: "#7aab8e",
    initial: "N",
  },
  {
    text: "The clinic is beautiful and spotlessly clean. The staff is incredibly friendly and professional. I have never felt more at ease at a dental appointment.",
    name: "Priya Sharma",
    role: "Patient",
    avatar: "#e07b5a",
    initial: "P",
  },
  {
    text: "I was genuinely terrified of dentists until I found this clinic. The experience was so calm and positive that I actually look forward to my visits now!",
    name: "Mohammed Ali",
    role: "Patient",
    avatar: "#5a7ae0",
    initial: "M",
  },
  {
    text: "Outstanding dental care! Dr. Memon took so much time to explain every step of my implant procedure. Truly exceptional and compassionate professional service.",
    name: "Sneha Patel",
    role: "Patient",
    avatar: "#aa7aab",
    initial: "S",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-header">
        <span className="section-tag">What Patients Say</span>
        <h2 className="section-title">Patient Testimonials</h2>
        <p className="section-sub">
          Real stories from real patients — the trust of our community means everything to us.
        </p>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t) => (
          <div className="testimonial-card" key={t.name}>
            <div className="testimonial-quote">"</div>
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div
                className="author-avatar"
                style={{ background: t.avatar }}
              >
                {t.initial}
              </div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">Verified {t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
