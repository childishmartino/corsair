import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "./slide1";
import Slide2 from "./slide2";
import Slide3 from "./slide3";
import Slide4 from "./slide4";
import Slide5 from "./slide5";
import Slide6 from "./slide6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const slider = () => {

    return (
        <>
            <Swiper pagination={{
                "type": "fraction", 
            }} navigation={true} className="mySwiper">
                <SwiperSlide><Slide1 /></SwiperSlide>
                <SwiperSlide><Slide2 /></SwiperSlide>
                <SwiperSlide><Slide3 /></SwiperSlide>
                <SwiperSlide><Slide4 /></SwiperSlide>
                <SwiperSlide><Slide5 /></SwiperSlide>
                <SwiperSlide><Slide6 /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default slider;