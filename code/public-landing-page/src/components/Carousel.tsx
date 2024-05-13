import { useState } from 'react';
import {css} from "@emotion/react";

type CarouselProps = {
    images: string[]
}
const Carousel = ({ images }: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    return (
        <div css={carouselStyles}>
            <button onClick={prevSlide} css={carouselBtnPrev}>
                &lt;
            </button>
            <img
                src={images[activeIndex]}
                alt={`Slide ${activeIndex}`}
                css={carouselImg}
            />
            <button onClick={nextSlide} css={carouselBtnNext}>
                &gt;
            </button>
        </div>
    );
};

const carouselStyles = css`
    position: relative;
    max-width: 500px;
    overflow: hidden;
`

const carouselBtn = css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 1.5rem;
    border: none;
    padding: 1rem;
    cursor: pointer;
    z-index: 1;
    transition: background-color 0.3s;
    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`

const carouselBtnPrev = css`
    ${carouselBtn};
    left: 0;
`

const carouselBtnNext = css`
    ${carouselBtn};
    right: 0;
`

const carouselImg = css`
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`

export default Carousel;