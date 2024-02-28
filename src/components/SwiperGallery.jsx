// Import Swiper React components
import { Swiper, SwiperSlide,  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
// import required modules
import { Navigation, EffectCoverflow } from 'swiper/modules';

const imgs = [
  {img: '@/../public/img0.jpeg', title:'img0'}, 
  {img: '@/../public/img1.jpeg', title:'img1'},
  {img: '@/../public/img2.jpg', title:'img2'},
  {img: '@/../public/img3.webp', title:'img3'},
  {img: '@/../public/img4.webp', title:'img4'},
  {img: '@/../public/img5.webp', title:'img5'},
  {img: '@/../public/img6.webp', title:'img6'},
  {img: '@/../public/img7.webp', title:'img7'},
  {img: '@/../public/img8.webp', title:'img8'},
  {img: '@/../public/img9.webp', title:'img9'},
]

export default function SwiperGallery() {
  return (
    <>
    <Swiper
    loop={true}
      navigation={true}
      modules={[EffectCoverflow,Navigation]} 
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
      className='min-w-[800px]'
      >
      {imgs.map((img,i) => {
        return (
          <SwiperSlide className='' key={i}>
            <img className='object-cover h-full w-full md:h-auto md:w-auto lg:w-[700px] xl:w-[1220px] mx-auto' src={img.img} alt={img.title} loading='eager'/>
          </SwiperSlide>
        )
      })}
    
    </Swiper>
  </>
  )
}
