"use client"
import { LiaCertificateSolid } from "react-icons/lia";
import { GrUserWorker } from "react-icons/gr";
import { PiCertificate } from "react-icons/pi";
import Counter from "./Counter"

const Achievements = () => {
  return (
    <div className="flex flex-col  bg-slate-200  px-10 py-4 ">
      <div className="flex flex-col max-w-6xl xl:mx-auto">
          <h1 className=" text-primary text-center text-2xl font-bold mb-3">Best General Contracting Company in Saudi Arabia</h1>
          <p className="text-secondary font-[300] mb-6">With over 20 years of experience, DTC is a leading general contracting company in Saudi Arabia, offering comprehensive turnkey construction solutions across various industries. From infrastructure development to commercial and industrial construction, we deliver high-quality projects on time and within budget.</p>
          <div className="flex justify-evenly gap-6">
              <Counter start={0} end={60} duration={2000} icon={<LiaCertificateSolid color="cc7351" size="4em"/>} text="Projects Completed"/>
              <Counter start={0} end={126} duration={3000} icon={<GrUserWorker color="cc7351" size="4em"/>} text="Work Employed"/>
              <Counter start={0} end={10} duration={1000} icon={<PiCertificate color="cc7351" size="4em"/>} text="Certificates"/>
          </div>
      </div>
    </div>
  )
}

export default Achievements