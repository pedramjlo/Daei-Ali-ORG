import React, { useRef, Suspense, lazy } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

import Header from './header';
import ContactButton from './contact';
import MenuButton from './menu-btn';
import MessageButton from './message-btn';
import MenuGroups from './menu-groups';
import '../home.css';

const LazyFooter = lazy(() => import('./footer'));

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

        <div className="home-illust">
        <svg width="163" height="165" viewBox="0 0 163 165" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M79.4187 156.013C79.4187 156.013 75.5163 147.235 81.855 141.119C88.1936 135.014 89.3255 135.542 91.6755 130.57C94.0364 125.598 96.1385 120.087 100.688 118.855C105.237 117.612 109.258 119.515 112.75 119.207C117.106 118.822 118.313 115.907 124.242 114.763C129.966 113.674 133.987 118.14 136.423 122.936C138.86 127.732 137.394 127.875 144.368 129.47C151.354 131.065 153.294 136.279 153.833 141.119C154.361 145.783 162.058 143.704 158.328 156.013H79.4187Z" fill="#006B27"/>
          <path d="M128.996 118.14L120.124 156.013" stroke="white" stroke-width="1.875" stroke-miterlimit="10"/>
          <path d="M145.942 134.431L124.113 156.013" stroke="white" stroke-width="1.875" stroke-miterlimit="10"/>
          <path d="M156.151 148.313L127.961 156.013" stroke="white" stroke-width="1.875" stroke-miterlimit="10"/>
          <path d="M100.86 122.595L117.192 156.013" stroke="white" stroke-width="1.875" stroke-miterlimit="10"/>
          <path d="M85.9513 143.077L113.289 156.013" stroke="white" stroke-width="1.875" stroke-miterlimit="10"/>
          <path d="M137.868 54.109C150.686 54.109 161.077 43.5058 161.077 30.426C161.077 17.3462 150.686 6.743 137.868 6.743C125.05 6.743 114.659 17.3462 114.659 30.426C114.659 43.5058 125.05 54.109 137.868 54.109Z" fill="#FFC000"/>
          <path d="M32.7154 129.17C33.0893 126.819 31.5249 124.604 29.2213 124.223C26.9176 123.841 24.747 125.438 24.3731 127.788C23.9992 130.139 25.5636 132.354 27.8672 132.735C30.1709 133.117 32.3415 131.521 32.7154 129.17Z" stroke="#FF478B" stroke-width="3.75" stroke-miterlimit="10"/>
          <path d="M63.9386 48.664C64.7423 48.664 65.3939 47.9991 65.3939 47.179C65.3939 46.3589 64.7423 45.694 63.9386 45.694C63.1349 45.694 62.4833 46.3589 62.4833 47.179C62.4833 47.9991 63.1349 48.664 63.9386 48.664Z" fill="#FF4B85"/>
          <path d="M127.476 156.629H120.458L135.27 25.817H142.288C144.293 25.817 145.726 27.467 145.489 29.513L131.508 152.933C131.281 154.979 129.481 156.629 127.476 156.629Z" fill="#006AD3"/>
          <path d="M67.0325 156.629H119.693C121.784 156.629 123.671 154.902 123.919 152.768L137.857 29.678C138.105 27.544 136.596 25.817 134.504 25.817H81.8442C79.7529 25.817 77.8664 27.544 77.6184 29.678L63.6799 152.768C63.4427 154.902 64.9411 156.629 67.0325 156.629Z" fill="#2E3744"/>
          <path d="M67.4744 149.589H120.835L134.052 32.857H80.6907L67.4744 149.589Z" fill="white"/>
          <path d="M135.82 83.017C136.758 83.017 137.609 82.236 137.717 81.279L140.886 53.262C140.994 52.305 140.315 51.524 139.377 51.524C138.439 51.524 137.588 52.305 137.48 53.262L134.31 81.279C134.203 82.236 134.871 83.017 135.82 83.017Z" stroke="white" stroke-width="1.59" stroke-miterlimit="10"/>
          <path d="M138.515 53.24C138.472 53.625 138.741 53.922 139.108 53.922C139.474 53.922 139.819 53.614 139.851 53.24C139.894 52.855 139.625 52.558 139.258 52.558C138.892 52.558 138.558 52.855 138.515 53.24Z" stroke="white" stroke-width="1.59" stroke-miterlimit="10"/>
          <path d="M104.709 29.931H114.281C114.658 29.931 114.993 29.623 115.025 29.249C115.068 28.864 114.799 28.567 114.432 28.567H104.859C104.482 28.567 104.148 28.875 104.116 29.249C104.073 29.634 104.331 29.931 104.709 29.931Z" fill="#006AD3"/>
          <path d="M100.537 29.249C100.461 29.898 100.914 30.426 101.55 30.426C102.186 30.426 102.757 29.898 102.833 29.249C102.908 28.6 102.456 28.072 101.82 28.072C101.184 28.072 100.601 28.6 100.537 29.249Z" fill="#006AD3"/>
          <path d="M61.0927 90.178L45.4186 89.87L16.4527 89.309L16.636 87.813L23.0932 37.026L33.9163 37.268L39.3063 37.389L52.0483 37.664L52.4256 37.675L56.274 60.973L57.6 69.025V69.036L57.9988 71.412L58.3653 73.656L59.2709 79.101L59.7344 81.972L60.8447 88.66L61.0927 90.178Z" fill="#AD192A"/>
          <path d="M39.3063 37.389L38.1744 45.694H32.7628L33.9163 37.268L39.3063 37.389Z" fill="#FFD7E5"/>
          <path d="M52.059 37.587L45.4186 89.87L61.0927 90.178L52.4256 37.675L52.059 37.587Z" fill="#AD192A"/>
          <path d="M49.3906 60.8278L48.8713 88.4213L87.6069 89.1803L88.1262 61.5869L49.3906 60.8278Z" fill="#FFC000"/>
          <path d="M48.3846 60.8179L48.2335 68.8463L88.9737 69.6447L89.1248 61.6163L48.3846 60.8179Z" fill="#FFC000"/>
          <path d="M65.9327 61.1498L65.4134 88.7433L71.0717 88.8542L71.591 61.2607L65.9327 61.1498Z" fill="white"/>
          <path opacity="0.26" d="M87.881 74.679L49.2131 70.455L49.2347 68.871L87.978 69.63L87.881 74.679Z" fill="black"/>
          <path d="M105.905 93.555C106.509 93.5 106.843 92.818 106.52 92.29C103.048 86.746 97.8309 70.95 81.2513 71.918C67.1726 72.743 50.9487 74.305 43.7261 75.031C42.4756 75.152 42.0983 76.824 43.1655 77.495L45.0412 78.694C46.4965 79.618 48.1998 80.036 49.903 79.893L63.0007 78.782C66.0299 78.529 68.9405 80.047 70.4928 82.709L82.8036 103.796C82.9653 104.071 83.2563 104.225 83.569 104.192L105.905 93.555Z" fill="#FF7F72"/>
          <path d="M45.7096 87.769C60.9202 80.762 71.4199 78.089 77.2627 77.077C80.3026 76.549 83.224 78.518 83.9355 81.587L85.7358 89.43C86.5443 92.972 84.0864 96.426 80.5398 96.723L44.2543 99.803C43.7477 99.847 43.2302 99.825 42.7343 99.726L5.06902 92.796C3.96946 92.598 3.5167 91.245 4.26052 90.398C5.21994 89.309 8.94982 87.406 12.1299 87.626C17.4552 88 37.8618 88.253 43.2302 88.319C44.0926 88.308 44.9335 88.132 45.7096 87.769Z" fill="#FF7F72"/>
          <path d="M102.208 84.513L114.809 106.524C114.809 106.524 106.606 121.209 88.2475 119.361L80.9494 100.595L102.208 84.513Z" fill="#FF7F72"/>
          <path d="M112.729 113.894C112.729 113.894 111.026 117.084 103.48 120.285" stroke="#006AD3" stroke-width="1.875" stroke-miterlimit="10"/>
          <path d="M84.1295 117.084C84.1295 117.084 86.5443 122.595 88.9698 122.309" stroke="#006AD3" stroke-width="1.875" stroke-miterlimit="10"/>
          <path d="M100.073 123.761C100.073 123.761 104.17 123.167 107.867 120.835" stroke="#006AD3" stroke-width="1.875" stroke-miterlimit="10"/>
          <path d="M7.14956 71.676C9.72153 71.676 11.8065 69.5485 11.8065 66.924C11.8065 64.2995 9.72153 62.172 7.14956 62.172C4.57759 62.172 2.4926 64.2995 2.4926 66.924C2.4926 69.5485 4.57759 71.676 7.14956 71.676Z" fill="#FFC000"/>
          <path d="M56.7052 26.961C54.3229 27.555 53.8485 28.039 53.2556 30.481C52.6735 28.05 52.1992 27.566 49.806 26.961C52.1884 26.367 52.6627 25.883 53.2556 23.441C53.8377 25.883 54.3121 26.367 56.7052 26.961Z" fill="#FFC000"/>
          <path d="M40.3412 156.42C40.3412 156.42 38.735 153.054 41.3437 150.722C43.9417 148.379 44.4052 148.588 45.3754 146.685C46.3456 144.782 47.208 142.67 49.073 142.197C50.9379 141.724 52.5873 142.45 54.021 142.329C55.7997 142.175 56.3064 141.064 58.7319 140.624C61.0819 140.206 62.7312 141.911 63.7338 143.748C64.7363 145.585 64.1326 145.64 67.0001 146.256C69.8676 146.872 70.6545 148.863 70.8809 150.711C71.0965 152.493 74.2551 151.701 72.7243 156.409L40.3412 156.42Z" fill="#006B27"/>
          <path d="M60.683 141.922L57.0502 156.42" stroke="white" stroke-width="1.875" stroke-miterlimit="10"/>
          <path d="M67.6361 148.159L58.678 156.42" stroke="white" stroke-width="1.875" stroke-miterlimit="10"/>
          <path d="M71.8296 153.472L60.2626 156.42" stroke="white" stroke-width="1.875" stroke-miterlimit="10"/>
          <path d="M49.1484 143.627L55.8428 156.42" stroke="white" stroke-width="1.875" stroke-miterlimit="10"/>
          <path d="M43.0254 151.47L54.2366 156.42" stroke="white" stroke-width="1.875" stroke-miterlimit="10"/>
          </svg>

        </div>

        <div className="buttons-container">
          <MenuButton onClick={scrollToMenuGroups} />
          <MessageButton />
          <ContactButton onClick={scrollToFooter} />
        </div>

        <Container>
          <Row>
            <LazyImage src="./burger.webp" alt="burger" className="img-fluid custom-img" />
            <LazyImage src="./pizza.webp" alt="pizza" className="img-fluid custom-img middle-img" />
            <LazyImage src="./restaurant.webp" alt="front view" className="img-fluid custom-img" />
          </Row>
        </Container>

        <div className="menu-groups" ref={menuGroupsRef}>
          <MenuGroups loading="lazy" />
        </div>

        <div ref={footerInViewRef}>
          {footerInView && (
            <Suspense fallback={<div>Loading...</div>}>
              <LazyFooter ref={footerRef} />
            </Suspense>
          )}
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
