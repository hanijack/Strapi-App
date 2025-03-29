import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const NavIcons = () => {
  return (
    <div className='w-full'>
        <ul className='flex justify-evenly items-center gap-4 w-full'>
            <Link className='hover:cursor-pointer hover:scale-150 transition-all ease-out duration-300' href="/"><FaWhatsapp fill='#d2b48c' size="1.5em"/></Link>
            <Link className='hover:cursor-pointer hover:scale-150 transition-all ease-out duration-300' href="/"><MdOutlineEmail fill='#d2b48c' size="1.5em" /></Link>
            {/* <Link className='hover:cursor-pointer hover:scale-150 transition-all ease-out duration-300' href="/"><Image src="/wa.png" alt='whatsApp-log' width={20} height={20}/></Link>
            <Link className='hover:cursor-pointer hover:scale-150 transition-all ease-out duration-300' href="/"><Image src="/insta.png" alt='instagram-log' width={20} height={20}/></Link> */}
        </ul>
    </div>
  )
}

export default NavIcons