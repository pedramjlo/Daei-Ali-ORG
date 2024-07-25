import React from 'react';
import '../buttons.css';

export default function MessageButton() {
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
