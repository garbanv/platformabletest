import React from 'react'
// import {RiLoader4Fill} from 'react-icons/Ri'
import LoaderImg from '../images/loader-red-orange.svg'
export const Loader = ({text}) => {
    return (
        <div className="flex space-between loader text-sm btn-login">
            {/* <RiLoader4Fill className="icon-spin mt-0.5 mr-1 "/> */}
            <img src={LoaderImg} className="mr-2" alt="Platformable"/>
            {/* Loading ... */}
            {` ${text}`}
        </div>
    )
}


export default Loader;