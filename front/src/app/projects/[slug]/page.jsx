import { StrapiImage } from "@/components/StrapiImage";
import Slider from "@/components/Slider";
import { getProjectBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader(slug) {
  const data = await getProjectBySlug(slug);
  if (!data) notFound();
  return data.data;
}
export const generateMetadata=async({params})=>{
  const slug=await params.slug
  return {
    title:`${slug.charAt(0).toUpperCase()+slug.slice(1)}`
  }
}

const page = async ({ params }) => {
  const { slug } = await params;
  const res = await loader(slug);
  const data = res[0];
  return (
    <div className="flex flex-col ">
      <Slider slides={data?.slider} />
      <div className="flex flex-col px-6 md:px-16 pb-12 xl:px-24 w-10/12 self-center lg:-mt-24 shadow-xl bg-white z-30 max-w-6xl 2xl:mx-auto">
        <h1 className="font-bold text-2xl my-6 text-center  text-primary  p-6 ">
          <div className=" relative h-[400px]  mb-3 ">
            <StrapiImage
              src={data?.image?.url}
              fill
              alt={`${data?.title} image`}
              className="object-cover "
            />
          </div>
          {data?.title}
        </h1>
        {Object.entries(data?.info[0])
          .filter(([key]) => key !== "id")
          .map(([key, val], i) => (
            <div key={i} className="flex gap-2 py-2">
              <h4 className="font-bold text-primary">{key}:</h4>
              <p className="text-secondary">{val}</p>
            </div>
          ))}
        <h2 className=" text-primary font-bold text-2xl mt-6 py-4  ">
          Introduction
        </h2>

        <p className=" text-secondary">
          {data?.Introduction[0].children[0].text}
        </p>
        {data?.Project_Overview[0] && data.info[0] && (
          <h2 className="text-2xl font-bold  text-primary py-4">
            Project Details
          </h2>
        )}
        {data?.Project_Overview[0] &&
          Object.entries(data?.Project_Overview[0])
            .filter(([key]) => key !== "id" && key !== "__component")
            .map(([key, val], i) => (
              <div key={i} className=" py-2 flex flex-col gap-2">
                <h4 className="font-bold text-primary">{key}:</h4>
                <p className="text-secondary">{val}</p>
              </div>
            ))}
        {data?.Project_Overview[1].feature && (
          <h2 className="text-2xl font-bold  text-primary py-4">
            Key Features
          </h2>
        )}
        {data?.Project_Overview[1].feature &&
          data?.Project_Overview[1].feature.map((i, index) => (
            <ol key={index} className=" flex flex-col ">
              <h4 className="font-bold text-primary text-xl py-4">
                {index + 1}-{i.feature_title}
              </h4>
              <ol className="px-8 py-2 md:py-6 lg:py-8 flex flex-col gap-4">
                {i.name.map((i) => (
                  <li key={i.name} className="flex flex-col gap-2">
                    <h4 className="text-primary font-semibold text-lg">
                      {i.name}
                    </h4>{" "}
                    <p className="text-lg text-secondary">{i.description}</p>
                  </li>
                ))}
              </ol>
            </ol>
          ))}
        {data?.Project_Overview[2].goal && (<div>
              <h2 className="text-2xl font-bold  text-primary py-4">Goal</h2>
              <p>{data?.Project_Overview[2].goal}</p>
            </div>)}
            {data?.Project_Overview[3].text[0]?.children && (<div>
              <h2 className="text-2xl font-bold  text-primary py-4">Conclusion</h2>
              <p>{data?.Project_Overview[3].text[0].children[0].text}</p>
            </div>)}
      </div>
    </div>
  );
};

export default page;
{
}
