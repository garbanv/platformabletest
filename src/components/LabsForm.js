import React from 'react';

const LabsForm = (props) => {
    return (
        <div>
                {/* LABS FORM */}
                <div className="labs-form-inputs grid md:grid-cols-3 grid-cols-1 gap-4">
                    
                    <input type="text" name="name" id="lab-form-email" placeholder="name" className="px-10 rounded-xl" 
                    onChange={(e)=> {
                        setFormMissingValues(false)
                        setForm({...form,name:e.target.value})
                    }} 
                    value={form.name}/>
                    <input type="email" name="email" id="lab-form-email" placeholder="email" className="px-10 rounded-xl" 
                    onChange={(e)=> {
                        setFormMissingValues(false)
                        setForm({...form,email:e.target.value})}} 
                    value={form.email}/>
                    <button className="btn bg-pink-500 rounded-xl p-3 hover:russian-violet-light" onClick={handleLabForm}>   {loading ? <Loader text="Loading" /> : "Find out more"}</button>
 
                </div>
        </div>
    );
}

export default LabsForm;
