import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavIcons = () => {
  return (
    <div>
        <ul className='flex justify-between items-center gap-4 w-full'>
            <Link className='hover:cursor-pointer hover:scale-150 transition-all ease-out duration-300' href="/"><Image src="/li.png" alt='linknkedin-log' width={20} height={20}/></Link>
            <Link className='hover:cursor-pointer hover:scale-150 transition-all ease-out duration-300' href="/"><Image src="/email.png" alt='email-log' width={20} height={20}/></Link>
            <Link className='hover:cursor-pointer hover:scale-150 transition-all ease-out duration-300' href="/"><Image src="/wa.png" alt='whatsApp-log' width={20} height={20}/></Link>
            <Link className='hover:cursor-pointer hover:scale-150 transition-all ease-out duration-300' href="/"><Image src="/insta.png" alt='instagram-log' width={20} height={20}/></Link>
        </ul>
    </div>
  )
}

export default NavIcons