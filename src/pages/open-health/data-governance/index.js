import React,{useState} from "react"
import Layout from "../../../components/layout"
import Form from "../../../components/shared-components/Form"
import DataGovernanceHeroImg from "../../../assets/oh-data-governance/heroImg.png"
import EthicallyImg from "../../../assets/oh-data-governance/ethically.png"
import StoredImg from "../../../assets/oh-data-governance/stored.png"
import ComparableImg from "../../../assets/oh-data-governance/comparable.png"
import AnAssetImg from "../../../assets/oh-data-governance/anAsset.png"
import UsedImg from "../../../assets/oh-data-governance/used.png"
import ReusedImg from "../../../assets/oh-data-governance/reused.png"
import PolicyImg from "../../../assets/oh-data-governance/policy.png"
import DatasetImg from "../../../assets/oh-data-governance/dataset.png"
import DataDictionaryImg from "../../../assets/oh-data-governance/dataDictionary.png"
import JobImg from "../../../assets/oh-data-governance/job.png"
import KpiImg from "../../../assets/oh-data-governance/kpi.png"
import AutomatedImg from "../../../assets/oh-data-governance/automated.png"
// import blackHealthImg from "../../../assets/lp-data_stewardship/black_health.svg"
import SEO from "../../../components/seo"
import Breadcrumbs from "../../../components/breadcrumbs"
const datas = {
  dataGovernance: {
    data: [
      {
        title: "Ethically collected",
        img: EthicallyImg,
      },
      {
        title: "Stored securely",
        img: StoredImg,
      },
      {
        title: "Comparable and high quality",
        img: ComparableImg,
      },
    ],
  },
  stewardship: {
    data: [
      {
        title: "An asset not a burden",
        img: AnAssetImg,
      },
      {
        title: "Used strategically",
        img: UsedImg,
      },
      {
        title: "Reused responsibly",
        img: ReusedImg,
      },
    ],
  },
}

const tools = [
  {
    title: "Policy Templates",
    img: PolicyImg,
  },
  {
    title: "Dataset Catalogue",
    img: DatasetImg,
  },
  {
    title: "Data Dictionary",
    img: DataDictionaryImg,
  },
  {
    title: "Job description alignment",
    img: JobImg,
  },
  {
    title: "KPI definitions",
    img: KpiImg,
  },
  {
    title: "Automated cleaning and reporting",
    img: AutomatedImg,
  },
]

