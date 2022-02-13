import React from "react"
import Link from "../shared-components/Link"
import Button from "../shared-components/Button"
/*assets*/
import testImg from "../../assets/home/blog-post.png"

const PostsCards = () => {
  const images = [
    {
      src:testImg,/* 
      title:'Datapoint: How Widely adopted is the OpenAPI Specification (OAS) in the opern banking ecosystem?' */
    },
    {
      src:testImg,
   /*    title:'Datapoint: How Widely adopted is the OpenAPI Specification (OAS) in the opern banking ecosystem?' */
    },
    {
      src:testImg,
     /*  title:'Datapoint: How Widely adopted is the OpenAPI Specification (OAS) in the opern banking ecosystem?' */
    },
  ];
  
  return (
    <section className="cards-section my-6 mx-auto py-8 bg-lightPurple">
      <h2 className="text-center my-5 font-black">Latest blog posts</h2>
      
      <div className="my-0 md:mx-16 mx-2 py-0 px-3 md:flex justify-evenly items-center">
        {images.map((img, i) =>(
          <div key={i} className="mb-12 md:mb-2 md:mx-2 mx-auto p-8 
          flex flex-col flex-wrap justify-center items-center self-center
          cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
            <img src={img.src} alt={img.title} className="" />
            
            <div className="">
              <h4 className="m-5">{img.title}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto text-center">
        <Link url={"https://platformable.com/blog/"}>
          <Button type="button" label={"See more"} btnClass="outlinedBtn text-primary font-bold my-5 mx-0 py-2 px-10 w-60 rounded-full hover:bg-secondary cursor-pointer" />
        </Link>
      </div>

    </section>
  )
}

export default PostsCards
