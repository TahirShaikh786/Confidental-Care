import { useState } from "react";
import "../styles/sections.css";

const TIME_SLOTS = [
  { time: "9:00 AM",  available: true },
  { time: "10:00 AM", available: true },
  { time: "11:00 AM", available: true },
  { time: "2:00 PM",  available: true },
  { time: "3:00 PM",  available: true },
  { time: "4:00 PM",  available: true },
  { time: "Sunday",   available: false, label: "Closed" },
];

const SERVICES = [
  "Dental Consultation",
  "Tooth Extraction",
  "Dental Implants",
  "Dental Fillings",
  "Root Canal Treatment",
  "Teeth Whitening",
  "Comprehensive Checkup",
];

export default function Appointment() {
  const [activeSlot, setActiveSlot] = useState("10:00 AM");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    date: "", service: "", message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", email: "", date: "", service: "", message: "" });
  };

  return (
    <section className="appointment-section" id="appointment">
      <div className="appointment-wrap">

        {/* ── Form Card ── */}
        <div className="appointment-form-card">
          <h3>Book Your Appointment</h3>

          {submitted && (
            <div style={{
              background: "#e8f5f0", border: "1px solid var(--sage)",
              borderRadius: 10, padding: "14px 18px", marginBottom: 24,
              fontSize: 14, color: "var(--sage-dark)", fontWeight: 500,
            }}>
              ✅ Appointment request sent! We will confirm shortly.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  name="name" placeholder="Your full name"
                  value={form.name} onChange={handleChange} required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  name="phone" placeholder="+92 300 0000000"
                  value={form.phone} onChange={handleChange} required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  name="email" type="email" placeholder="you@email.com"
                  value={form.email} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Preferred Date</label>
                <input
                  name="date" type="date"
                  value={form.date} onChange={handleChange} required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group form-full">
                <label>Service Required</label>
                <select name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Select a service…</option>
                  {SERVICES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group form-full">
                <label>Additional Notes</label>
                <textarea
                  name="message"
                  placeholder="Any specific concerns or questions for Dr. Memon…"
                  value={form.message} onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="form-submit">
              Confirm My Appointment →
            </button>
          </form>
        </div>

        {/* ── Info Panel ── */}
        <div className="appointment-info-panel">
          <span className="section-tag">Schedule a Visit</span>
          <h2 className="section-title">We're Here<br />For You</h2>
          <p>
            Choose a time that works best for you and take the first step toward
            a healthier, more confident smile with Dr. Shabana Rafiq Memon.
          </p>

          <div className="time-slots-label">Available Time Slots</div>
          <div className="slots">
            {TIME_SLOTS.map(({ time, available, label }) =>
              available ? (
                <button
                  key={time}
                  className={`slot${activeSlot === time ? " active" : ""}`}
                  onClick={() => setActiveSlot(time)}
                >
                  {time}
                </button>
              ) : (
                <span key={time} className="slot closed">{label || time}</span>
              )
            )}
          </div>

          <div className="consult-fee-card">
            <div className="fee-info">
              <span>Consultation Fee</span>
              <strong>₨ 1,200</strong>
            </div>
            <button
              className="btn-primary"
              onClick={() =>
                document.querySelector(".appointment-form-card").scrollIntoView({ behavior: "smooth" })
              }
            >
              Book Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
