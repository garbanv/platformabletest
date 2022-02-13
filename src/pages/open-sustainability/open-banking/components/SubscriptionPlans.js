import React, { useContext } from "react"
import ButtonLp from "./ButtonLp"
import knowledgeImg from "../assets/subscription_knowledge.svg"
import strategyImg from "../assets/subscription_strategy.svg"
import directionImg from "../assets/subscription_direction.svg"
import leadershipImg from "../assets/subscription_leadership.svg"
import UserContext from "../../../../context/UserContext"
import { navigate } from "gatsby"

const SubscriptionPlans = props => {
  const [user, setUser] = useContext(UserContext)

  const handleIsLoggedIn = () => {
    user.isLoggedIn ? navigate("/app/dashboard") : navigate("/login")
  }
  return (
    <section className="subscription-section text-grayed my-8 container mx-auto px-2">
      <h2 className="text-primary text-center py-5 font-black">
        Subscription Plans
      </h2>
      <div className="plans-group flex flex-wrap flex-col md:flex-row justify-evenly text-center text-sm my-5 gap-5">
        <div className="plans-item lg:w-1/5 md:w-2/5 px-3 bg-card rounded-3xl sm:mx-1 my-4 relative">
          <img
            src={knowledgeImg}
            alt=""
            className="w-14 self-center mx-auto absolute -top-7 inset-x-0"
          />
          <div className="border-bottom h-32 lg:h-48 xl:h-40">
            <h3 className="text-primary mt-8 font-black">Knowledge Pack</h3>
            <p className="mt-2 text-xs mx-7">
              Understand key trends in open banking and open finance
            </p>
          </div>
          <ul className="py-5 mb-40 text-center md:text-left">
            <li className="mb-2 text-xs">
              Quarterly Trends Data Report: Access for a Single User
            </li>
            <li className="mb-2 text-xs">
              Monthly Deep Dive reports: Business models & use cases, Technical
              decisions
            </li>

            <li className="mb-2 text-xs">
              Vote on a “Question of the Quarter” and receive answers from our
              analysts
            </li>
          </ul>
          <div className="plans-price flex flex-col absolute bottom-2 left-2/4 transform -translate-x-2/4">
            <p className="font-bold">
              <span className="text-black text-base opacity-50">€ </span>
              <strong className="text-primary text-3xl leading-tight">
                19
              </strong>
              <span className="text-black text-base opacity-50"> /month </span>
            </p>
            <ButtonLp
              handleIsLoggedIn={handleIsLoggedIn}
              label="Subscribe"
              className="btn--purple font-bold text-primary my-5 mx-0 py-2 px-10 rounded-full hover:bg-primary hover:text-white  cursor-pointer "
            />
          </div>
        </div>

        <div className="plans-item lg:w-1/5 md:w-2/5 px-3 bg-card rounded-3xl sm:mx-1 my-4 relative">
          <img
            src={strategyImg}
            alt=""
            className="w-14 self-center mx-auto absolute -top-7 inset-x-0"
          />
          <div className="border-bottom h-32 lg:h-48 xl:h-40">
            <h3 className="text-primary mt-8 font-black">Strategy Pack</h3>
            <p className="mt-2 text-xs mx-7">
              Work with your team to share insights and plan ecosystem strategy
            </p>
          </div>
          <ul className="py-5 mb-40">
            <li className="mb-2 text-xs">
              Quarterly Trends Report Access for your internal teams
            </li>
            <li className="mb-2 text-xs">
              Monthly Deep Dive reports: Business models & use cases, Technical
              decisions
            </li>
            <li className="mb-2 text-xs">
              Entry to quarterly webinar hosted by Platformable experts
            </li>
            <li className="mb-2 text-xs">
              Vote on a “Question of the Quarter” and receive answers from our
              analysts
            </li>
            <li className="mb-2 text-xs">
              Raffle to win 5 hours analyst team time to one subscriber each
              quarter
            </li>
          </ul>
          <div className="plans-price flex flex-col absolute bottom-2 left-2/4 transform -translate-x-2/4">
            <p className="font-bold">
              <span className="text-black text-base opacity-50">€ </span>
              <strong className="text-primary text-3xl leading-tight">
                49
              </strong>
              <span className="text-black text-base opacity-50"> /month </span>
            </p>
            <ButtonLp
              handleIsLoggedIn={handleIsLoggedIn}
              label="Subscribe"
              className="btn--pink font-bold text-primary my-5 mx-0 py-2 px-10 rounded-full hover:bg-primary hover:text-white cursor-pointer "
            />
          </div>
        </div>

        <div className="plans-item lg:w-1/5 md:w-2/5 px-3 bg-card rounded-3xl sm:mx-1 my-4 relative">
          <img
            src={directionImg}
            alt=""
            className="w-14 self-center mx-auto absolute -top-7 inset-x-0"
          />
          <div className="border-bottom h-32 lg:h-48 xl:h-40">
            <h3 className="text-primary mt-8 font-black">Direction Pack</h3>
            <p className="mt-2 text-xs mx-7">
              Steer your business towards embracing a platform mindset with data
              and evidence
            </p>
          </div>
          <ul className="py-5 mb-40">
            <li className="mb-2 text-xs">
              Quarterly Trends Report: Access for your internal teams
            </li>
            <li className="mb-2 text-xs">
              Monthly Deep Dive reports: Business models & use cases, Technical
              decisions
            </li>
            <li className="mb-2 text-xs">
              Bespoke Analysis with Platformable analyst team for 5
              hours/monthly
            </li>

            <li className="mb-2 text-xs">
              Access to the datasets created and maintained by Platformable and
              one-off training to support your own analysis and filtering of
              data
            </li>
            <li className="mb-2 text-xs">
              Influence on the direction of our data roadmap and opportunity to
              help prioritise new dataset collections
            </li>
            <li className="mb-2 text-xs">
              Your logo advertised in the Quarterly Trends Report
            </li>
            <li className="mb-2 text-xs">
              Vote on a “Question of the Quarter” and receive answers from our
              analysts
            </li>
            <li className="mb-2 text-xs">
              Monthly webinar hosted by Platformable analyst team for your
              internal team
            </li>
          </ul>
          <div className="plans-price flex flex-col absolute bottom-2 left-2/4 transform -translate-x-2/4">
            <p className="font-bold">
              <span className="text-black text-base opacity-50">€ </span>
              <strong className="text-primary text-3xl leading-tight">
                750
              </strong>
              <span className="text-black text-base opacity-50"> /month </span>
            </p>
            <ButtonLp
              handleIsLoggedIn={handleIsLoggedIn}
              label="Subscribe"
              className="btn--silver font-bold text-primary my-5 mx-0 py-2 px-10 rounded-full hover:bg-primary hover:text-white cursor-pointer "
            />
          </div>
        </div>

        <div className="plans-item lg:w-1/5 md:w-2/5 px-3 bg-card rounded-3xl sm:mx-1 my-4 relative">
          <img
            src={leadershipImg}
            alt=""
            className="w-14 self-center mx-auto absolute -top-7 inset-x-0"
          />
          <div className="border-bottom h-32 lg:h-48 xl:h-40">
            <h3 className="text-primary mt-8 font-black">Leadership Pack</h3>
            <p className="mt-2 text-xs mx-7 ">
              Become an ecosystem leader by leveraging data and insights to
              drive business strategy and action
            </p>
          </div>
          <ul className="py-5 mb-40">
            <li className="mb-2 text-xs">
              Quarterly Trends Report: Access for your internal teams and
              preferred customers
            </li>
            <li className="mb-2 text-xs">
              Monthly Deep Dive reports: Business models & use cases, Technical
              decisions
            </li>
            <li className="mb-2 text-xs">
              Bespoke Analysis with Platformable analyst team for 10
              hours/monthly
            </li>
            <li className="mb-2 text-xs">
              Access to the datasets created and maintained by Platformable and
              ongoing training to support your own analysis and filtering of
              data
            </li>
            <li className="mb-2 text-xs">
              Influence on the direction of our data roadmap and opportunity to
              help prioritise new dataset collections
            </li>
            <li className="mb-2 text-xs">
              White label edition of reports to use as a lead generation tool
              for your company
            </li>
            <li className="mb-2 text-xs">
              Monthly private webinar hosted by Platformable analyst team for
              your internal team
            </li>
            <li className="mb-2 text-xs">
              Quarterly webinar hosted for your community as a lead generation
              tool
            </li>
          </ul>
          <div className="plans-price flex flex-col absolute bottom-2 left-2/4 transform -translate-x-2/4">
            <p className="font-bold">
              <span className="text-black text-base opacity-50">€ </span>
              <strong className="text-primary text-3xl leading-tight">
                2200
              </strong>
              <span className="text-black text-base opacity-50"> /month </span>
            </p>
            <ButtonLp
              handleIsLoggedIn={handleIsLoggedIn}
              label="Subscribe"
              className="btn--gold font-bold text-primary my-5 mx-0 py-2 px-10 rounded-full hover:bg-primary hover:text-white cursor-pointer "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscriptionPlans
