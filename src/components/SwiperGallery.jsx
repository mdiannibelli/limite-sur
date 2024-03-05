// Import Swiper React components
import { Swiper, SwiperSlide,  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import '../styles/swiper-custom.css'
// import required modules
import { Navigation, EffectCoverflow, Pagination} from 'swiper/modules';

const imgs = [
  {img: '/img0.webp', title:'img0'}, 
  {img: '/img1.webp', title:'img1'},
  {img: '/img2.webp', title:'img2'},
  {img: '/img3.webp', title:'img3'},
  {img: '/img4.webp', title:'img4'},
  {img: '/img5.webp', title:'img5'},
  {img: '/img6.webp', title:'img6'},
  {img: '/img7.webp', title:'img7'},
  {img: '/img8.webp', title:'img8'},
  {img: '/img9.webp', title:'img9'},
]

export default function SwiperGallery() {
  return (
    <>
    <Swiper
    loop={true}
      navigation={true}
      modules={[EffectCoverflow,Navigation, Pagination]} 
      effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
      coverflowEffect={{
        rotate: 20,
        stretch: 60,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}   
      pagination={{ clickable: true }}
      className='min-w-[800px]'
      >
      {imgs.map((img,i) => {
        return (
          <SwiperSlide key={i}>
            <img className='object-cover h-full w-full md:h-auto md:w-auto lg:w-[700px] xl:w-[1220px] mx-auto' src={img.img} alt={img.title} loading='eager'/>
          </SwiperSlide>
        )
      })}
    
    </Swiper>
  </>
  )
}
