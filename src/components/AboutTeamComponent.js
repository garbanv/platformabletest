import React from 'react'


const AboutTeamComponent = ({img,position,name,lastname,bio,ind}) => {
    return (
        <div key={ind} class="bg-white overflow-hidden border-b-4 border-russian-violet-dark bg-gray-50 w-1/1">
        {/* <img
          src="https://platformable.com/content/images/2020/03/headshot-profile.png"
          alt="People"
          class="w-full object-contain h-32 sm:h-48 md:h-64 my-0"
        /> */}
        <img 
        alt="Platformable.com"
        key={ind}
        src={img} 
        
        className="w-full object-contain h-32 sm:h-48 md:h-64 my-0"/>

        <div class="p-4 md:p-6 text-center">
          <p class="text-white text-center text-xs mb-1 leading-none bg-russian-violet-dark inline-block px-2 py-1 rounded text-xs">
            {position}
          </p>
          <h3 class="font-semibold text-center mb-2 text-xl leading-tight sm:leading-normal">
            {`${name} ${lastname}`}
          </h3>
          <div class="text-sm">
            <p class="leading-none text-sm">{bio}</p>
          </div>
        </div>
      </div>
    )
}

export default AboutTeamComponent