
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";


export default function NavTools() 
{
    return <ul className="nav justify-content-end">
                <li className="nav-item">
                    <FaHome className="icon" style={{marginRight : 8, width : 20, height : 20}}/>
                    HOME
                </li>
                <li className="nav-item">
                    <FaInfoCircle className="icon" style={{marginRight : 8, width : 20, height : 20}}/>
                    ABOUT ME
                </li>
                <li className="nav-item">
                    <FaTools className="icon" style={{marginRight : 8, width : 20, height : 20}}/>
                    SKILLS
                </li>
                <li className="nav-item">
                    <FaLink className="icon" style={{marginRight : 8, width : 20, height : 20}}/>
                    LINKS
                </li>
          </ul>;
}
