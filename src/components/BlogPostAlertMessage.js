import React from 'react'
import {Link} from 'gatsby'

export default function BlogPostAlertMessage({message}) {
    return (
        <div className="text-center">
            <p className="bg-gray-100 my-5 px-10 py-5 rounded-xl">{message}</p>
            <Link to="/login" state={{previousPost:true}} className=" top-nav text-white  hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-yellow-500 text-2xl">Login</Link>
            <Link to="/sign-up" className="top-nav text-white btn-bg-russian-violet-dark  hover:text-white px-3 py-2 rounded-md text-sm font-medium text-2xl ml-5">Sign Up</Link>
        </div>
    )
}
