import React, { useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Header from './header';
import MenuButton from './menu-btn';
import MessageButton from './message-btn';
import BouncingArrow from './bouncing-arrow';
import MenuGroups from './menu-groups';
import HomeImages from './home-images';
import Footer from './footer';

import '../home.css';

export default function Home() {
  const menuGroupsRef = useRef(null);
  const scrollOffset = -30; // scroll upwards, the higher the number, the higher the viewport

  const scrollToMenuGroups = () => {
    if (menuGroupsRef.current) {
      console.log('Scrolling to menu groups');
      scroll.scrollTo(menuGroupsRef.current.offsetTop + scrollOffset, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    } else {
      console.log('menuGroupsRef is null');
    }
  };

  return (
    <div>
      <Header />
      <div className='home-container'>

        <section className='section1'>
          <h2 className='welcome-text'>به دایی علی (شعبه جدید) خوش آمدید</h2>

          <div className='description-1'>
            <p>منوی رستوران را آنلاین مشاهده کنید و انتقادات و پیشنهادات با ارزش خود را برای بهتر شدن ما با ما در میان بگذارید.</p>
            <p id='branch2'>شعبه سابق دایی علی (کتلت دایی علی) بحرالعلوم ۱۳*</p>
          </div>

          <div className='home-illust'>
            <img src="./icons/home-illust.svg" alt="phone illustration" />
          </div>

          <div className='buttons-container'> 
            <MenuButton onClick={scrollToMenuGroups} />
            <MessageButton />
          </div>
        </section>

        <div className='bounce'>
          <BouncingArrow loading="lazy" />
        </div> 

        <section className='section2' ref={menuGroupsRef}>
          <div className='menu-groups'>
            <MenuGroups loading="lazy" />
          </div>
        </section>

        <section>
          <HomeImages />
        </section>

        <Footer />
      </div>
    </div>
  );
}
