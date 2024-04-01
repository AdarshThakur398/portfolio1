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
         <Hero/></section> <Cursor/> 
      <section><Parallax type="services"/></section> 
      <Cursor/> 
      <section id="Skills"><Services/></section>
      <Cursor/> 
       <section id="Projects"> <Parallax type="Projects"/> </section>
       <Cursor/> 
    <Portfolio/> 
      <Cursor/>
         <section id="Contacts"><Contact/></section>
         <Cursor/>   
    </div> 
};

export default App;
