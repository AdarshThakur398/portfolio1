import {useRef,useState} from 'react';
import "./portfolio.scss";
import {motion,useScroll,useSpring,useTransform,} from "framer-motion"
import { Button } from "@/components/ui/button"


const items = [
  {
    id: 1,
    title: "INSTITUTE WEBSITE",
    image: "Screenshot 2024-04-01 135300.png",
    desc: "I have developed a website for NIT Hamirpur as per their instructions, which includes details about various activities in our department. The website showcases comprehensive information about academic programs, faculty, research projects, events, and facilities offered by the department, serving as a central platform for students, faculty, and visitors to access relevant information efficiently. LINK: https://www.eedconferencenith.in/",
    link:"https://www.eedconferencenith.in/"
  },
  
  {
    id: 2,
    title: "Doom",
    image: "Screenshot 2024-08-08 175935.png",
    desc:"Doom is a cutting-edge online meeting platform built with Next.js, Tailwind CSS, and TypeScript. Designed as an alternative to Zoom, it offers a seamless and intuitive user experience for virtual meetings. With a focus on speed, simplicity, and modern web standards, Doom ensures reliable and efficient communication for users worldwide. LINK: https://doom-six.vercel.app/",
    link:"https://doom-six.vercel.app/"

    
    
    
    
    
    
  },
  
  {


    id: 3,
    title: "YELPCAMP 2023",
    image: "Screenshot 2024-04-01 132238.png",
    desc: "YelpCamp is a web application showcasing tourist destinations, their locations, and prices, employing HTML, CSS, JavaScript,  for the frontend, and Node.js, Express.js, MongoDB for the backend, featuring user authentication, CRUD operations, and interactive location display.LINK: https://yelpcamp-1-oelg.onrender.com/",
    link:"https://yelpcamp-1-oelg.onrender.com/"
  },
  
  {
    id: 4,
    title: "PERSONAL PORTFOLIO",
    image: "Screenshot 2024-04-01 140555.png",
    desc: "I have crafted a visually dynamic portfolio using React and Framer Motion, leveraging the power of declarative components and smooth animations to showcase my skills, projects, and experiences in an engaging and interactive manner.LINK:https://github.com/AdarshThakur398/portfolio1",
    link:"https://github.com/AdarshThakur398/portfolio1"
  },
  {
    id: 5,
    title: "Instagram-clone",
    image: "114642041-cd935100-9cf0-11eb-9241-33bfc606a0b4.png",
    desc:"I've developed an Instagram clone using React and Material UI, replicating the familiar user interface and functionality of the popular social media platform. Users can browse through posts, like and comment on photos, and interact with a clean and intuitive design reminiscent of the original Instagram experience.LINK:https://github.com/AdarshThakur398/instagram-clone",
    link:"https://github.com/AdarshThakur398/instagram-clone"
    
    
    
    
    
    
  }
];

   


const Single = ({ item }) => {


    const ref=useRef(); 
    const {scrollYProgress}= useScroll( {
        target:ref
        
       
    
    })
    const y = useTransform(scrollYProgress, [0,1], [-300,300])
    const handleButton = (link) => {
                 window.location.href=link;
    }
  return (

    <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer"  ref={ref}>
     <img src= {item.image}></img></div>
      <motion.div className="textContainer" style={{y}}>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <Button className='impbutton' onClick={() => handleButton(item.link   )}>SHOW</Button>
      </motion.div></div></div>
    </section>
  )
};




const Portfolio = () => {
 
    const ref=useRef();
    const {scrollYProgress}= useScroll( {
        target:ref,
        offset:["end end ", "start start"]
    })

    const scaleX= useSpring(scrollYProgress, {
        stiffness:100,
        damping:30
    })
  return (
    <div className="portfolio">
        <div className="progress">
            <h1 className="mobo">Featured Work</h1>
            <motion.div  style={{scaleX}} className="progressBar"></motion.div>
        </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      
      ))}
    </div>
  );
};

export default Portfolio;
