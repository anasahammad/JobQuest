import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial1 from "./Testimonial1";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import Testimonial2 from "./Testimonial2";
import Testimonial3 from "./Testimonial3";
import Testimonial4 from "./Testimonial4";



const Testimonial = () => {
    return (
        <div>
           <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            What clients saying
        </h1>

        <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>

        <Swiper
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
         navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
        <SwiperSlide><Testimonial1/></SwiperSlide>
        <SwiperSlide><Testimonial2/></SwiperSlide>
        <SwiperSlide><Testimonial3/></SwiperSlide>
        <SwiperSlide><Testimonial4/></SwiperSlide>
      </Swiper>
        
    </div>
</section> 
        </div>
    );
};

export default Testimonial;