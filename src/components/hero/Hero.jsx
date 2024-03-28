import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrappere">
        <div className="textContainer">
            <h2>ADARSH THAKUR</h2>
            <h1>WEB DEVELOPER</h1>
            <div className="button">
                <button>See the latest work!</button>
                <button>Contact me</button>
            </div>
            <img src="scroll.png"></img>
        </div>
        <div className="imageContainer">
            <img src="hero.png"></img>
        </div>
      </div>
    </div>
  )
}

export default Hero
