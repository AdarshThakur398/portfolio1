import "./hero.scss"
import {motion} from "framer-motion"

const sliderVariants = {
    initial: {
        x:0,
    },
    animate: {
        x:"-220%",
        transition: {
            repeat:Infinity,
            repeatType:"mirror",
            duration:20
        }
    }
}
const textVariants = {
    initial : {
        x:-500,
        opacity:1

    },
    animate : {
        x:0,
        opacity:1,
        transition:{
             duration:1,
             staggerChildren:0.1
        }
    },
    scrollButton : {
        opacity:0,
        y:-10,
      
       transition: {
           duration:2,
           repeat:Infinity
       }
   }
   
}

const Hero = () => {
  return (
    <div className="hero" >
        <div className="Wrapper">
        <motion.div className="textContainer" variants={ textVariants } initial="initial" animate="animate">
            <motion.h2 variants={ textVariants }>ADARSH THAKUR</motion.h2>
            <motion.h1 variants={ textVariants }>WEB DEVELOPER</motion.h1>
            <motion.div  variants={ textVariants } className="buttons">
                <motion.button variants={ textVariants } >See the latest work!</motion.button>
                <motion.button variants={ textVariants }>Contact me</motion.button>
            </motion.div>
            <motion.img variants={ textVariants }  animate="scrollButton" src="/scroll.png"></motion.img>
        </motion.div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            MERN STACK 
        </motion.div>
        <div className="imageContainer">
            <img src="/hero.png"></img>
        </div>
      </div>
    </div>
  )
}

export default Hero
