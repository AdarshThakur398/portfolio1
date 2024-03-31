import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/navbar"
import Test from "./Test"
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
         <section id="Homepage">
          <Navbar/>
         <Hero/></section>

         <section id="services"><Parallax type="services"/></section>
         <section id="services"><Services/></section>
         <section id="portfolio"><Parallax type="portfolio"/></section>
         <Portfolio/>
         <section id="contacts"><Contact/></section>
    </div> 
};

export default App;
