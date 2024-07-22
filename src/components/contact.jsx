import { RiContactsLine } from "react-icons/ri";


import '../buttons.css';





export default function ContactButton(){
    


    const iconStyle = {
        color: "black", 
        fontSize: "1em",
    };

    return (
        <button className="menu-button"> 

        <span>
        ارتباط با دایی علی
        </span>

        <RiContactsLine style = {iconStyle} />
        
        </button>
    );
}


