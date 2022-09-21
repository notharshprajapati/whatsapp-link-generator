import React from "react";

const Intro = () => {
  return (
    <div className="pt-80 pb-10 ">
      <div className="ml-auto mr-auto grid grid-cols-2 ">
        <div className="">
          <h1 className="text-3xl font-bold pb-2">
            <span className="text-green-500">WHATSAPP</span> LINK GENERATOR
          </h1>
          <h2 className="text-1xl pb-2">
            Quickly generate a personalized WhatsApp link with a predefined
            message and share it with your audience on your Social Networks!
          </h2>
          <h3 className="text-gray-500 text-1xl pb-2">
            By clicking on the link your customers will be able to send you a
            WhatsApp message without having to add your phone number to their
            contact list.
          </h3>
          <button className="h-100 bg-gradient-to-br from-green-400 to-green-500 text-white p-2.5 rounded-full">
            Create Link Now
          </button>
        </div>
        <div className="flex-none w-56 relative">
          <img
            src="https://play-lh.googleusercontent.com/tNuMAclO_TrRn5RbiSo2iU2ySljFaHjCIWoMUSoemUcl4FjTyVO0PpJZL_zTrYf7v_4"
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
