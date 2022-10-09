import React from "react";
import { Fade } from "react-reveal";

const Intro = () => {
  return (
    <section className="pt-10 pb-10" id="home">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="grid items-center gap-x-8 grid-cols-1 md:grid-cols-2 ">
          <Fade right>
            <img
              src="https://global-uploads.webflow.com/6030eb20edb26744961d31ee/62ea1acb0175679bc2577391_WhatsApp-link-generator-1-p-1080.png"
              alt=""
              className="max-h-full h-auto justify-self-center rounded-xl md:order-1"
            />
          </Fade>
          <Fade left>
            <div className="mt-10 md:mt-0 px-10 sm:pt-10">
              <h1 className="text-3xl font-bold pb-10 sm:text-center md:text-left">
                <span className="text-tealg-500">WHATSAPP</span> LINK GENERATOR
              </h1>
              <h2 className="text-1xl pb-2 sm:text-justify md:text-left">
                Quickly generate a personalized WhatsApp link with a predefined
                message and share it with your audience on your Social Networks!
              </h2>
              <h3 className="text-gray-500 text-1xl pb-2 sm:text-justify md:text-left">
                By clicking on the link your customers will be able to send you
                a WhatsApp message without having to add your phone number to
                their contact list.
              </h3>
              <a href="#generate">
                <button className="mt-5  h-100 bg-gradient-to-br from-tealg-500 to-tealg-600 text-white p-2 px-5 rounded shadow-md">
                  Create Link Now
                </button>
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Intro;
