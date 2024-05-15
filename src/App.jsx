import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import { BrowserRouter } from "react-router-dom";
import { useRef } from "react";

const App = () => {
    const section1 = useRef();
    const section2= useRef();
    const section3=useRef();

    return (
        <BrowserRouter>
            <div>
                <Cursor />
                <section id="Homepage">
                    <Navbar section1={section1} section2={section2} section3={section3} />
                    <Hero section1={section1} section2={section2}  section3={section3}/>
                </section>
                <section ref={section3}><Parallax type="services" /></section>
                <Cursor />
                <section id="Skills"><Services /></section>
                <Cursor />
                <section ref={section2} id="Projects"><Parallax   type="Projects" /></section>
                <Cursor />
              
                <Portfolio/>
                <Cursor />
                <section ref={section1} id="Contacts"><Contact /></section>
                <Cursor />
            </div>
        </BrowserRouter>
    );
};

export default App;
