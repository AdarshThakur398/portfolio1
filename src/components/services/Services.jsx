import "./services.scss"
import {motion} from "framer-motion"

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
      duration:1,
      staggerChildren:0.1
     }
  }
}
const Services = () => {



  return (
    <motion.div className="services" variants={variants} intial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants} intial="initial" whileInView="animate">
          <motion.p>  I focus on helping your brand grow <br/>
            and move forward</motion.p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants} intial="initial" whileInView="animate">
            <motion.div className="title">
                <img src="/pexels-negative-space-34600.jpg"></img>
                <button>What I know?

                </button>
            </motion.div>

        </motion.div>
      <motion.div className= "listContainer" variants={variants} intial="initial" whileInView="animate">
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}  variants={variants} intial="initial" whileInView="animate">
            <h2>HTML and CSS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente neque, voluptate voluptas commodi quae totam tenetur incidunt aliquid blanditiis excepturi ipsa nesciunt tempore reiciendis minus dolor inventore veniam repellendus?</p>
        </motion.div> 
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}} variants={variants} intial="initial" whileInView="animate">
            <h2>JAVASCRIPT</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente neque, voluptate voluptas commodi quae totam tenetur incidunt aliquid blanditiis excepturi ipsa nesciunt tempore reiciendis minus dolor inventore veniam repellendus?</p>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}} variants={variants} intial="initial" whileInView="animate">
            <h2>REACT</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente neque, voluptate voluptas commodi quae totam tenetur incidunt aliquid blanditiis excepturi ipsa nesciunt tempore reiciendis minus dolor inventore veniam repellendus?</p>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}} variants={variants} intial="initial" whileInView="animate">
            <h2>NODE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente neque, voluptate voluptas commodi quae totam tenetur incidunt aliquid blanditiis excepturi ipsa nesciunt tempore reiciendis minus dolor inventore veniam repellendus?</p>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}} variants={variants} intial="initial" whileInView="animate">
            <h2></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente neque, voluptate voluptas commodi quae totam tenetur incidunt aliquid blanditiis excepturi ipsa nesciunt tempore reiciendis minus dolor inventore veniam repellendus?</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
 