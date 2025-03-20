"use client";
import React, { useRef } from "react";

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
  const progressCircle = useRef(null);
  const onAutoplayTimeLeft = (progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
  };
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
    <div className="bg-blue-950 rounded-3xl">
      <Swiper
        effect={"coverflow"}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 45,
          stretch: 50,
          depth: 20,
          modifier: 1,
          slideShadows: true,
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
            spaceBetween: 50,
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mt-[50px] pt-[50px]"
      >
        {posts.map((index, key) => (
          <SwiperSlide
            key={key}
            className="w-[250px] h-[800px] rounded-3xl  mt-[50px] border-[1px]"
          >
            <div className="p-5 bg-white rounded-t-3xl">
              <div className="flex gap-2 ">
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
            <img className="w-full h-[200px]" src={index.image} />
            <div className="flex justify-between p-5 rounded-b-3xl bg-white">
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
        <div className="h-[80px]" slot="container-end">
          <svg ref={progressCircle}></svg>
        </div>
      </Swiper>
    </div>
  );
}
