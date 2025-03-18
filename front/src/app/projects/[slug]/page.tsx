import { StrapiImage } from "@/components/StrapiImage";
import Slider from "@/components/Slider";
import { getProjectBySlug } from "@/data/loaders";

async function loader() {
  const data = await getProjectBySlug();
  console.log(data);
  if (!data) notFound();
  return data.data;
}

const page = async ({ params }) => {
  const slug = (await params).slug;
  const res = await loader(slug);
  const data = res[0];
  console.log(data);
  return (
    <div className="flex flex-col ">
      
      <Slider slides={data.slider} />
      <div className="flex flex-col px-6 md:px-16 xl:px-24">
        <h1 className="font-bold text-2xl my-6 text-center  text-primary  bg-slate-200 p-6">
        <div className="w-full relative h-[400px]  mb-3">
        <StrapiImage
          src={data?.image?.url}
          fill
          alt={`${data.title} image`}
          className="object-cover"
        />
      </div>
          {data.title}
        </h1>
        {Object.entries(data.info[0])
          .filter(([key]) => key !== "id")
          .map(([key, val], i) => (
            <div key={i._id} className="flex gap-2 py-2">
              <h4 className="font-bold text-primary">{key}:</h4>
              <p className="text-secondary">{val}</p>
            </div>
          ))}
        <h2 className=" text-primary font-bold text-2xl mt-6 py-4  ">
          Introduction
        </h2>

        <p className=" text-secondary">
          {data.Introduction[0].children[0].text}
        </p>
        {data.Project_Overview[0] && data.info[0] && (
          <h2 className="text-2xl font-bold  text-primary py-4">
            Project Details
          </h2>
        )}
        {data.Project_Overview[0] &&
          Object.entries(data.Project_Overview[0])
            .filter(([key]) => key !== "id" && key !== "__component") // Filters out the `id` key
            .map(([key, val], i) => (
              <div key={i._id} className=" py-2 flex gap-2">
                <h4 className="font-bold text-primary">{key}:</h4>
                <p className="text-secondary">{val}</p>
              </div>
            ))}
            {data.Project_Overview[1].feature && (<h2 className="text-2xl font-bold  text-primary py-4">Key Features</h2>)}
        {data.Project_Overview[1].feature && data.Project_Overview[1].feature
            .map(( i , index) => (
              <ol key={i._id} className=" flex flex-col ">
                <h4 className="font-bold text-primary text-xl py-4">{index+1}-{i.feature_title}</h4>
                <ol className="px-8 py-2 md:py-6 lg:py-8 flex flex-col gap-4">
                 { i.name.map(i => (
                  <li key={i._id} className="flex flex-wrap items-center"><h4 className="text-primary font-semibold text-lg">{i.name}</h4>: <p className="text-lg text-secondary">{i.description}</p></li>
                 )) }
                </ol>
              </ol>
            ))}
             {data.Project_Overview[3].goal && (<div>
              <h2 className="text-2xl font-bold  text-primary py-4">Goal</h2>
              <p>{data.Project_Overview[3].goal}</p>
            </div>)}
            {data.Project_Overview[2].text[0].children[0] && (<div>
              <h2 className="text-2xl font-bold  text-primary py-4">conclusion</h2>
              <p>{data.Project_Overview[2].text[0].children[0].text}</p>
            </div>)}
      </div>
    </div>
  );
};

export default page;
{
  /* {Object.keys(data.info[0]).map(function(key) {
  return <div key={key}>Key: {key}, Value: {data.info[0][key]}</div>;
})} */
}
