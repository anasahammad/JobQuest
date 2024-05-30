import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import { Autoplay, EffectFade, Keyboard,  Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
    return (
        <div >
            
           
           

<Swiper
        spaceBetween={30}
        slidesPerView={1}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        pagination={{
          clickable: true,
         
        }}
        keyboard={{
            enebled: true
        }}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        modules={[EffectFade, Autoplay, Pagination, Keyboard]}
        className="mySwiper "
      >
        <SwiperSlide> <Slider1/> </SwiperSlide>
        <SwiperSlide>   <Slider2/></SwiperSlide>
        <SwiperSlide>   <Slider3/></SwiperSlide>
       
        </Swiper>
        </div>
    );
};

export default Banner;