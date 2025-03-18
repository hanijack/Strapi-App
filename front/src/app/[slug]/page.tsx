import { getPageBySlug } from "@/data/loaders";
import { StrapiImage } from "@/components/StrapiImage";




async function loader(slug){
  const data = await getPageBySlug(slug)
  console.log(data)
  if(!data) notFound()
    return data.data
}

const page = async({params}) => {
  const slug = (await params).slug;
  console.log(slug)
const res = await loader(slug)
  const data=res[0]
  console.log(data)

  return (
    <div className="flex flex-col relative mt-8">
      <div className="w-full h-[600px] relative"><StrapiImage src={data.Image.url} fill className="object-fill z-10 md:object-scale-down" alt={data.title}/></div>
      <h1 className="font-bold text-2xl mt-6 text-center w-10/12 text-primary self-center bg-slate-200  p-4 ">{data.title}</h1>
      <div className="relative w-10/12 h-[600px] flex justify-center mt-6 text-center self-center">
        <StrapiImage src={data.image2.url} fill className=" object-fill  md:object-scale-down" alt={`${data.title}2`}/>
      </div>
      <p className="text-secondary font-[300] mb-6 w-10/12 text-center self-center mt-6">{data.Text} </p>
      
    </div>
  )
}

export default page