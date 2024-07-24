import React, { useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

import Header from './header';
import ContactButton from './contact';
import MenuButton from './menu-btn';
import MessageButton from './message-btn';
import MenuGroups from './menu-groups';
import Footer from './footer'; // Direct import
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
        smooth: 'easeInOutQuart',
      });
    }
  };

  const scrollToFooter = () => {
    if (footerRef.current) {
      console.log('Scrolling to footer:', footerRef.current.offsetTop);
      scroll.scrollTo(footerRef.current.offsetTop + scrollOffset, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  };

  const { ref: footerInViewRef, inView: footerInView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
  });

  return (
    <div>
      <Header />
      <div className="home-container">
        <h1 className="welcome-text">به دایی علی (شعبه جدید) خوش آمدید</h1>

        <div className="description">
          <span id="text1">
            منوی رستوران را آنلاین مشاهده کنید و انتقادات و پیشنهادات با ارزش
            خود را برای بهتر شدن ما با ما در میان بگذارید.
          </span>
          <span id="branch2">شعبه سابق دایی علی (کتلت دایی علی) بحرالعلوم ۱۳*</span>
        </div>

        <div className="buttons-container">
          <MenuButton onClick={scrollToMenuGroups} />
          <MessageButton />
          <ContactButton onClick={scrollToFooter} />
        </div>

        <Container className='image-container'>
          <Row>
            <LazyImage src="./images/burger.webp" alt="burger" className="img-fluid custom-img" />
            <LazyImage src="./images/pizza.webp" alt="pizza" className="img-fluid custom-img middle-img" />
            <LazyImage src="./images/restaurant.webp" alt="front view" className="img-fluid custom-img" />
          </Row>
        </Container>

        <div className="menu-groups" ref={menuGroupsRef}>
          <MenuGroups loading="lazy" />
        </div>

        <div ref={footerInViewRef}>
          <Footer ref={footerRef} />
        </div>
      </div>
    </div>
  );
}

const LazyImage = ({ src, alt, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
  });

  return (
    <Col md={4} ref={ref}>
      {inView && <img src={src} alt={alt} className={className} />}
    </Col>
  );
};
