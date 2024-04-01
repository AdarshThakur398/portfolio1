import "./services.scss"
import {motion, useInView} from "framer-motion"
import {useRef} from "react"

const variants= {
  initial : {
    x:-500,
    y:100,
    opacity:0
  },
  animate : {
     x:0,
     y:0,
     opacity:1,
     transition: {
      duration:0.8,
      staggerChildren:0.1
     }
  }
}
const Services = () => {

const ref=useRef()
const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
        <motion.div className="textContainer" variants={variants} >
          <motion.p>  I focus on helping your work grow <br/>
            and move forward</motion.p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants} >
            <motion.div className="title">
                <img src="/pexels-negative-space-34600.jpg"></img>
                <button>What I know?

                </button>
            </motion.div>

        </motion.div>
      <motion.div className= "listContainer" variants={variants} >
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}  >
          <img src="image copy 2.png "/>
          <img src="image copy 3.png "/>
          <img src="image copy 4.png"/>
        </motion.div> 
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
           <img src="image.png"/>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
         <img src="image copy 5.png"/><img src="885px-Node.js_logo.svg.png"/>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <img src="image copy 6.png"/>
            <img src="logo_4x.png"/>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
 