import React,{useEffect,useState} from "react";
import Layout from "../../../components/layout";
import { StaticImage } from "gatsby-plugin-image"
import Trends2Cols from "../../../components/Trends2Cols";
import Trends3ColsComponent from "../../../components/Trends3ColsComponent";
import Trends2colsrwider from "../../../components/Trends2ColsRwider";
import SEO from "../../../components/seo";

const TrendsPage = ({location,href }) => {

  const [data,setData]=useState([])

  const OsTrendsReportId=location.pathname

  let result = OsTrendsReportId.replace("/open-sustainability/trends/", "/");


const getTypeOfComponent = (section,index)=> {

  if(section.__component==="trends-reports.2columns"){
    return <Trends2Cols section={section} index={index}/>
  }

  if(section.__component==="trends-reports.3-columns"){
    return <Trends3ColsComponent section={section} index={index}/>
  }

  if(section.__component==="trends-reports.2-columns-right-side-bigger"){
    return <Trends2colsrwider section={section} index={index}/>
  }

  

}


  const getTrendsReport = ()=>{
    fetch(`https://websiteserver-ds7cf.ondigitalocean.app/os-trends${result}`)
  //fetch(`http://localhost:1337/os-trends${result}`)
  .then(res =>  res.json())
  .then(response =>  setData(response))
}

    useEffect(()=>{
      getTrendsReport()
    },[])



    console.log("data",data)
  return (
    <Layout>
      <SEO title={data.title} img={data?.feature_image?.url}/>
      <section
        className=" md:my-5 my-5 sm:mx-auto md:px-0 px-5 md:py-5 py-2 bg-green-50 md:h-screen" /* style={{backgroundColor:"#0099bb"}} */
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 px-0 md:px-3 lg:px-0 xl:px-3 items-center  h-100">
            <div className="left flex items-center">
              <div>
                <h3 className="font-black mb-5 md:text-5xl text-3xl md:text-left text-center">{data.title}</h3>
                <p>{data.excerpt}</p>
              </div>
            </div>
            <div className="right flex justify-end">
              <StaticImage
                src="../../../static/os/main_hero_img.png"
                alt="platformable"
                width={800}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="trends-content">
        <div className="">
            {data?.Sections?.map((section,index)=>{
              return getTypeOfComponent(section,index)
            })}
        </div>
      </section>
    </Layout>
  )
};



export default TrendsPage;
