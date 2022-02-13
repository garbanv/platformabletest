import React from 'react';
import Layout from '../components/layout';
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { InlineWidget } from "react-calendly"

const Contact = () => {
    return (
    <Layout>
        <section>
            <div className="container mx-auto">
                <div className="contact-hero grid md:grid-cols-2 grid-cols-1">
                    <div className="hero-contact-text my-5 py-10 px-3">
                        <h3 className="font-black">Contact Us</h3>
                        <p>Please write to mark@platformable.com, complete the form below or schedule an appointment</p>
                    </div>
                    <div className="hero-contact-image flex justify-end">
                    <StaticImage
                        src="../assets/home/hero_squares.png"
                        alt="platformable"
                        width={400}
                        />
                    </div>
                </div>
            </div>
        </section>



        <section className="bg-russian-violet-light py-10">
            <div className="container mx-auto">
                <div className="form-container grid md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="contact-form px-3">


                        <h5 className="font-black text-center my-5">Leave us a message</h5>
                                <form  name="platformableWebsiteContact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                                <input type="hidden" name="bot-field" />
                                <input type="hidden" name="form-name" value="platformableWebsiteContact" />

                                            <div className="md:flex items-center mt-12">
                                                <div className="w-full md:w-1/2 flex flex-col">
                                                    <label className="font-semibold leading-none">Name</label>
                                                    <input type="text" name="name" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                                </div>
                                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                                    <label className="font-semibold leading-none">Email</label>
                                                    <input type="email" name="email" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                                                </div>
                                            </div>
                                            <div className="md:flex items-center mt-8">
                                                <div className="w-full flex flex-col">
                                                    <label className="font-semibold leading-none">Subject</label>
                                                    <input type="text" name="subject" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                                                </div>
                                                
                                            </div>
                                            <div>
                                                <div className="w-full flex flex-col mt-8">
                                                    <label className="font-semibold leading-none">Message</label>
                                                    <textarea type="text" name="message" className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center w-full">
                                                <button type="submit" className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-russian-violet-dark rounded  focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                                    Send message
                                                </button>
                                            </div>
                                 </form>
                                
                    </div>
                  
                    <section className="calendly">
                        <h5 className="font-black text-center my-5">Schedule an appointment</h5>
                        <InlineWidget url="https://calendly.com/platformable" />
                    </section>
                </div>
            </div>
        </section>
    </Layout>
    );
}

export default Contact;
