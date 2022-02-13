import React, {useState} from 'react';


const SimpleSubscriptionForm = ({formSuccess,handleSubscription}) => {

    const [form,setForm]=useState("");
    return (
        <section>
        <div className="container mx-auto">
              <div>
          <div className="m-4 flex justify-center">
          <input type="text" className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-main-color border-gray-200 bg-white subscribe-input" placeholder="Your email address" onChange={(e)=>setForm(e.target.value)}/>
          <button className="px-8 rounded-r-lg bg-sunglow  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r" onClick={handleSubscription}>Subscribe</button>
        </div>
      </div>
      {formSuccess && <p className="text-center ">Thank you for your subscription</p>}
        </div>
      </section>
    );
}

export default SimpleSubscriptionForm;
