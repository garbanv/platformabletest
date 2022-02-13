import React from "react"
/*assets*/
import dataStewardshipImg from "../../../assets/lp-data_stewardship/dataStewardshipImg.png"
import dataToolsImg from "../../../assets/lp-data_stewardship/data_tools.png"
import dataStrategyImg from "../../../assets/lp-data_stewardship/data_for_strategy.png"
import dataDesignImg from "../../../assets/lp-data_stewardship/data_design_thinking.png"
import dataAdvocacyImg from "../../../assets/lp-data_stewardship/data_for_advocacy.png"
import AutomateImg from "../../../assets/lp-data_stewardship/Automate.png"

const CourseStructure = () => {
  const images = [
    {
      src:dataStewardshipImg,
      title:'Data Stewardship, Data Governance and Data Ethics',
      paragraph:'Understand the core principles and approaches to ensure you are collecting, managing and using data responsibly within your organization.'
    },
    {
      src:dataToolsImg,
      title:'Data Tools',
      paragraph:'Learn about the full range of data tools available at your disposal and how to keep up with new developments in data management'
    },
    {
      src:dataStrategyImg,
      title:'Data for strategy',
      paragraph:'Learn how to design data collection and use based off your strategic goals'
    },
    {
      src:dataDesignImg,
      title:'Data Design-thinking',
      paragraph:'Learn about how to think about who will use your data and how to apply a human-centred design approach to your data efforts'
    },  
    {
      src:dataAdvocacyImg,
      title:'Data for advocacy',
      paragraph:'Learn data visualization and storytelling techniques and share approaches in how to strengthen policy and community advocacy activities using data'
    },
    {
      src:AutomateImg,
      title:'Automate systems',
      paragraph:'Use available tools to automatically validate and clean data, integrate into processes and automate reporting'
    },
  
  ];
  
  return (
    <section className="bg-greyImg py-6 px-8 ">
      
      
      <div className="my-0  container mx-auto w-3/5">
      <h3 className="my-8 font-black">Course Structure</h3>
        {images.map((img, i) =>(
          <div key={i} className="mb-5 md:flex items-center"
            >
            <img src={img.src} alt={img.title} className="mr-5 img-thumbnail" />
            
            <div className="">
              <h3 className="font-black">{img.title}</h3>
              <p>{img.paragraph}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default CourseStructure
