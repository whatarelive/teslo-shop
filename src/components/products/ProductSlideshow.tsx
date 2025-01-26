"use client";

import { useState, type FC } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "@/components/styles/styles.css";
import Image from "next/image";

interface Props {
    images: string[];
    title: string;
    className?: string;
}

const ProductSlideshow: FC<Props> = ({ images, title, className }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();

  return (
    <div className={className}>
        {/* Slideshow principal */}
        <Swiper
            style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            } as React.CSSProperties }
            spaceBetween={50}
            navigation={true}
            autoplay={{
                delay: 2500
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[ FreeMode, Navigation, Thumbs, Autoplay ]}
            className="mySwiper2"
        >
        {
            images.map((img, index) => (
                <SwiperSlide key={index}>
                    <Image 
                        width={1024} 
                        height={700} 
                        src={`/products/${img}`} 
                        alt={title} 
                    />
                </SwiperSlide>
            ))
        }
        </Swiper>

        {/* Slideshow for thumbs */}
        <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[ FreeMode, Navigation, Thumbs ]}
            className="mySwiper"
        >
        {
            images.map((img, index) => (
                <SwiperSlide key={index}>
                    <Image 
                        width={300} 
                        height={300} 
                        src={`/products/${img}`} 
                        alt={title} 
                    />
                </SwiperSlide>
            ))
        }   
        </Swiper>
    </div>
  )
}

export default ProductSlideshow;