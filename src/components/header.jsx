import React from 'react';

export default function Header(){
    return(
        <header>
            <a href="/" className='logo-header'><img src="./logo.svg" alt="daei-ali-logo" /></a>
            <a href="https://zoodex.ir/storeMenu/daeialipizza" className='zoodex'><img src="./zoodex.svg" alt="daei-ali-zoodex" /></a>
        </header>
    );
}