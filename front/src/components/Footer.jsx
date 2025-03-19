import Link from "next/link";
// import Image from "next/image"

const Footer = () => {
  return (
    <footer className='p-8 flex flex-col justify-between sm:flex-row gap-8 lg:gap-16 bg-gray-100 text-sm mt-16'>
    <div className='flex flex-col sm:w-1/2 md:w-1/3 lg:w-1/4 gap-4'>
      <h3 className=' text-xl tracking-wide text-[#F35C7A]'>QUSAI</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus unde ut ea perferendis? Non asperiores suscipit nisi sit saepe.</p>
      <span className='font-semibold'>Hani.darklt@gmail.com</span>
      <span className='font-semibold'>+1212569843</span>
      {/* <ul className='flex gap-2 justify-between w-full'>
        <li><Link href=""><Image src="/facebook.png" alt='' width={16} height={16}/></Link></li>
        <li><Link href=""><Image src="/instagram.png" alt='' width={16} height={16}/></Link></li>
        <li><Link href=""><Image src="/youtube.png" alt='' width={16} height={16}/></Link></li>
        <li><Link href=""><Image src="/pinterest.png" alt='' width={16} height={16}/></Link></li>
        <li><Link href=""><Image src="/x.png" alt='' width={16} height={16}/></Link></li>
      </ul> */}
    </div>
    <div className="hidden lg:flex justify-between w-1/2 mx-6 ">
        <div className="flex flex-col justify-between">
          <h1 className="font-medium text-lg  mb-4">COMPANY</h1>
          <div className="flex flex-col gap-6">
            <Link href="/about">About Us</Link>
            <Link href="/quality">Quality</Link>
            <Link href="/vision">Vision</Link>
            <Link href="/values">Values</Link>
            <Link href="/projects">Projects</Link>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="font-medium text-lg mb-4">HELP</h1>
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
      <h3 className=' text-xl '>SUBSCRIBE</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus unde ut ea perferendis? Non asperiores suscipit nisi sit saepe.</p>
      <div className='flex'>
        <input placeholder='Email address' className='p-2 w-3/4'/>
        <button className='w-1/4 bg-[#F35C7A] text-white'>JOIN</button>
      </div>
    </div>
  
  </footer>
  )
}

export default Footer