import React from 'react'

export default function LoginSignErrorMessage({message}) {
    return (
        <div className="text-center">
            <p className="bg-red-200 my-5 px-10 py-5 rounded-x text-sm">{message}</p>
        </div>
    )
}
