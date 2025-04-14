import qs from "qs";
import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/strapi-url";

const BASE_URL = getStrapiURL();
// const BLOG_PAGE_SIZE = 3;
const homePageQuery = qs.stringify({
  populate: {
    slider: {
      on: {
        "elements.slice": {
          populate: {
            Image: {
              fields: ["url"],
            },
            Link: true,
          },
        },
      },
    },
    Hero:{
      populate:"*"
    }
  },
});

const projectsQuery=qs.stringify({
  populate:"*"
})



export async function getHomePage() {
  const path = "/api/home";
  const url = new URL(path, BASE_URL);
  url.search = homePageQuery;
  return await fetchAPI(url.href, { method: "GET" });
}

export async function getProjects(){
  const path= "/api/projects"
  const url = new URL(path,BASE_URL)
  url.search=projectsQuery
  return await fetchAPI(url.href,{method:"GET"})
}
const projectBySlug=(slug)=>
  qs.stringify({
    filters:{
      slug:{
        $eq:slug,
      },
    },
    populate: {
      slider: {
        on: {
          "elements.slice": {
            populate: {
              Image: {
                fields: ["url"],
              },
              Link: true,
            },
          },
        },
      },
      image:{
        fields:["url"]
      },
      info:{
        populate:"*"
      },
      Project_Overview:{
      on:{
       "elements.project-overview":{
          populate:"*"
       },
       "elements.key-features":{
          "populate":{
            feature:{
              populate:"*"
            }
          }
       },
       "elements.project-goals":{
        populate:"*"
       },
       "elements.conclusion":{
        populate:"*"
       }
      }
    }
    },
  })
  
  export async function getProjectBySlug(slug) {
    const path = "/api/projects";
    const url = new URL(path, BASE_URL);
    url.search = projectBySlug(slug);
    return await fetchAPI(url.href, { method: "GET" , next: { revalidate: 60 } });
  }


  const pageBySlugQuery = (slug)=>
    qs.stringify({
    filters:{
      slug:{
        $eq:slug,
      },
    },
      populate:"*"
  })

export async function getPageBySlug(slug) {
  const path = "/api/pages";
  const url = new URL(path, BASE_URL);
  url.search = pageBySlugQuery(slug);
  return await fetchAPI(url.href, { method: "GET" });
}