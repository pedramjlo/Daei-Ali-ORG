import React from 'react';
import '../buttons.css';


export default function MenuButton({ onClick }) {
    const iconStyle = {
      color: "#ffffff", 
      fontSize: "1.2em",
    };
  
    return (
      <button className="main-menu-button" onClick={onClick}>
        <span style={{ fontWeight: "800", color: "#ffffff" }}>
          برو به منو
        </span>
        <svg
          width="24px"
          height="24px"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#ffffff"
        >
          <path
            d="M14 9.01L14.01 8.99889"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M8 8.01L8.01 7.99889"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M8 14.01L8.01 13.9989"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M6 19L2.23626 3.0041C2.13087 2.55618 2.54815 2.16122 2.98961 2.29106L19 7"
            stroke="#ffffff"
            strokeWidth="1.5"
          ></path>
          <path
            d="M22.198 8.42467C22.4324 7.48703 21.8623 6.5369 20.9247 6.30249C19.987 6.06808 19.0369 6.63816 18.8025 7.5758C18.4106 9.14318 16.9015 11.6241 14.5753 13.9503C12.2743 16.2513 9.42714 18.1442 6.60672 18.7951C5.66497 19.0124 5.07771 19.952 5.29504 20.8937C5.51236 21.8355 6.45198 22.4227 7.39373 22.2054C11.0734 21.3563 14.4762 18.9991 17.0502 16.4252C19.5989 13.8764 21.5898 10.8573 22.198 8.42467Z"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
        </svg>
      </button>
    );
  }
  




  export default function InstaButton() {
    const MessageButtonStyle = {
      color: "black",
    };
  
    const handleRedirect = () => {
      window.location.href = 'https://www.instagram.com/daei.ali_fastfood/';
    };
  
    return (
      <button className="menu-button" style={MessageButtonStyle} onClick={handleRedirect}>
        <span>
          اینستاگرام ما 
        </span>
        <svg
          width="24px"
          height="24px"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
        >
          <path
            d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
            stroke="#000000"
            strokeWidth="1.5"
          ></path>
          <path
            d="M17.5 6.51L17.51 6.49889"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    );
  }

  
  const ContactButton = ({ onClick }) => {
    
    const iconStyle = {
        color: "black", 
        fontSize: "1em",
    };

    return (
        <button className="menu-button" onClick={onClick}> 
            <span>ارتباط با دایی علی</span>
            <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M1 20V19C1 15.134 4.13401 12 8 12V12C11.866 12 15 15.134 15 19V20" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path><path d="M13 14V14C13 11.2386 15.2386 9 18 9V9C20.7614 9 23 11.2386 23 14V14.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path><path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </button>
    );
};

export default ContactButton;
