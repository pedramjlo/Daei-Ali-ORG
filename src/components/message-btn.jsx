import { FaRegMessage } from "react-icons/fa6";
import '../buttons.css';





export default function MessageButton(){
    
    const MessageButtonStyle = {
        color: "black",
        borderRadius: "20px",
        width: "10rem",
        height: "2rem",
    }

    const iconStyle = {
        color: "black", 
        fontSize: "1em",
    };

    return (
        <button className="menu-button" style={MessageButtonStyle}> 

        <span>
        ثبت پیام
        </span>

        <FaRegMessage style={iconStyle}  />

        
        </button>
    );
}


