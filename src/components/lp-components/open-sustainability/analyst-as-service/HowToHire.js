import React from "react"

export default function HowToHire() {
  return (
    <section className="howToHire posts-container max-w-md container mx-auto rounded-xl py-10 my-10 px-20">
      <div>
        <div className="">
          <h3 className="font-black text-center">How to hire the service</h3>
          <p className="text-center">
            Our analyst service is available to subscribers of our Direction and
            Leadership Trends Report Packs.
          </p>
        </div>
        <div className="howToHire-prices flex justify-center my-5">
          <div className="howToHire-price-left p-5">
            <h4>
              <strong>5 hours</strong> monthly
            </h4>
            <h4>
              {" "}
              for <strong>€800</strong>
            </h4>
          </div>
          <div className="howToHire-price-right p-5">
            <h4>
              <strong>10 hours</strong> monthly
            </h4>
            <h4>
              {" "}
              for <strong>€1500</strong>
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}
