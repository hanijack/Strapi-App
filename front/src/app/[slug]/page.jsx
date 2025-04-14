import { getPageBySlug } from "@/data/loaders";
import { StrapiImage } from "@/components/StrapiImage";
import { notFound } from "next/navigation";




async function loader(slug){
  const data = await getPageBySlug(slug)
  if(!data) notFound()
    return data.data
}
export const generateMetadata=async({params})=>{
  const slug=await params.slug
    return {
    title:`${slug.charAt(0).toUpperCase()+slug.slice(1)}`
  }
}
const page = async({params}) => {
  const slug = await params.slug;
const res = await loader(slug)
  const data=res[0]

  return (
    <div className="flex flex-col relative mt-8">
      <div className="w-full h-[600px] relative"><StrapiImage src={data.Image.url} fill className="object-fill " alt={data.title}/></div>
      <div className="flex flex-col px-6 md:px-16 pb-12 xl:px-24 w-10/12 self-center lg:-mt-24 shadow-xl bg-white z-30 max-w-6xl 2xl:mx-auto">
        <h1 className="font-bold text-2xl mt-6 text-center w-10/12 text-primary self-center bg-slate-200  p-4 ">{data.title}</h1>
        <div className="relative w-10/12 h-[600px] flex justify-center mt-6 text-center self-center">
          <StrapiImage src={data.image2.url} fill className=" object-fill  md:object-scale-down" alt={`${data.title}2`}/>
        </div>
        <p className="text-secondary font-[300] mb-6 w-10/12 text-center self-center mt-6">{data.Text} </p>
      </div>
      
    </div>
  )
}

export default page