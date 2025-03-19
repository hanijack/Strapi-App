import { StrapiImage } from "@/components/StrapiImage"
import { getProjects } from "@/data/loaders"
import Link from "next/link"
import { notFound } from "next/navigation";

async function loader(){
  const data = await getProjects()
  if(!data) notFound()
    return data.data
}
const page = async () => {
  const data= await loader()
  console.log(data)
  return (
   <div className="flex flex-col p-6">
    <div>
      <h1 className="font-bold text-2xl mt-6 text-center text-primary self-center  p-4" >Top Construction Projects | DTC General Contracting Company in saudi arabia</h1>
      <p className="text-secondary font-[300] mb-6 text-center self-center mt-6">Explore DTC Contracting Company’s premier construction projects across Saudi Arabia. From healthcare facilities to luxury residential towers, discover our commitment to quality and innovation.</p>
    </div>
      <div className="flex flex-col md:flex-row ">{data.map(( item) =>(
        <Link key={item.id} href={`./projects/${item.title.split(" ").join("").toLowerCase()}`} className="cursor-pointer flex flex-col gap-4 bg-slate-300 relative w-full h-[400px] md:w-1/2 xl:w-1/3 shadow-lg hover:opacity-95 transition-all ease-in-out duration-200 ">
          <div className="w-full h-3/4 relative"><StrapiImage src={item.image.url} fill alt="image" className="rounded-md object-cover "/></div>
          <h2 className="text-primary text-center font-bold py-4">{item.title}</h2>
        </Link>
      ))}</div>
   </div>
  )
}

export default page