
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import HeroPage from "./HeroPage";


export default function NavTools() 
{
    return <ul className="nav justify-content-end">
                <li className="nav-item" >
                    <a href="index.html">
                        <FaHome className="icon" onClick={HeroPage(0)} style={{marginRight : 8, width : 20, height : 20}}/>
                        HOME
                    </a>
                </li>
                <li className="nav-item">
                    <a href="AboutMe.html">
                        <FaInfoCircle className="icon" onClick={HeroPage(1)} style={{marginRight : 8, width : 20, height : 20}}/>
                        ABOUT ME
                    </a>
                </li>
                <li className="nav-item">
                    <a>
                        <FaTools className="icon" style={{marginRight : 8, width : 20, height : 20}}/>
                        SKILLS
                    </a>
                </li>
                <li className="nav-item">
                    <a>
                        <FaLink className="icon" style={{marginRight : 8, width : 20, height : 20}}/>
                        LINKS
                    </a>
                </li>
          </ul>;
}
