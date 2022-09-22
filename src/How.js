import React from "react";

const How = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold pb-2">
        How To Create Whatsapp Link? Get WhatsApp Chat Link
      </h1>
      <div className="grid grid-cols-3 grid-flow-col gap-3 ">
        <div
          className="shadow-sm w-48 h-48 bg-green-200 
                    rounded-lg mr-2"
        >
          <h2 className="">Step 01</h2>
          <p>
            Enter your country code without the + symbol, followed by your
            WhatsApp Business number
          </p>
        </div>
        <div
          className="shadow-sm w-48 h-48 bg-green-200 
                    rounded-lg"
        >
          <h2>Step 02</h2>
          <p>Now add a pre-filled message(optional).</p>
        </div>
        <div
          className="shadow-sm w-48 h-48 bg-green-200 
                    rounded-lg"
        >
          <h2>Step 03</h2>
          <p>Click on the “Generate WhatsApp Chat Link” button!</p>
        </div>
      </div>
    </div>
  );
};

export default How;
