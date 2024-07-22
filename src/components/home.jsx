import React, { useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Header from './header';
import MenuButton from './menu-btn';
import MessageButton from './message-btn';
import MenuGroups from './menu-groups';
import HomeImages from './home-images';
import Footer from './footer';

import '../home.css';




export default function Home() {
  const menuGroupsRef = useRef(null);
  const scrollOffset = -30; // scroll upwards. the higher the number, the higher the viewport

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
          </div>
        </section>


          <div className='menu-groups' style={{ marginTop: "50%" }} ref={menuGroupsRef}>
            <MenuGroups loading="lazy" />
          </div>


        <div className='image-container'>
          <HomeImages />
        </div>

        <Footer />
      </div>
    </div>
  );
}
