import React from "react"
import {Link} from 'gatsby'
/*shared-components*/
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import GridDisplay from "../../../components/shared-components/GridDisplay"
// import Link from '../../../components/shared-components/Link';
/*assets*/
import heroImg from "../../../assets/lp_latest_trend_report/see_latest_trend_report_title_graphic.svg"
import q1RelImg from "../../../assets/lp_latest_trend_report/q1_released.svg"
import q2Img from "../../../assets/lp_latest_trend_report/q2_to-be_released.svg"
import q3Img from "../../../assets/lp_latest_trend_report/q3_to-be_released.svg"
import q4Img from "../../../assets/lp_latest_trend_report/q4_to-be_released.svg"
import q2RelImg from "../../../assets/lp_latest_trend_report/q2.svg"
import q3RelImg from "../../../assets/lp_latest_trend_report/q3.svg"
import q4RelImg from "../../../assets/lp_latest_trend_report/q4.svg"
import Breadcrumbs from '../../../components/breadcrumbs'


const LPLatestTrend = ({location}) => (
  <Layout>
    <Breadcrumbs location={location}/>
    <SEO title="Latest Trends" />

    <GridDisplay
      gridDisplayClass="flex sm:flex-row flex-col my-16 mx-auto py-0 sm:px-10 px-2 justify-center items-center"
      gridContentClass="sm:py-0 py-5 lg:w-2/5"
      title="Trends Report"
      paragraphOne="Get up to date with the latest data on Open Banking
      and Open Finance with our reports."
      doNotDisplayAnchor="hidden"
      url={"https://platformable.com/q4-2020-trends-report/"}
      type="button"
      label={"Subscribe now"}
      btnClass="bg-orange text-white uppercase my-5 mx-0 py-2 px-10 rounded-full hover:bg-secondary hover:text-primary cursor-pointer"
      imgContentClass="lg:w-2/5"
      imgClass="object-cointain w-96 h-94"
      backImgSrc={heroImg}
      alt="Bank color light purple and graphs"
    ></GridDisplay>

    <section className="mt-6 mx-auto py-8 bg-lightPink">
      <h1 className="text-center my-5 font-black">2021</h1>
      <div className="my-0 md:mx-16 mx-2 py-0 px-3 md:flex justify-evenly items-center">
        <div className="text-center">
          {/* <Link to="/trends-reports/2021/q1"> */}
          <Link>
            <img src={q1RelImg} alt="quarter image" className="mx-auto text-center" />
            <p className="text-xs font-normal pt-1">Released: April</p>
          </Link>
        </div>
        <div className="text-center">
          <Link url="https://platformablefrontend.netlify.app/trends-report/">
            <img src={q2Img} alt="quarter image" className="mx-auto text-center" />
            <p className="text-xs font-normal pt-1">Expected release: June</p>
          </Link>
        </div>
        <div className="text-center">
          <Link url="https://platformablefrontend.netlify.app/trends-report/">
            <img src={q3Img} alt="quarter image" className="mx-auto text-center" />
            <p className="text-xs font-normal pt-1">Expected release: October</p>
          </Link>
        </div>
        <div className="text-center">
          <Link url="https://platformablefrontend.netlify.app/trends-report/">
            <img src={q4Img} alt="quarter image" className="mx-auto text-center" />
            <p className="text-xs font-normal pt-1">Expected release: December</p>
          </Link>
        </div>
      </div>
    </section>

    <section className="mx-auto py-8 bg-blueish">
      <h1 className="text-center my-5 font-black">2020</h1>
      <div className="my-0 md:mx-16 mx-2 py-0 px-3 md:flex justify-evenly items-center">
        <div className="text-center">         
          <Link to={'/q1-2020-open-banking-quarterly-trends-report'}>
            <img src={q1RelImg} alt="quarter image" className="mx-auto text-center" />
            <p className="text-xs font-normal pt-1">April</p>
          </Link>
        </div>
        <div className="text-center">
          <Link to={'/q2-2020-open-banking-quarterly-trends'}>
            <img src={q2RelImg} alt="quarter image" className="mx-auto text-center" />
            <p className="text-xs font-normal pt-1">June</p>
          </Link>
        </div>
        <div className="text-center">
          <Link to={'/q3-2020-open-banking-quarterly-trends'}>
            <img src={q3RelImg} alt="quarter image" className="mx-auto text-center" />
            <p className="text-xs font-normal pt-1">October</p>
          </Link>
        </div>
        <div className="text-center">
          <Link to="/trends-reports/2020/q4">
            <img src={q4RelImg} alt="quarter image" className="mx-auto text-center" />
            <p className="text-xs font-normal pt-1">December</p>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default LPLatestTrend
