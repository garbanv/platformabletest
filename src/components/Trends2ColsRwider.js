import React from "react"
import html2canvas from "html2canvas"
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
import { EmailIcon, LinkedinIcon, TwitterIcon } from "react-share"

const Trends2colsrwider = ({ section, index,location }) => {
  
  /* const downloadImg = url => {
    console.log("download")
    var el = document.createElement("a")
    el.setAttribute("href", url)
    el.setAttribute("download", "archivo")
    document.body.appendChild(el)
    el.click()
    el.remove()
  } */

  const handleDownloadImage = async section => {
    const item = document.getElementById(section.id)
    const canvas = await html2canvas(item, { allowTaint: true, useCORS: true })
    const data = canvas.toDataURL("image/png", 1)
    const link = document.createElement("a")
    if (typeof link.download === "string") {
      link.href = data
      link.download = "platformable.png"
      link.click()
    } else {
      window.open(data)
    }
  }

const quote="test"
const shareUrl = location
  return (
    <section
    id="test"
      key={index}
      className="border-b-2 border-purple-50 container mx-auto py-10"
    >
      <div className="flex justify-end">
      <div className="flex gap-1 mr-1 items-center" key={index}>
          <TwitterShareButton url={shareUrl} title={"Impactful green fintech will require ecosystem stakeholders to collaborate, compete, and co-create"}>
            <TwitterIcon size={28} round={true} iconFillColor={"#1b014c"} bgStyle={{fill:"#0ce6a3"}}/>
          </TwitterShareButton>
          <EmailShareButton
            url={shareUrl}
            subject={"Impactful green fintech will require ecosystem stakeholders to collaborate, compete, and co-create"}
            body={quote}
          >
            <EmailIcon size={28} round={true} iconFillColor={"#1b014c"} bgStyle={{fill:"#0ce6a3"}}/>
          </EmailShareButton>
        </div>
        <img 
        src="https://img.icons8.com/fluency-systems-filled/48/000000/download.png" 
        className="rounded-full bg-btn-trends-download p-2 cursor-pointer self-start" 
        onClick={() => handleDownloadImage(section)}
        alt="" 
        width={30} />
      </div>
      <div className="grid  gap-10  md:px-0 px-5 trends-2Cols-wider">
        <div className="trends-2cols-component-left-col bg-green-50 rounded-xl p-5">
          <div dangerouslySetInnerHTML={{ __html: section.column1 }}></div>
        </div>
        <div
          className="trends-2cols-component-right-col grid items-center "
          id={section.id}
        >
          <div dangerouslySetInnerHTML={{ __html: section.column2 }}></div>
        </div>
        
      </div>
    </section>
  )
}

export default Trends2colsrwider
