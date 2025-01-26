"use client";

import type { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "@/components/styles/styles.css";

interface Props {
    images: string[];
    title: string;
    className?: string;
}

const ProductMobileSlideshow: FC<Props> = ({ images, title, className }) => { 
  return (
    <div className={className}>
        <Swiper
            style={{
                width: "100vw",
                height: "500px"
            }}
            pagination={true}
            autoplay={{
                delay: 2500
            }}
            modules={[ FreeMode, Autoplay, Pagination ]}
            className="mySwiper2"
        >
        {
            images.map((img, index) => (
                <SwiperSlide key={index}>
                    <Image 
                        width={600} 
                        height={500} 
                        src={`/products/${img}`} 
                        alt={title} 
                        className="object-fill"
                    />
                </SwiperSlide>
            ))
        }
        </Swiper>
    </div>
  )
}

export default ProductMobileSlideshow;