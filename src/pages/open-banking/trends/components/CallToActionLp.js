import React,{useState} from "react"
import ButtonLp from "./ButtonLp"

const CallToActionLp = ({
  sectionClassName,
  paragraphClassName,
  btnClassName,
  title,
  secondTitle,
  paragraphOne,
  paragraphTwo,
  label,
  doNotDisplay,
  handleIsLoggedIn
}) => {

  const [form,setForm]=useState("");
  const [formSuccess,setFormSuccess]=useState(false)

  const handleSubscription = async (e) =>{
    const email = form
    const mailerlite = {
      email,
    }
    const response = await window.fetch(`/api/obSubscriptions`, {
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
  return (<>
    <section id="cta" className={sectionClassName}>
      <h3 className="my-3 font-black">{title}</h3>
      <h3 className="my-3 font-black">{secondTitle}</h3>
      <p className={paragraphClassName}>{paragraphOne}<br/>{paragraphTwo}</p>
     {/*  <button onClick={handleIsLoggedIn} label={label} doNotDisplay={doNotDisplay} className={btnClassName}>{label}</button> */}
     <section>
<div className="container mx-auto">
      <div>
  <div className="m-4 flex justify-center">
  <input type="text" className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-main-color border-gray-200 bg-white subscribe-input" placeholder="Your email address" onChange={(e)=>setForm(e.target.value)}/>
  <button className="px-8 rounded-r-lg bg-sunglow  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r" onClick={handleSubscription}>Subscribe</button>
</div>
</div>
{formSuccess && <p className="text-center text-yellow-300 pb-5">Thank you for your subscription</p>}
</div>
</section>
   
    </section>


</>
  )
}

export default CallToActionLp

/*we use props so we can change title, paragraph accordingly in any component where the CallToAction component will be used
--> className={flexDisplay}, 
-->className={doNotDisplay}, 
are special classes, that when used, will have the classes edited in the index.css*/
