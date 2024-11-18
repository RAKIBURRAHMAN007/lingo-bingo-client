import React, { useState } from "react";
import img_1 from '../../assets/banner.jpg'
import im_2 from '../../assets/img2.png'
import img_3 from '../../assets/img3.jpg'
import img_4 from '../../assets/img4.jpg'
const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    

    const handleClick = (e) => {
        e.preventDefault();
    };

    return (
        <div className="carousel w-full mt-7">
            {/* Slide 1 */}
            <div
                id="slide1"
                className={`carousel-item relative w-full ${
                    currentSlide === 1 ? "block" : "hidden"
                }`}
            >
                <img
                    src={img_1}
                    alt="Slide 1"
                    className="w-full h-40 md:h-96"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a
                        href="#slide4"
                        className="btn btn-circle"
                        onClick={(e) => {
                            handleClick(e);
                            setCurrentSlide(4);
                        }}
                    >
                        ❮
                    </a>
                    <a
                        href="#slide2"
                        className="btn btn-circle"
                        onClick={(e) => {
                            handleClick(e);
                            setCurrentSlide(2);
                        }}
                    >
                        ❯
                    </a>
                </div>
            </div>

            {/* Slide 2 */}
            <div
                id="slide2"
                className={`carousel-item relative w-full ${
                    currentSlide === 2 ? "block" : "hidden"
                }`}
            >
                <img
                    src={im_2}
                    alt="Slide 2"
                    className="w-full h-40 md:h-96"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a
                        href="#slide1"
                        className="btn btn-circle"
                        onClick={(e) => {
                            handleClick(e);
                            setCurrentSlide(1);
                        }}
                    >
                        ❮
                    </a>
                    <a
                        href="#slide3"
                        className="btn btn-circle"
                        onClick={(e) => {
                            handleClick(e);
                            setCurrentSlide(3);
                        }}
                    >
                        ❯
                    </a>
                </div>
            </div>

            {/* Slide 3 */}
            <div
                id="slide3"
                className={`carousel-item relative w-full ${
                    currentSlide === 3 ? "block" : "hidden"
                }`}
            >
                <img
                    src={img_3}
                    alt="Slide 3"
                    className="w-full h-40 md:h-96"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a
                        href="#slide2"
                        className="btn btn-circle"
                        onClick={(e) => {
                            handleClick(e);
                            setCurrentSlide(2);
                        }}
                    >
                        ❮
                    </a>
                    <a
                        href="#slide4"
                        className="btn btn-circle"
                        onClick={(e) => {
                            handleClick(e);
                            setCurrentSlide(4);
                        }}
                    >
                        ❯
                    </a>
                </div>
            </div>

            {/* Slide 4 */}
            <div
                id="slide4"
                className={`carousel-item relative w-full ${
                    currentSlide === 4 ? "block" : "hidden"
                }`}
            >
                <img
                    src={img_4}
                    alt="Slide 4"
                    className="w-full h-40 md:h-96 bg-cover"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a
                        href="#slide3"
                        className="btn btn-circle"
                        onClick={(e) => {
                            handleClick(e);
                            setCurrentSlide(3);
                        }}
                    >
                        ❮
                    </a>
                    <a
                        href="#slide1"
                        className="btn btn-circle"
                        onClick={(e) => {
                            handleClick(e);
                            setCurrentSlide(1);
                        }}
                    >
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
