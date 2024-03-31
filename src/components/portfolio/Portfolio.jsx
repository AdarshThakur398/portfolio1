import {useRef} from 'react';
import "./portfolio.scss";
import {motion,useScroll,useSpring,useTransform,} from "framer-motion"

const items = [
  {
    id: 1,
    title: "react commerce",
    image: "twitter.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum cumque qui expedita laborum veritatis vero necessitatibus aspernatur! Atque voluptas possimus officiis cum inventore. Possimus deserunt doloribus asperiores minus porro."
  },
  {
    id: 2,
    title: "react commerce",
    image: "twitter.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum cumque qui expedita laborum veritatis vero necessitatibus aspernatur! Atque voluptas possimus officiis cum inventore. Possimus deserunt doloribus asperiores minus porro."
  },
  {
    id: 3,
    title: "react commerce",
    image: "twitter.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum cumque qui expedita laborum veritatis vero necessitatibus aspernatur! Atque voluptas possimus officiis cum inventore. Possimus deserunt doloribus asperiores minus porro."
  },
  {
    id: 4,
    title: "react commerce",
    image: "twitter.png",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum cumque qui expedita laborum veritatis vero necessitatibus aspernatur! Atque voluptas possimus officiis cum inventore. Possimus deserunt doloribus asperiores minus porro."
  }
];



const Single = ({ item }) => {
    const ref=useRef(); 
    const {scrollYProgress}= useScroll( {
        target:ref
        
       
    
    })
    const y = useTransform(scrollYProgress, [0,1], [-300,300])
  return (

    <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer"  ref={ref}>
     <img src= {item.image}></img></div>
      <motion.div className="textContainer" style={{y}}>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <button>See Demo</button>
      </motion.div></div></div>
    </section>
  );
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
            <h1>Featured Work</h1>
            <motion.div  style={{scaleX}} className="progressBar"></motion.div>
        </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
