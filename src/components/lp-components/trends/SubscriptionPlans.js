import React from "react"
import Link from "./../../shared-components/Link"
import Button from "./../../shared-components/Button"

/*assets*/
import knowledgeImg from "../../../assets/lp-trends/subscription_knowledge.svg"
import strategyImg from "../../../assets/lp-trends/subscription_strategy.svg"
import directionImg from "../../../assets/lp-trends/subscription_direction.svg"
import leadershipImg from "../../../assets/lp-trends/subscription_leadership.svg"

const SubscriptionPlans = props => {
  return (
    <section className="subscription-section text-grayed my-8 mx-auto px-2 border-t border-lightGrey">
      <h2 className="text-primary text-center py-5 mt-5">Subscription Plans</h2>
      <div className="plans-group flex flex-wrap flex-col md:flex-row justify-evenly text-center text-sm my-5 mx-auto ">
        <div className="plans-item lg:w-1/5 md:w-4/12 w-5/6 px-3 bg-card rounded-3xl sm:mx-1 my-8 relative mx-auto self-center">
          <img
            src={knowledgeImg}
            alt=""
            className="w-14 self-center mx-auto absolute -top-7 inset-x-0"
          />
          <div className="h-40 border-bottom">
            <h3 className="text-primary mt-8">Knowledge Pack</h3>
            <p className="my-2 text-sm mx-7">
              Understand key trends in open banking and open finance
            </p>
          </div>
          <ul className="py-5 h-96">
            <li className="mb-2">
              Quarterly Trends Report Access for a Single User
            </li>
            {/* <li className="mb-2">
              Analytics Dashboard Access for a Single User
            </li> */}
            <li className="mb-2">
              Vote on a “Question of the Quarter” and receive answers from our
              analysts
            </li>
          </ul>
          <div className="plans-price mx-3 h-48">
            <p className="font-bold">
              <span className="text-gray-400 text-base opacity-25">$ </span>
              <strong className="text-primary text-3xl leading-tight">
                19
              </strong>
              <span className="text-gray-400 text-base opacity-25">
                {" "}
                /month{" "}
              </span>
            </p>
            <Link url={"https://tailwindcss.com/docs/justify-content"}>
              <Button
                type="submit"
                label="Subscribe"
                btnClass="btn--purple font-bold text-primary my-5 mx-0 py-2 px-10 rounded-full hover:bg-primary hover:text-white cursor-pointer "
              />
            </Link>
          </div>
        </div>

        <div className="plans-item lg:w-1/5 md:w-4/12 w-5/6 px-3 bg-card rounded-3xl sm:mx-1 my-8 relative mx-auto self-center">
          <img
            src={strategyImg}
            alt=""
            className="w-14 self-center mx-auto absolute -top-7 inset-x-0"
          />
          <div className="h-40 border-bottom">
            <h3 className="text-primary mt-8">Strategy Pack</h3>
            <p className="my-2 text-sm mx-7">
              Work with your team to share insights and plan ecosystem strategy
            </p>
          </div>
          <ul className="py-5 h-96">
            <li className="mb-2">
              Quarterly Trends Report Access for your internal teams
            </li>
            {/* <li className="mb-2">
              Analytics Dashboard Access for your internal teams
            </li> */}
            <li className="mb-2">
              Entry to quarterly webinar hosted by Platformable experts
            </li>
            {/* <li className="mb-2">
              Vote on a “Question of the Quarter” and receive answers from our
              analysts
            </li> */}
          </ul>
          <div className="plans-price mx-3 h-48">
            <p className="font-bold">
              <span className="text-gray-400 text-base opacity-25">$ </span>
              <strong className="text-primary text-3xl leading-tight">
                49
              </strong>
              <span className="text-gray-400 text-base opacity-25">
                {" "}
                /month{" "}
              </span>
            </p>
            <Link url={"https://tailwindcss.com/docs/justify-content"}>
              <Button
                type="submit"
                label="Subscribe"
                btnClass="btn--pink font-bold text-primary my-5 mx-0 py-2 px-10 rounded-full hover:bg-primary hover:text-white cursor-pointer "
              />
            </Link>
          </div>
        </div>

        <div className="plans-item lg:w-1/5 md:w-4/12 w-5/6 px-3 bg-card rounded-3xl sm:mx-1 my-8 relative mx-auto self-center">
          <img
            src={directionImg}
            alt=""
            className="w-14 self-center mx-auto absolute -top-7 inset-x-0"
          />
          <div className="h-40 border-bottom">
            <h3 className="text-primary mt-8">Direction Pack</h3>
            <p className="my-2 text-sm mx-7">
              Steer your business towards embracing a platform mindset with data
              and evidence
            </p>
          </div>
          <ul className="py-5 h-96">
            <li className="mb-2">
              Bespoke Analysis with Platformable Experts for 5 hours/monthly
            </li>
            <li className="mb-2">
              Your logo advertised in the Quarterly Trends Report
            </li>
            <li className="mb-2">
              Quarterly Trends Report Access for your internal teams
            </li>
            {/* <li className="mb-2">
              Analytics Dashboard Access for your internal teams
            </li> */}
            <li className="mb-2">
              Entry to quarterly webinar hosted by Platformable experts
            </li>
            {/* <li className="mb-2">
              Vote on a “Question of the Quarter” and receive answers from our
              analysts{" "}
            </li> */}
          </ul>
          <div className="plans-price mx-3 h-48">
            <p className="font-bold">
              <span className="text-gray-400 text-base opacity-25">$ </span>
              <strong className="text-primary text-3xl leading-tight">
                750
              </strong>
              <span className="text-gray-400 text-base opacity-25">
                {" "}
                /month{" "}
              </span>
            </p>
            <Link url={"https://tailwindcss.com/docs/justify-content"}>
              <Button
                type="submit"
                label="Subscribe"
                btnClass="btn--silver font-bold text-primary my-5 mx-0 py-2 px-10 rounded-full hover:bg-primary hover:text-white cursor-pointer "
              />
            </Link>
          </div>
        </div>

        <div className="plans-item lg:w-1/5 md:w-4/12 w-5/6 px-3 bg-card rounded-3xl sm:mx-1 my-8 relative mx-auto self-center">
          <img
            src={leadershipImg}
            alt=""
            className="w-14 self-center mx-auto absolute -top-7 inset-x-0"
          />
          <div className="h-48 border-bottom sm:mb-0 mb-4">
            <h3 className="text-primary mt-8">Leadership Pack</h3>
            <p className="my-2 text-sm mx-7 ">
              Become an ecosystem leader by leveraging data and insights to
              drive business strategy and action
            </p>
          </div>
          <ul className="py-5 h-96">
            <li className="mb-2">
              Bespoke Analysis with Platformable Experts for 10 hours/monthly
            </li>
            <li className="mb-2">
              White label edition of reports to use as a lead generation tool
              for your company
            </li>
            <li className="mb-2">
              Quarterly Trends Report Access for unlimited members
            </li>
            {/* <li className="mb-2">
              Analytics Dashboard Access for up to 10 members
            </li> */}
            <li className="mb-2">
              Quarterly webinar hosted for your community{" "}
            </li>
            <li className="mb-2">
              Vote on a “Question of the Quarter” and receive answers from our
              analysts{" "}
            </li>
          </ul>
          <div className="plans-price h-48">
            <p className="font-bold">
              <span className="text-gray-400 text-base opacity-25">$ </span>
              <strong className="text-primary text-3xl leading-tight">
                2200
              </strong>
              <span className="text-gray-400 text-base opacity-25">
                {" "}
                /month{" "}
              </span>
            </p>
            <Link url={"https://tailwindcss.com/docs/justify-content"}>
              <Button
                type="submit"
                label="Subscribe"
                btnClass="btn--gold font-bold text-primary my-5 mx-0 py-2 px-10 rounded-full hover:bg-primary hover:text-white cursor-pointer "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscriptionPlans


/*EXTRA STYLING IN THE CSS SHEET*/