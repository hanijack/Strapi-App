import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import NavIcons from "./NavIcons"
import Menu from "./Menu"
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa";

const Header = () => {
  return (
    <header className="2xl:px-64 relative shadow-md ">
    {/* mobilescreen */}
    <div className="h-[80px] flex items-center bg-[#f7f7f7] md:h-[120px] md:p-12 justify-between lg:hidden p-4">
      <div className='flex md:hidden'>
        <Link href="/">
        <Image src="/logo.jpg" width={30} height={30} alt='logo'/>
        </Link>
      </div>
      <div className='hidden md:flex lg:hidden'>
        <Link href="/">
        <Image src="/logo.jpg" width={60} height={50} alt='logo'/>
        </Link>
      </div>
      <Menu />
    </div>
    {/* large screens */}
    <div className="hidden lg:flex h-full items-center justify-between  flex-col ">
     <div className='flex w-full '>
        <div className=" lg:w-3/4 flex gap-2 justify-between bg-[#1c3d50] p-6 text-white rounded-r-full">
          <div className='flex text-xs gap-4'>
            <p className='flex items-center gap-1'><FaPhoneAlt />+966 50 300 7773 </p>
            <p className='flex items-center gap-1'><FaLocationDot />Saudi arabia- P.o box 42323 medina</p>
            <p className='flex items-center gap-1'><MdEmail />Time.of.creation.co@gmail.com</p>
            <p className='flex items-center gap-1'><FaClock />Sat – thu 09:00 am – 5:00 pm</p>
          </div>
        </div>
        <div className='w-1/4 flex justify-center items-center gap-6 text-primary font-semibold '>
          <Link href="./projects"><p>Projects</p></Link>
          <Link href="./contact">Contact Us</Link>
        </div>
     </div>
     <div className='flex w-full  h-[150px] py-6 px-12 justify-between bg-[#f7f7f7]'>
        <Image src="/logo.jpg" width={90} height={60} alt='logo'/>
        <div className='flex justify-between items-center gap-6'>
          <div className='flex gap-2 items-center font-semibold text-sm'><div className='border-2 border-solid p-3 border-primary rounded-full'><FaPhoneAlt className='text-primary w-[22px] h-[22px]'/></div>+966 50 300 7773</div>
          <div className='flex gap-2 items-center font-semibold text-sm'><div className='border-2 border-solid p-3 border-primary rounded-full'><FaLocationDot className='text-primary w-[22px] h-[22px] '/></div>Saudi arabia- P.o box 42323 medina</div>
          <div className='flex gap-2 items-center font-semibold text-sm'><div className='border-2 border-solid p-3 border-primary rounded-full'><FaClock className='text-primary w-[22px] h-[22px]' /></div>Sat – thu 09:00 am – 5:00 pm</div>
        </div>
     </div>
      <div className='flex h-[50px] w-full'>
        <div className="w-1/3 flex justify-evenly items-center h-[40px]">
        <NavIcons />
        </div>
        <div className='w-2/3 justify-evenly gap-4 bg-[#1c3d50] flex items-center text-white font-semibold'>
            <Link href="./"><p>Home</p></Link>
            <Link href="./projects"><p>Projects</p></Link>
            <Link href="./about"><p>About</p></Link>
        </div>
      </div>
    </div>
  </header>
);
};

export default Header