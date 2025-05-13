import React, { useRef } from "react";
import Slider from "react-slick";
import styles from './index.module.sass';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.sass';

interface CarouselProps {
    images: string[];
}

export function Carousel({ images }: CarouselProps) {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        arrows: true,
        className: "slider"
    };

    return (
        <Slider ref={sliderRef} {...settings} className={styles.slid}>
            {images.map((src, index) => (
                <div key={index} className={styles.gallery}>
                    <img src={src} alt={`slide-${index}`} />
                </div>
            ))}
        </Slider>
    );
}
