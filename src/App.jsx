import ToasterProvider from "./Provider/ToastProvider";
import Test from "./Test";
import "./app.scss";
import Skills from "./components/Skills/Skills";

import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Oceanparallex from "./components/ocean-paralllex/Oceanparallex";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Skyparallex from "./components/sky-paralllex/Skyparallex";

const App = () => {
  return (
    <div>
      <ToasterProvider />
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Skyparallex type="skills" />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <Portfolio type="Featured Works" />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
