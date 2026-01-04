
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import HeroPage from "./HeroPage";



export default function NavTools({setpage}) 
{
    return <ul className="nav justify-content-end">
                <li className="nav-item" >
                    <span  className="navlink" onClick={() => setpage("Home")}>
                        <FaHome className="icon" onClick={HeroPage(0)} style={{marginRight : 8, width : 20, height : 20}}/>
                        HOME
                    </span>
                </li>
                <li className="nav-item">
                    <span className="navlink" onClick={() => setpage("Aboutme")}>
                        <FaInfoCircle className="icon" onClick={HeroPage(1)} style={{marginRight : 8, width : 20, height : 20}}/>
                        ABOUT ME
                    </span>
                </li>
                <li className="nav-item">
                    <span  className="navlink" onClick={() => setpage("Skills")}>
                        <FaTools className="icon" style={{marginRight : 8, width : 20, height : 20}}/>
                        SKILLS
                    </span>
                </li>
                <li className="nav-item">
                    <span  className="navlink" onClick={() => setpage("Links")}>
                        <FaLink className="icon" style={{marginRight : 8, width : 20, height : 20}}/>
                        LINKS
                    </span>
                </li>
          </ul>;
}
