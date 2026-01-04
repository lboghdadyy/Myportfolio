import NavTools from "./NavTools";
import NavUser from "./NavUser";

export default function NavBar({setpage}) 
{
    return (
            
        <nav class="navbar">
                <div class="container" id="container">
                        <NavUser />
                        <NavTools setpage={setpage}/>
                </div>
        </nav>
                
        );
}