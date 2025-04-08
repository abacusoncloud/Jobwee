// components/ImageSlider.tsx
'use client';

import { Swiper, SwiperSlide, FreeMode } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SwiperArrowLeft from "../../public/swiper-arrow-left.svg";
import SwiperArrowRight from "../../public/swiper-arrow-right.svg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';

const ImageSlider = () => {
    return (
        <div className="swiper-carousel mb-10 md:mb-0">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                autoplay={{ delay: 5000 }}
                loop
                className="rounded-2xl overflow-hidden"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },

                    860: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        FreeMode: true,
                    },

                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1600: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="thumbnail relative w-full h-52">

                        <Image
                            src="/slide_5.jpg"
                            alt="Household Services"
                            fill
                            className="brightness-75 object-cover"
                        />

                    </div>
                    <div className="bg-white p-2 flex justify-between items-center slide-content">
                        <h3 className="text-sm text-black font-bold slide-title">Household <br /> Services</h3>
                        <Link href="#" className="btn-more">
                            <Image
                                src="/btn-arrow.svg"
                                alt="More"
                                width={11}
                                height={8}
                            />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="thumbnail relative w-full h-52">

                        <Image
                            src="/slide_4.jpg"
                            alt="Home Maintenance Services"
                            fill
                            className="brightness-75 object-cover"
                        />

                    </div>
                    <div className="bg-white p-2 flex justify-between items-center slide-content">
                        <h3 className="text-sm text-black font-bold slide-title">Home Maintenance Services</h3>
                        <Link href="#" className="btn-more">
                            <Image
                                src="/btn-arrow.svg"
                                alt="More"
                                width={11}
                                height={8}
                            />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="thumbnail relative w-full h-52">

                        <Image
                            src="/slide_6.jpg"
                            alt="Beauty and Wellness"
                            fill
                            className="brightness-75 object-cover"
                        />

                    </div>
                    <div className="bg-white p-2 flex justify-between items-center slide-content">
                        <h3 className="text-sm text-black font-bold slide-title">Beauty and <br />Wellness</h3>
                        <Link href="#" className="btn-more">
                            <Image
                                src="/btn-arrow.svg"
                                alt="More"
                                width={11}
                                height={8}
                            />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="thumbnail relative w-full h-52">

                        <Image
                            src="/slide_3.jpg"
                            alt="Education and Tutorings"
                            fill
                            className="brightness-75 object-cover"
                        />

                    </div>
                    <div className="bg-white p-2 flex justify-between items-center slide-content">
                        <h3 className="text-sm text-black font-bold slide-title">Education and Tutoring</h3>
                        <Link href="#" className="btn-more">
                            <Image
                                src="/btn-arrow.svg"
                                alt="More"
                                width={11}
                                height={8}
                            />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="thumbnail relative w-full h-52">

                        <Image
                            src="/slide_2.jpg"
                            alt="Event and Entertainment"
                            fill
                            className="brightness-75 object-cover"
                        />

                    </div>
                    <div className="bg-white p-2 flex justify-between items-center slide-content">
                        <h3 className="text-sm text-black font-bold slide-title">Event and Entertainment</h3>
                        <Link href="#" className="btn-more">
                            <Image
                                src="/btn-arrow.svg"
                                alt="More"
                                width={11}
                                height={8}
                            />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="thumbnail relative w-full h-52">

                        <Image
                            src="/slide_1.jpg"
                            alt="Marine Services"
                            fill
                            className="brightness-75 object-cover"
                        />

                    </div>
                    <div className="bg-white p-2 flex justify-between items-center slide-content">
                        <h3 className="text-sm text-black font-bold slide-title">Marine <br />Services</h3>
                        <Link href="#" className="btn-more">
                            <Image
                                src="/btn-arrow.svg"
                                alt="More"
                                width={11}
                                height={8}
                            />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="thumbnail relative w-full h-52">

                        <Image
                            src="/slide_3.jpg"
                            alt="Education and Tutorings"
                            fill
                            className="brightness-75 object-cover"
                        />

                    </div>
                    <div className="bg-white p-2 flex justify-between items-center slide-content">
                        <h3 className="text-sm text-black font-bold slide-title">Education and Tutoring</h3>
                        <Link href="#" className="btn-more">
                            <Image
                                src="/btn-arrow.svg"
                                alt="More"
                                width={11}
                                height={8}
                            />
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='justify-center gap-6 items-center swipwer-navigation hidden md:flex'>
                <button className="swiper-button-prev-custom flex items-center justify-center bg-white cursor-pointer">
                    {SwiperArrowLeft && (
                        <Image src={SwiperArrowLeft} alt="Prev" width={18} height={18} />
                    )}
                </button>
                <button className="swiper-button-next-custom flex items-center justify-center bg-white cursor-pointer">
                    {SwiperArrowRight && (
                        <Image src={SwiperArrowRight} alt="Next" width={18} height={18} />
                    )}
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
