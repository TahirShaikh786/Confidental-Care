import "../styles/sections.css";

const EXPERTISE = [
  "Surgical Tooth Extraction",
  "Artificial Teeth & Implants",
  "Dental Fillings & Restorations",
  "Tooth Decay Treatment",
  "Gum Swelling Management"
];

const CREDENTIALS = [
  "BDS - Priyadarshini Dental College Hospital (2012)",
  "Member - Indian Dental Association",
  "Registration: A-25080, Maharashtra State Dental Council (2014)",
  "Owner - Confi Dental Care (2013-Present)",
  "Former Director - Confidental Care (2013-2017)",
  "Former Consultant - Wockhardt Foundation (2013-2017)"
];

export default function About() {
  return (
    <section className="about-section" id="about">
      {/* Left — Doctor Image */}
      <div className="about-img-wrap">
        <div className="about-img">
          {/* <img src={drImg} alt="👩‍⚕️" /> */}
          </div>

        <div className="about-badge">
          <strong>BDS</strong>
          <span>Certified Dentist</span>
        </div>

        <div className="about-years-pill">✦ 13+ Years Experience</div>
      </div>

      {/* Right — Doctor Info */}
      <div>
        <span className="section-tag">Meet the Doctor</span>

        <div className="doctor-name">Dr. Shabana Rafiq Memon</div>
        <div className="doctor-title">BDS | Founder, Confidental Dental Clinic</div>

        <p className="doctor-bio">
          Dr. Shabana is a highly experienced and dedicated dental professional
          specializing in comprehensive oral health care. She completed her BDS from Priyadarshini Dental College Hospital in 2012 and has since been committed to providing exceptional dental services to the community.
        </p>

        <div className="expertise-label">Areas of Expertise</div>
        <div className="expertise-grid">
          {EXPERTISE.map((item) => (
            <div className="expertise-item" key={item}>
              <span className="expertise-check">✓</span>
              {item}
            </div>
          ))}
        </div>

        <div className="credentials-box">
          <h4>Professional Credentials</h4>
          <ul>
            {CREDENTIALS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
