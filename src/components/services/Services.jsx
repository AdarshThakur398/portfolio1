import "./services.scss"
import {motion} from "framer-motion"
const Services = () => {
  return (
    <div className="services">
        <div className="textContainer">
          <p>  I focus on helping your brand grow <br/>
            and move forward</p>
            <hr/>
        </div>
        <div className="titleContainer">
            <div className="title">
                <img src="/pexels-negative-space-34600.jpg"></img>
                <button>What I know?

                </button>
            </div>

        </div>
      <div className= "listContainer">
        <div className="box">
            <h2>HTML and CSS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente neque, voluptate voluptas commodi quae totam tenetur incidunt aliquid blanditiis excepturi ipsa nesciunt tempore reiciendis minus dolor inventore veniam repellendus?</p>
        </div>
        <div className="box">
            <h2>JAVASCRIPT</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente neque, voluptate voluptas commodi quae totam tenetur incidunt aliquid blanditiis excepturi ipsa nesciunt tempore reiciendis minus dolor inventore veniam repellendus?</p>
        </div>
        <div className="box">
            <h2>REACT</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente neque, voluptate voluptas commodi quae totam tenetur incidunt aliquid blanditiis excepturi ipsa nesciunt tempore reiciendis minus dolor inventore veniam repellendus?</p>
        </div>
        <div className="box">
            <h2>NODE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente neque, voluptate voluptas commodi quae totam tenetur incidunt aliquid blanditiis excepturi ipsa nesciunt tempore reiciendis minus dolor inventore veniam repellendus?</p>
        </div>
        <div className="box">
            <h2></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente neque, voluptate voluptas commodi quae totam tenetur incidunt aliquid blanditiis excepturi ipsa nesciunt tempore reiciendis minus dolor inventore veniam repellendus?</p>
        </div>
      </div>
    </div>
  )
}

export default Services
