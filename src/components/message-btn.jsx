import React from 'react';
import { FaInstagram } from "react-icons/fa";
import '../buttons.css';

export default function MessageButton() {

    const MessageButtonStyle = {
        color: "black",
    }

    const iconStyle = {
        color: "black", 
        fontSize: "1.3em",
    };

    const handleRedirect = () => {
        window.location.href = 'https://www.instagram.com/daei.ali_fastfood/';
    }

    return (
        <button className="menu-button" style={MessageButtonStyle} onClick={handleRedirect}> 
            <span>
                اینستاگرام ما 
            </span>
            <FaInstagram style={iconStyle} className='other-icon-button' />
        </button>
    );
}