export default function Index({ location }) {


  const [form,setForm]=useState("");
  const [formSuccess,setFormSuccess]=useState(false)

  const handleSubscription = async (e) =>{
    const email = form
    const mailerlite = {
      email,
    }
    const response = await window.fetch(`/api/ohDGSubscriptions`, {
      method: `POST`,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mailerlite),
    })
  const res = response.statusText

  if(res){
  setFormSuccess(!formSuccess)
  }
  
}


  return (
    <Layout>
      {/* <div className="container sm:mx-auto md:px-0 px-5">
        <div className="flex md:flex-nowrap flex-wrap mt-10 mb-5 items-center px-0 md:px-3 lg:px-0 xl:px-3"></div> */}
      <Breadcrumbs location={location} />
      <SEO title="Data Governance" />
      <section className="hero-data-governance py-10">
        <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 items-center sm:mx-auto md:px-0 px-5">
          <div className="px-0 md:px-3 lg:px-0 xl:px-3">
            <div className="text-center lg:text-left hero-data-governance-left">
              <h3 className="font-black ">Data Governance</h3>
              Create a data governance and data stewardship system for your
              agency
            </div>
          </div>
          <div className="px-0 md:px-3 lg:px-0 xl:px-3">
            <div className="hero-data-governance-right flex justify-center lg:justify-end">
              <img src={DataGovernanceHeroImg}></img>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto flex justify-center">
          <div className="w-3/4 ">
            <h5 className="text-center  my-10 ">
              Make greater use of data across all of your operations<br></br>
              from fundraising to strategic planning to impact evaluation.
            </h5>
          </div>
        </div>
      </section>

      <section class="type-of-datas my-10">
        <div className="type-of-datas-container container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:mx-auto md:px-0 px-5">
          <div className="px-0 md:px-3 lg:px-0 xl:px-3">
            <div className="type-of-data-container-left">
              <div className="h-24">
                <h3 className="font-black text-2xl text-center">
                  Data Governance
                </h3>
                <p className="text-center">
                  Establish policies that ensure data collected is:
                </p>
              </div>
              {datas.dataGovernance.data.map((pill, index) => {
                return (
                  <div
                    key={index}
                    className="type-of-data-pill my-10  bg-blue-50 rounded-full p-5 flex items-center"
                  >
                    <div className="type-of-data-pill-left  w-1/4">
                      <img src={pill.img} className="" />
                    </div>
                    <div className="type-of-data-pill-left flex justify-start bg w-3/4">
                      <p className="text-xl">{pill.title}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="px-0 md:px-3 lg:px-0 xl:px-3">
            <div className="type-of-data-container-right">
              <div className="h-24">
                <h3 className="font-black text-2xl text-center">
                  Data stewardship
                </h3>
                <p className="text-center">
                  Maintain and manage data so that it is:
                </p>
              </div>
              {datas.stewardship.data.map((pill, index) => {
                return (
                  <div className="type-of-data-pill my-10  bg-blue-50 rounded-full p-5 flex items-center">
                    <div className="type-of-data-pill-left  w-1/4">
                      <img src={pill.img} className="" />
                    </div>
                    <div className="type-of-data-pill-left flex justify-start bg w-3/4">
                      <p className="text-xl">{pill.title}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="our-toolkit my-10">
        <div className="container mx-auto sm:mx-auto md:px-0 px-5">
          <div className="px-0 md:px-3 lg:px-0 xl:px-3">
            <h3 className="font-black text-center my-5">Our toolkit</h3>
            <div className="our-toolkit-container grid grid-cols-1 md:grid-cols-3 gap-4">
              {tools.map((tool, index) => {
                return (
                  <div key={index} className="bg-blue-50 rounded-xl p-10">
                    <div className="flex justify-center">
                      <img src={tool.img} className="img-thumbnail" />
                    </div>
                    <h4 className="font-black text-center">{tool.title}</h4>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="blueBkgTest bg-testimBkgBlue my-0 mx-auto py-6">
      <div className="text-center p-8">
        <h4 className="text-white font-black">
          What our clients say about the program:
        </h4>
        <blockquote className="italic p-2 w-3/5 mx-auto">
          <p>
            Platformable has helped us improve our data management processes
            across the organization. Platformable’s processes have reduced the
            time we spend managing and preparing data and has increased our
            opportunities to use data strategically.
         
          </p>
          <br />
          <p>
            All staff and programs have learnt how to use data more effectively
            and responsibly with this training and Platformable’s supports.
          </p>
        </blockquote>
        <p className="uppercase">
          <span className="font-bold">Author Name</span>, At Black Health
        </p>
      </div>
    
        <div className="flex justify-center">
        <img src={blackHealthImg} alt="black health co" className="mx-auto text-center py-6"/>
        </div>
        
      
    </section> */}
  
    <section>
        <div className="container mx-auto">
              <div>
              <h2 className="text-2xl font-black text-center">Sign up now for pricing and calendar availability</h2>
          <div className="m-4 flex justify-center">
          <input type="text" className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-main-color border-gray-200 bg-white subscribe-input" placeholder="Your email address" onChange={(e)=>setForm(e.target.value)}/>
          <button className="px-8 rounded-r-lg bg-sunglow  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r" onClick={handleSubscription}>Subscribe</button>
        </div>
      </div>
      {formSuccess && <p className="text-center ">Thank you for your subscription</p>}
        </div>
      </section>

    </Layout>
  )
}
