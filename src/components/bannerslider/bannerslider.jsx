
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import image1 from '../images/bannerslider1.png';
import image2 from '../images/bannerimage2.png';
import image3 from '../images/bannerimage3.png';


import './style.css';

const Bannerslider = () => {
  return (
    <>
      <Swiper
        speed={500}
        autoplay={{
            delay: 2500, 
            disableOnInteraction: true}
        }
        loop={true}
        spaceBetween={10}
        modules={[Autoplay, EffectFade]}
        grabCursor={true}
        // centeredSlides={true}
        slidesPerView={1} 
      >
 
          <SwiperSlide>
            <div className='imagesbanner'>
         <img src={image1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='imagesbanner'>
         <img src={image2} alt="" />

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='imagesbanner'>
         <img src={image3} alt="" />
            </div>
          </SwiperSlide>

     
  
      </Swiper>
    </>
  );
};


export default Bannerslider;
