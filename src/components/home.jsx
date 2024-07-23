import React, { useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Header from './header';
import ContactButton from './contact';
import MenuButton from './menu-btn';
import MessageButton from './message-btn';
import MenuGroups from './menu-groups';

import Footer from './footer';

import '../home.css';

export default function Home() {
  const menuGroupsRef = useRef(null);
  const footerRef = useRef(null);
  const scrollOffset = -30; 

  const scrollToMenuGroups = () => {
    if (menuGroupsRef.current) {
      scroll.scrollTo(menuGroupsRef.current.offsetTop + scrollOffset, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  };

  const scrollToFooter = () => {
    if (footerRef.current) {
      console.log('Scrolling to footer:', footerRef.current.offsetTop);
      scroll.scrollTo(footerRef.current.offsetTop + scrollOffset, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  };

  return (
    <div>
      <Header />
      <div className='home-container'>
        <section className='section1'>
          <h1 className='welcome-text'>به دایی علی (شعبه جدید) خوش آمدید</h1>

          <div className='description'>
            <span id='text1'>منوی رستوران را آنلاین مشاهده کنید و انتقادات و پیشنهادات با ارزش خود را برای بهتر شدن ما با ما در میان بگذارید.</span>
            <span id='branch2'>شعبه سابق دایی علی (کتلت دایی علی) بحرالعلوم ۱۳*</span>
          </div>

          <div className='home-illust'>
            <img src="./icons/home-illust.svg" alt="phone illustration" />
          </div>

          <div className='buttons-container'> 
            <MenuButton onClick={scrollToMenuGroups} />
            <MessageButton />
            <ContactButton onClick={scrollToFooter} />
          </div>
        </section>

        <div className='menu-groups' ref={menuGroupsRef}>
          <MenuGroups loading="lazy" />
        </div>



        <Footer ref={footerRef} />
      </div>
    </div>
  );
}
