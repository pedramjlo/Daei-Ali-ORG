import React, { forwardRef } from 'react';
import '../footer.css';

import { IoLogoInstagram } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";

const Footer = forwardRef((props, ref) => {
    const iconStyle = {
        fontSize: "2em",
    };

    return (
        <footer ref={ref}>
            <span>کرمان، شهرک باهنر، بهارستان کوچه 8 روبروی پارک نظام مهندسی</span>
            
            <div className='icons-container'>
                <a href="tel:+989135794244"><IoCallOutline style={{ fontSize: "2.2em", height: "0.9em", fontWeight: "800" }} /></a>
                <a href="https://www.instagram.com/daei.ali_fastfood/"><IoLogoInstagram style={iconStyle} /></a>
                <a href="/"><LuMapPin style={iconStyle} /></a>
            </div>
        </footer>
    );
});

export default Footer;
