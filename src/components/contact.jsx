import { RiContactsLine } from "react-icons/ri";
import '../buttons.css';


const ContactButton = ({ onClick }) => {
    
    const iconStyle = {
        color: "black", 
        fontSize: "1em",
    };

    return (
        <button className="menu-button" onClick={onClick}> 
            <span>ارتباط با دایی علی</span>
            <RiContactsLine style={iconStyle} className='other-icon-button' />
        </button>
    );
};

export default ContactButton;
