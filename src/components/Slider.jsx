import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCard from './ProductCard';


export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={30}
      slidesPerView={5}
      navigation
      autoplay={{delay: 2000}}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>

      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>

      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>

    </Swiper>
  );
};
