import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const NavIcons = () => {
  return (
    <div className='w-full'>
        <ul className='flex justify-evenly items-center gap-4 w-full'>
            <Link className='hover:cursor-pointer hover:scale-150 transition-all ease-out duration-300' href="https://wa.me/966503007773" target='_blank'><FaWhatsapp fill='#cc7351' size="1.5em"/></Link>
            <Link className='hover:cursor-pointer hover:scale-150 transition-all ease-out duration-300' href="mailto:Time.of.creation.co@gmail.com"><MdOutlineEmail fill='#cc7351' size="1.5em" /></Link>
        </ul>
    </div>
  )
}

export default NavIcons