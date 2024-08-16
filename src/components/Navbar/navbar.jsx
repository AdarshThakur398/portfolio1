import "./navbar.scss"
import Sidebar from "../Sidebar/Sidebar"
const Navbar = () => {
  return (
    <div className="Navbar"> 
   
      <div className="wrapper">
       
        <Sidebar/>
        <div className="social">
            <a href="https://www.linkedin.com/in/adarsh-thakur-33457626a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><img src="/linkedin.png" alt=""/></a>
            <a href="https://www.instagram.com/adarsh.99i/"><img src="/instagram.png" alt=""/></a>
            <a href="https://github.com/AdarshThakur398/"><img src="/OIP (3).jpeg" alt=""/></a>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar;
