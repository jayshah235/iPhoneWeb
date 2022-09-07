import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { Folderdata } from "./data";
import "./styles.css";
import { NavLink } from "react-router-dom";

const Iphonebanner = () => {
  return (
    <>
      <Swiper
        speed={1200}
        autoplay={{
          disableOnInteraction: true,
        }}
        loop={true}
        spaceBetween={10}
        modules={[Autoplay, EffectFade]}
        grabCursor={true}
        slidesPerView={4}
        slidesPerGroup={1}
      >
        {Folderdata.map((item) => (
          <SwiperSlide>
            <div className="mainslidebanner">
              <NavLink to={item.prouctUrl}>
                <div className="phonebanner">
                  <img src={item.imageurl} alt="" />
                  <div className="onhovertext"> Quick View </div>
                </div>
                <div className="textcenter">
                  <h5>{item.heading}</h5>
                  <h3>{item.model} </h3>
                  <p>{item.price}</p>
                </div>
              </NavLink>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Iphonebanner;
