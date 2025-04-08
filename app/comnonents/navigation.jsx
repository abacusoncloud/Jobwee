'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import Menu_Icon from "../../public/menu-icon.svg";
import { ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    } else if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power3.in',
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="nav-bar bg-black text-white relative rounded-full mt-6">
      <div className="mx-auto px-3 flex justify-between items-center">
        <div className="text-2xl font-semibold md:ml-3">
          <Link href="/" passHref>
            <Image src="/logo.svg" alt="Jobwhee" width={171} height={60} className='logo' />
          </Link>
        </div>

        <ul className="hidden md:flex primary-menu">
          <li>
            <Link href="/">
              <span className="text-base font-semibold hover:text-gray-400 transition duration-300">Post a Job</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="text-base font-semibold hover:text-gray-400 transition duration-300">Explore Job</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="text-base font-semibold hover:text-gray-400 transition duration-300">How It Works</span>
            </Link>
          </li>
        </ul>

        <div className="flex gap-2 relative">
          <div
            className="border border-default px-2 gap-3 py-3 rounded-full cursor-pointer btn-medium-rounded hidden md:flex"
            onClick={() => setToggleDropDown(!toggleDropDown)}
          >
            <Image src="/country-flag.svg" alt="English" width={24} height={24} />
            <div className="drop-down flex items-center">
              <span className="text-sm">EN</span>
              <ChevronDown size={16} />
            </div>
          </div>

          <Link
            href="#"
            className="border border-default justify-between px-8 gap-2 py-3 rounded-full cursor-pointer btn-large-rounded hidden md:flex"
          >
            <span className="text-sm">Sign In</span>
          </Link>

          <Link
            href="#"
            className="bg-white border border-white justify-between px-8 gap-2 py-3 rounded-full cursor-pointer btn-large-rounded hidden md:flex"
          >
            <span className="text-sm text-gray-700">Sign Up</span>
          </Link>

          {toggleDropDown && (
            <ul
              className="lang-selector flex flex-col absolute border border-default rounded-2xl px-2 z-30 bg-black"
              style={{ width: '131px' }}
            >
              <li
                className="flex gap-2 text-sm text-white cursor-pointer"
                onClick={() => setToggleDropDown(!toggleDropDown)}
              >
                <Image src="/country-flag.svg" alt="English" width={24} height={24} />
                <span className="lang-label" title="English">
                  English
                </span>
              </li>
              <div className="divider"></div>
              <li
                className="flex gap-2 text-sm text-white cursor-pointer"
                onClick={() => setToggleDropDown(!toggleDropDown)}
              >
                <Image src="/flag-greece.svg" alt="Greek" width={24} height={24} />
                <span className="lang-label" title="Greek">
                  Greek
                </span>
              </li>
            </ul>
          )}
        </div>

        <div className="md:hidden flex items-center gap-1">
          <Link
            href="#"
            className="bg-white border border-white flex justify-between px-8 gap-2 py-3 rounded-full cursor-pointer btn-large-rounded"
          >
            <span className="text-sm text-gray-700">Sign Up</span>
          </Link>
          <button onClick={toggleMobileMenu} aria-label="Toggle Navigation" className='hamburger-manu bg-white rounded-full flex items-center justify-center'>
            <Image src={Menu_Icon} alt="Menu" />
          </button>
        </div>
      </div>

      {/* {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-gray-800 text-white py-4 absolute w-full top-15 z-30">
          <ul className="space-y-4 px-6">
            <li>
              <Link href="/">
                <span onClick={toggleMobileMenu} className="text-lg hover:text-gray-400 transition duration-300 block">
                  Post a Job
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span onClick={toggleMobileMenu} className="text-lg hover:text-gray-400 transition duration-300 block">
                  Explore Job
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span onClick={toggleMobileMenu} className="text-lg hover:text-gray-400 transition duration-300 block">
                  How It Works
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )} */}
    </nav>
  );
};

export default Navigation;
