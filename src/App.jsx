import "./styles/global.css";

import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import Stats       from "./components/Stats";
import About       from "./components/About";
import Services    from "./components/Services";
import Gallery     from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Appointment from "./components/Appointment";
import Visit       from "./components/Visit";
import Footer      from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Appointment />
      <Visit />
      <Footer />
    </>
  );
}
