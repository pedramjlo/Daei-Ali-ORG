import { MdHeight, MdOutlineFastfood } from "react-icons/md";
import '../buttons.css';
import { color } from "framer-motion";





export default function MenuButton(){

    const MenuButtonStyle = {
        color: "FF0000",
        borderRadius: "20px",
        width: "10rem",
        height: "2rem",
    }
    

    const iconStyle = {
        color: "#FF0000", 
        fontSize: "1.2em",
        
    };

    return (
        <button className="menu-button" style={MenuButtonStyle} > 

        <span style={{ color: "#FF0000" }} >
        برو به منو
        </span>

        <MdOutlineFastfood style={iconStyle}  />

        
        </button>
    );
}


