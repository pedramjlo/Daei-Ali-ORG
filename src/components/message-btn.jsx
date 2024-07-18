import { FaRegMessage } from "react-icons/fa6";
import '../buttons.css';





export default function MessageButton(){
    

    const iconStyle = {
        color: "black", 
        fontSize: "1em",
    };

    return (
        <button className="menu-button"> 

        <div>
        <FaRegMessage style={iconStyle}  />
        </div>

        <div>
        ثبت پیام
        </div>

        
        </button>
    );
}


