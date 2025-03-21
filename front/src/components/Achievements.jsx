"use client"
import { LiaCertificateSolid } from "react-icons/lia";
import Counter from "./Counter"

const Achievements = () => {
  return (
    <div className="flex flex-col text-center bg-slate-200  px-10 py-4">
        <h1 className=" text-primary text-2xl font-bold mb-3">Best General Contracting Company in Saudi Arabia</h1>
        <p className="text-secondary font-[300] mb-6">With over 20 years of experience, DTC is a leading general contracting company in Saudi Arabia, offering comprehensive turnkey construction solutions across various industries. From infrastructure development to commercial and industrial construction, we deliver high-quality projects on time and within budget.</p>
        <div className="flex justify-center gap-6">
            <Counter start={0} end={60} duration={1000} icon={<LiaCertificateSolid color="#F35C7A" size="4em"/>} text="workers"/>
            <Counter start={0} end={126} duration={2000} icon={<LiaCertificateSolid color="F35C7A" size="4em"/>} text="workers"/>
            <Counter start={0} end={410} duration={3000} icon={<LiaCertificateSolid color="F35C7A" size="4em"/>} text="workers"/>
        </div>
    </div>
  )
}

export default Achievements