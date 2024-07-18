import { MdOutlineFastfood } from "react-icons/md";
import '../buttons.css';





export default function MenuButton(){
    

    const iconStyle = {
        color: "black", 
        fontSize: "1.2em",
        
    };

    return (
        <button className="menu-button"> 

        <span>
        برو به منو
        </span>

        <MdOutlineFastfood style={iconStyle}  />

        
        </button>
    );
}


