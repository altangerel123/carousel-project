"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

export default function Carousel() {
  const posts = [
    { image: "img1.jpg" },
    { image: "img2.jpg" },
    { image: "img3.jpg" },
    { image: "img4.jpg" },
    { image: "img5.jpg" },
    { image: "img6.jpg" },
    { image: "img7.jpg" },
  ];
  return (
    <div className="bg-blue-950 m-[50px] rounded-3xl">
      <Swiper
        effect={"coverflow"}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 35,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
          usetransform: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 80,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
      >
        {posts.map((index, key) => (
          <SwiperSlide
            key={key}
            className="h-[800px] rounded-3xl  my-[60px] border-[1px]"
          >
            <div className="p-5 bg-white rounded-t-3xl text-black">
              <div className="flex gap-2">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="Logo.png"
                />
                <div>
                  <h1>Oyu Tolgoi LLC</h1>
                  <p>March 7</p>
                </div>
              </div>
              <p>
                Та бүхэндээ ирж буй XVII жарны &quot;Элдэв эрдэнэт&quot; хэмээгч
                модон могой жилийн сар шинийн мэндийг өргөн дэвшүүлье!
              </p>
            </div>
            <img className=" h-[250px]" src={index.image} />
            <div className="flex justify-between p-5 rounded-b-3xl bg-white text-black">
              <div className="flex justify-center items-center">
                <img className="w-[20px] h-[20px]" src="heart.png" />
                <p>23</p>
              </div>
              <div className="flex">
                <img className="w-[20px] h-[20px]" src="share.png" />
                <p>Share</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
