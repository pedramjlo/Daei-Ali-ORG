import { MdOutlineFastfood } from "react-icons/md";
import '../buttons.css';





export default function MenuButton(){
    

    const iconStyle = {
        color: "black", 
        fontSize: "1em",
    };

    return (
        <button className="menu-button"> 

        <div>
        <MdOutlineFastfood style={iconStyle}  />
        </div>

        <div>
        برو به منو
        </div>

        
        </button>
    );
}


