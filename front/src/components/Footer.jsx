import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
// import Image from "next/image"

const Footer = () => {
  return (
    <footer className='p-8  bg-gray-100 text-sm mt-16'>
   <div className="flex flex-col justify-between sm:flex-row gap-8 lg:gap-16  max-w-6xl xl:mx-auto ">
      <div className='flex flex-col sm:w-1/2 md:w-1/3 lg:w-1/4 gap-4 '>
        <h3 className=' text-xl tracking-wide text-primary mb-6'>TOC</h3>
        <p>Founded in Saudi Arabia in 2004, Time Of Creation Contracting Company (TOCC) has grown to become one of the leading contracting company in Saudi Arabia</p>
      </div>
      <div className="hidden lg:flex justify-between w-1/2 mx-6 ">
          <div className="flex relative w-1/4 ">
          <Image src="/logo-icon.png" fill alt="logo"/>
          </div>
          <div className="flex flex-col justify-between w-1/4 ">
            <h1 className="font-medium text-lg  mb-4 text-primary ">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/about">About Us</Link>
              <Link href="/quality">Quality</Link>
              <Link href="/vision">Vision</Link>
              <Link href="/values">Values</Link>
              <Link href="/projects">Projects</Link>
            </div>
          </div>
        </div>
      <div className='flex flex-col  sm:w-1/2 md:w-1/3 lg:w-1/4 gap-4'>
        <h3 className=' text-xl text-primary font-medium  '>CONTACT US</h3>
         <div className='flex justify-between flex-col items-center gap-6'>
            <div className='flex gap-2 items-center font-semibold w-full text-sm'><div className='border-2 border-solid p-3 border-primary rounded-full'><FaPhoneAlt className='text-primary w-[12px] h-[12px]'/></div>+966 50 300 7773</div>
            <div className='flex gap-2 items-center  w-full font-semibold text-sm'><div className='border-2 border-solid p-3 border-primary rounded-full'><FaLocationDot className='text-primary w-[12px] h-[12px] '/></div>Saudi arabia- P.o box 42323 medina</div>
            <div className='flex gap-2 items-center  w-full font-semibold text-sm'><div className='border-2 border-solid p-3 border-primary rounded-full'><FaClock className='text-primary w-[12px] h-[12px]' /></div>Sat – thu 09:00 am – 5:00 pm</div>
          </div>
      </div>
   </div>
  
  </footer>
  )
}

export default Footer