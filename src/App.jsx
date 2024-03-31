import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/navbar"
import Test from "./Test"
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  return <div>
         <Cursor/>
         <section id="Homepage">
          <Navbar/>
         <Hero/></section>
         <Cursor/>
         <section id="services"><Parallax type="services"/></section>
         <Cursor/>
         <section id="services"><Services/></section>
         <Cursor/>
         <section id="portfolio"> <Parallax type="portfolio"/> </section>
         <Cursor/>
         <Portfolio/>
        <Cursor/>
         <section id="contacts"><Contact/></section>
         <Cursor/>
    </div> 
};

export default App;
