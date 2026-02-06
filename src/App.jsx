import "./app.scss";
import { Banner } from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";


const App = () => {
  return (
    <div style={{background:"#0C0C1D"}} >
      <Cursor />
      <section id="Homepage">
        <Navbar/>
        <Banner/>
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section className="service">
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    <section className="footer">
    <Footer/>
    </section>
    </div>
  );
};

export default App;
