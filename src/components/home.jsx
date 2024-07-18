import React from 'react';
import Header from './header';
import MenuButton from './menu-btn';
import MessageButton from './message-btn';
import BouncingArrow from './bouncing-arrow';
import ImageSlider from './main-slider';
import '../home.css';


export default function Home() {
  return (
    <div>
      <Header />
      <div className='home-container'>

        <h2 className='welcome-text'>به دایی علی (شعبه جدید) خوش آمدید</h2>

        <div className='description-1'>
          <p>منوی رستوران را آنلاین مشاهده کنید و انتقادات و  پیشنهادات با ارزش خود را برای بهتر شدن ما با ما در میان بگذارید.  </p>
        </div>

        <div className='description-2'>
          <p>شعبه سابق دایی علی (کتلت دایی علی) بحرالعلوم ۱۳*</p>
        </div>

        <div className='home-illust'>
          <img src="./icons/home-illust.svg" alt="phone illustration" />
        </div>


        <div className='buttons-container'> 
          <MenuButton />
          <MessageButton />
        </div>


          <div className='bounce'>
            <BouncingArrow />
          </div>

        <div className='image-slider'>
          <ImageSlider />
        </div>



      </div>
    </div>
  );
}
