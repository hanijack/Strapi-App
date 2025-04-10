import Link from "next/link";
// import Image from "next/image"

const Footer = () => {
  return (
    <footer className='p-8  bg-gray-100 text-sm mt-16'>
   <div className="flex flex-col justify-between sm:flex-row gap-8 lg:gap-16  max-w-6xl xl:mx-auto ">
      <div className='flex flex-col sm:w-1/2 md:w-1/3 lg:w-1/4 gap-4 '>
        <h3 className=' text-xl tracking-wide text-primary'>TOC</h3>
        <p>qusai sucks, ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus unde ut ea perferendis? Non asperiores suscipit nisi sit saepe.</p>
        <span className='font-semibold'>Hani.darklt@gmail.com</span>
        <span className='font-semibold'>+1212569843</span>
      </div>
      <div className="hidden lg:flex justify-between w-1/2 mx-6 ">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg  mb-4 text-primary">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/about">About Us</Link>
              <Link href="/quality">Quality</Link>
              <Link href="/vision">Vision</Link>
              <Link href="/values">Values</Link>
              <Link href="/projects">Projects</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg mb-4 text-primary">HELP</h1>
            <div className="flex flex-col gap-6 ">
              <Link href="/services">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="constuction">Constuction</Link>
              <Link href="">Privacy & Policy</Link>
              <Link href="">Legal & Privacy</Link>
            </div>
          </div>
        </div>
      <div className='flex flex-col  sm:w-1/2 md:w-1/3 lg:w-1/4 gap-4'>
        <h3 className=' text-xl text-primary '>CONTACT US</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus unde ut ea perferendis? Non asperiores suscipit nisi sit saepe.</p>
        <div className='flex'>
          <input placeholder='Your Queries' className='p-2 w-3/4'/>
          <button className='w-1/4 bg-primary text-white'>SEND</button>
        </div>
      </div>
   </div>
  
  </footer>
  )
}

export default Footer