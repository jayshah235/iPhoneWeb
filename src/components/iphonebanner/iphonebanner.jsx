
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Folderdata } from './data';
import './styles.css';

const Iphonebanner = () => {
  return (
    <>
      <Swiper
        speed={1200}
        autoplay={{
            // delay: 2500, 
            disableOnInteraction: true}
        }
        loop={true}
        spaceBetween={10}
        modules={[Autoplay, EffectFade]}
        grabCursor={true}
        // centeredSlides={true}
        slidesPerView={4} 
        slidesPerGroup={1}
      >
 {Folderdata.map((item) => 
 <SwiperSlide>
            <div className='phonebanner'>
         <img src={item.imageurl} alt="" />
            </div>
            <div className='textcenter'>
                <a href="/">{item.model}</a>
            <h3>{item.heading}</h3>
                <p>{item.price}</p>
                </div>     
          </SwiperSlide>
)}
      </Swiper>
    </>
  );
};


export default Iphonebanner;
