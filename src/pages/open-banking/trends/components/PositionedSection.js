import React, { useContext } from "react"
import FormLp from "./FormLp"
import { navigate } from "gatsby"
import UserContext from "../../../../context/UserContext"

import CallToActionLp from "./CallToActionLp"
import ActionableInfoLp from "./ActionableInfoLp"

const PositionedSection = () => {
  const [user, setUser] = useContext(UserContext)
  const handleIsLoggedIn = () => {
    user.isLoggedIn ? navigate("/app/dashboard") : navigate("/login")
  }

  return (
    <>
      <section className="positionedSection bg-primary relative w-auto pb-40">
        <CallToActionLp
          handleIsLoggedIn={handleIsLoggedIn}
          sectionClassName="mb-36 text-white text-center py-4 mx-auto py-6 self-center"
          title="Subscribe to the Platformable"
          secondTitle="Open Banking and Open Finance Quarterly Trends Report"
          paragraphOne="And get key insights into the open banking and open finance ecosystem"
          paragraphClassName="text-center"
          label="Subscribe now"
          btnClassName="uppercase bg-secondary font-bold my-5 mx-0 py-2 px-10 rounded-full hover:bg-pink hover:text-primary cursor-pointer h-34"
        />
      </section>
      <ActionableInfoLp />
    </>
  )
}

export default PositionedSection
