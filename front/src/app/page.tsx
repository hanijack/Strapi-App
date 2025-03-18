// import ItemList from "@/components/ItemList";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
import Slider from "../components/Slider";
import HeroSection from "../components/HeroSection";
import Achievements from "../components/Achievements"



async function loader(){
  const data = await getHomePage()
  if(!data) notFound()
    return data.data
}


export default async function Home() {
  const {slider, Hero}=await loader()
  return (
    <div className="flex flex-col">
      <Slider slides={slider} />
      <HeroSection data={Hero[0]}/>
      <Achievements/>
      
    </div>
  );
}
