import "./navbar.scss"
import Sidebar from "../Sidebar/Sidebar"
const Navbar = () => {
  return (
    <div className="Navbar"> 
   
      <div className="wrapper">
        <span>Lama dev</span>
        <Sidebar/>
        <div className="social">
            <a href="#"><img src="/linkedin.png" alt=""/></a>
            <a href="#"><img src="/instagram.png" alt=""/></a>
            <a href="#"><img src="/twitter.png" alt=""/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
