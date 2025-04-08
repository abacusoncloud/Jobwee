"use client"
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Hero_Banner from "../../public/hero-banner.jpg";
import PlayIcon from "../../public/icon-play.svg";
import Icon_Search from "../../public/search-icon.svg";
import Icon_Talent from "../../public/talent.svg";
import Icon_Client from "../../public/client.svg";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import Link from "next/link";
const Hero = () => {
    const [showDropdown, setShowDropdow] = useState(false);
    return (
        <>
            <div className='hero-section relative'>
                <Image src={Hero_Banner} alt="Hero" className="hero-slide-thumbnail" />
                <div className="hero--left-content absolute z-10 flex items-center">
                    <h2 className="text-lg uppercase text-white heading-base">
                        Find the <span className="highlight">talent</span> sign up
                        &amp; get The <span className="highlight">job</span> done
                    </h2>
                </div>
                <div className="right-content absolute z-10">
                    <div className="hero--right-content flex text-center justify-center">
                        <h2 className="text-lg uppercase text-white heading-base">
                            We`ll <span className="highlight">handle</span> that
                        </h2>
                    </div>
                    <div className="cta-bar flex">
                        <Link href="#" className="button-highlight text-base flex items-center justify-center">Sign Up for Contract</Link>
                        <Link href="#" className="flex items-center justify-center rounded-full bg-white btn-play"><Image src={PlayIcon} alt="Play" width={11} height={13} /></Link>
                    </div>
                </div>
            </div>
            <div className="hero--search-bar flex flex-col gap-5 relative z-10 items-center">
                <div className="search-box flex justify-between bg-white">
                    <div className="btn-search bg-black text-white cursor-pointer"><Image src={Icon_Search} alt="Search" /></div>
                    <input type="text" className="search-field text-base" placeholder="Find a job, talent or service" />
                    <div className="serch-dropdown flex items-center justify-center gap-2 cursor-pointer" onClick={()=> setShowDropdow(!showDropdown)}>
                        <span>Talent</span>
                        {!showDropdown ? (<ChevronDownIcon size={16} />) : (<ChevronUpIcon size={16} />)} 
                    </div>
                    {showDropdown && (
                        <ul className="drop-downswitcher flex-col bg-white rounded-2xl absolute p-2.5 gap-3 shadow-[0px_11px_28px_#617CAE21] hidden md:flex">
                            <li className="flex gap-2 items-start cursor-pointer">
                                <Image src={Icon_Talent} alt="Talent" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium drop-title">Talent</span>
                                    <div className="dropdown-desc">Hire professionals effortlessly.</div>
                                </div>
                            </li>
                            <li className="flex gap-2 items-start cursor-pointer">
                                <Image src={Icon_Client} alt="Talent" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium drop-title">Client</span>
                                    <div className="dropdown-desc">Apply to jobs posted by clients.</div>
                                </div>
                            </li>
                        </ul>
                    )}

                </div>
                <div className='flex items-end md:hidden w-full flex-col'>
                {showDropdown && (
                        <ul className="drop-downswitcher flex flex-col bg-white rounded-2xl absolute p-2.5 gap-3 shadow-[0px_11px_28px_#617CAE21] md:hidden drop-mobile">
                            <li className="flex gap-2 items-start cursor-pointer">
                                <Image src={Icon_Talent} alt="Talent" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium drop-title">Talent</span>
                                    <div className="dropdown-desc">Hire professionals effortlessly.</div>
                                </div>
                            </li>
                            <li className="flex gap-2 items-start cursor-pointer">
                                <Image src={Icon_Client} alt="Talent" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium drop-title">Client</span>
                                    <div className="dropdown-desc">Apply to jobs posted by clients.</div>
                                </div>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="pagination flex items-center gap-2">
                    <span className="page-item active"></span>
                    <span className="page-item"></span>
                    <span className="page-item"></span>
                    <span className="page-item"></span>
                    <span className="page-item"></span>
                </div>
                <Link href="#" className="cta-white uppercase bg-white text-black flex items-center justify-center">Education and Tutoring</Link>
            </div>
        </>
    )

}

export default Hero;