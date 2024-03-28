import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/navbar"
import Test from "./Test"


const App = () => {
  return <div>
         <section id="Homepage"><Navbar/>
         <Hero/></section>

         <section id="services">parallax</section>
         <section>portfolio</section>
         <section>portfolio1</section>
         <section>portfolio2</section>
         <section id="contacts">Contact</section>
    </div> 
};

export default App;
