import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/navbar"
import Test from "./Test"
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return <div>
         <section id="Homepage">
          <Navbar/>
         <Hero/></section>

         <section id="services"><Parallax type="services"/></section>
         <section>services</section>
         <section id="portfolio"><Parallax type="portfolio"/></section>
         <section>portfolio2</section>
         <section id="contacts">Contact</section>
    </div> 
};

export default App;
