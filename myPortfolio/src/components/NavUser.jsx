import { FaUserCircle } from "react-icons/fa";

export default function NavUser() {
    return (
            <div className="nav">
                <span id="user">
                    <FaUserCircle style={{marginRight : 8, height : 32, width : 32}}/>
                    SOUFIANE BAGHDADI
                </span>
            </div>
    );
}