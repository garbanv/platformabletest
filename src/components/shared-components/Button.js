import React from "react";

const Button = ({ 
  type,
  label, 
  btnClass,
}) => (
  <button className={btnClass} type={type}>
    {label} 
  </button>
)

export default Button

//{label} is the prop that helps re-use this button. In each component, the label we'll have in "" quotes the next we need to have there.  ex: label="Sign up now"
