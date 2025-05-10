"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import NavIcons from "./NavIcons"
import Menu from "./Menu"
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [menu, setMenu] = useState(false )

  return (
    <header className=" relative shadow-md ">
    {/* mobilescreen */}
    <div className="h-[80px] flex items-center bg-[#f7f7f7] md:h-[150px] md:p-12 justify-between lg:hidden p-2">
      <div className='flex md:hidden'>
        <Link href="/">
        <Image src="/logo-icon.png" width={45} height={30} alt='logo'/>
        </Link>
      </div>
      <div className='hidden md:flex lg:hidden'>
        <Link href="/">
        <Image src="/logo-icon.png" width={60} height={70} alt='logo'/>
        </Link>
      </div>
      <Menu />
    {/* large screens */}
    </div>
    <div className="hidden lg:flex h-full items-center justify-between  flex-col  bg-[#d2b48c]">
      <div className='flex w-full h-[60px] xl:mx-auto'>
        <div className=" lg:w-3/4 flex gap-2 justify-between bg-primary p-6 text-white clip-path-sloping 2xl:ml-auto text-center ">
          <div className='flex text-xs gap-4  max-w-xl mx-auto text-center justify-center self-center 2xl:gap-8'>
            <p className='flex items-center justify-center gap-1 whitespace-nowrap'><FaPhoneAlt size="1.5em"/>+966 50 300 7773 </p>
            <p className='flex items-center justify-center  gap-1 whitespace-nowrap'><FaLocationDot size="1.5em"/>Saudi arabia-P.o box 42323 medina</p>
            <p className='flex items-center justify-center gap-1 whitespace-nowrap'><MdEmail size="2em"/>Time.of.creation.co@gmail.com</p>
            <p className='flex items-center justify-center gap-1 whitespace-nowrap '><FaClock size="1.5em"/>Sat – thu 09:00 am – 5:00 pm</p>
          </div>
        </div>
        <div className='w-1/4 flex justify-center items-center gap-6 text-[#cc7351] font-semibold  max-w-lg xl:mr-auto '>
          <Link href="./projects"><p>Projects</p></Link>
          <Link href="./contact">Contact Us</Link>
        </div>
     </div>
     <div className='flex w-full gap-4 h-[180px] py-2 px-12  bg-[#f7f7f7]'>
        <div className='flex justify-between items-center max-w-6xl xl:mx-auto'>
          <Link href="/" className='relative h-[120px] w-[100px]'><Image src="/logo-icon.png" fill alt='logo'/></Link>
          <Link href="/" className='flex justify-center items-center'><Image src="/logo-2.png" width={310} height={100} alt='logo2' className='object-cover'/></Link>
          <div className='flex justify-between items-center gap-6'>
            <div className='flex gap-2 items-center font-semibold text-sm whitespace-nowrap'><div className='border-2 border-solid p-3 border-primary rounded-full'><FaPhoneAlt className='text-primary w-[22px] h-[22px]'/></div>+966 50 300 7773</div>
            <div className='flex gap-2 items-center font-semibold text-sm whitespace-nowrap'><div className='border-2 border-solid p-3 border-primary rounded-full'><FaLocationDot className='text-primary w-[22px] h-[22px] '/></div>Saudi arabia- P.o box 42323 medina</div>
            <div className='flex gap-2 items-center font-semibold text-sm whitespace-nowrap'><div className='border-2 border-solid p-3 border-primary rounded-full'><FaClock className='text-primary w-[22px] h-[22px]' /></div>Sat – thu 09:00 am – 5:00 pm</div>
          </div>
        </div>
     </div>
      <div className='flex h-[50px] w-full bg-primary '>
        <div className="w-1/3 flex justify-evenly items-center h-[50px] bg-[#d2b48c] clip-path-sloping">
        <NavIcons />
        </div>
        <div className='w-2/3 justify-evenly gap-4 bg-primary flex items-center text-white font-semibold  relative '>
            <Link href="./"><p>Home</p></Link>
            <Link href="./projects"><p>Projects</p></Link>
            <div onMouseOver={()=> setMenu(true)} onMouseLeave={()=> setMenu(false)} className='relative flex justify-center h-full items-center hover:cursor-pointer gap-2' ><p>About</p>
                {menu && (<ul className='absolute top-12 2xl:top-10 left-0 right-0 bg-white self-center  h-[200px] w-[150px]  text-[#cc7351] flex flex-col justify-evenly items-center text-lg z-50 transition-all ease-in-out duration-300  inset-shadow-md' onMouseOver={()=> setMenu(true)} >
                  <Link href="/about" className="bg-white hover:text-white w-full hover:cursor-pointer p-1  flex-1 flex items-center justify-center shadow-md hover:bg-[#cc7351]"><li >About</li></Link>
                  <Link href="/vision" className="bg-white hover:text-white w-full hover:cursor-pointer flex-1 flex items-center justify-center shadow-md hover:bg-[#cc7351]"><li>Vision</li></Link>
                 <Link href="/values" className="bg-white hover:text-white w-full hover:cursor-pointer flex-1 flex items-center justify-center shadow-md hover:bg-[#cc7351]"> <li>Values</li></Link>
                 <Link href="/quality" className="bg-white hover:text-white w-full hover:cursor-pointer flex-1 flex items-center justify-center shadow-md hover:bg-[#cc7351]"> <li>Quality</li></Link>
                </ul>)}
                <IoMdArrowDropdown />
            </div>
        </div>
      </div>
    </div>
  </header>
);
};

export default Header