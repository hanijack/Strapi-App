"use client"

// import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { MdMenu } from "react-icons/md";

const Menu = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        {/* <Image src="/menuIcon.png" alt="menu-icon" width={28} height={28} className="cursor-pointer " onClick={()=> setOpen(prev => !prev)}/> */}
        <MdMenu color="d2b48c" size="3em" className="cursor-pointer " onClick={()=> setOpen(prev => !prev)}/>
        {open ? (
            <ul className="absolute bg-white text-[#b58c4d] right-0 top-20 h-[400px] w-full flex flex-col justify-evenly items-center text-lg z-50 transition-all ease-in-out duration-300  inset-shadow-md inset-shadow-indigo-500 ">
                <li className="hover:bg-[#b58c4d] hover:text-white w-full hover:cursor-pointer flex-1 flex items-center justify-center shadow-md" onClick={()=>setOpen(false)}><Link href="/">Home</Link></li>
                <li className="hover:bg-[#cc7351] w-full hover:text-white hover:cursor-pointer flex-1 flex items-center justify-center shadow-md" onClick={()=>setOpen(false)}><Link href="/about" >About</Link></li>
                <li className="hover:bg-[#f4e1c1] w-full hover:text-white hover:cursor-pointer flex-1 flex items-center justify-center shadow-md" onClick={()=>setOpen(false)}><Link href="/contact" >Contact</Link></li>
                <li className="hover:bg-[#d2b48c] w-full hover:text-white hover:cursor-pointer flex-1 flex items-center justify-center shadow-md" onClick={()=>setOpen(false)}><Link href="/projects" >projects</Link></li>
            </ul>
        ):<div className="absolute h-0 bg-white right-0 top-20 w-0  text-white shadow-none "></div>}
    </div>
  )
}

export default Menu