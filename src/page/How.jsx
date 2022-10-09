import React from "react";
import { Fade } from "react-reveal";
const steps = [
  {
    title: "Step 1",
    content: "Enter your WhatsApp Business number.",
    delay: 1,
  },
  {
    title: "Step 2",
    content: "Now add a pre-filled message (optional).",
    delay: 2,
  },
  {
    title: "Step 3",
    content: "Click on the “Generate WhatsApp Chat Link” button!",
    delay: 3,
  },
];

const How = () => {
  return (
    <section className="mt-10 pt-10 pb-10 bg-gradient-to-br from-tealg-100 to-tealg-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-20  gap-x-8 ">
        <Fade bottom delay={150}>
          <h1 className="text-2xl font-semibold pb-2 text-center">
            How To Create Whatsapp Link?
            <br /> Get <span className="text-tealg-500">Whatsapp</span> Chat
            Link
          </h1>
        </Fade>
        <div className="grid grid-cols-1 p-5 md:grid-cols-3 md:p-1 gap-20 place-content-around mt-5">
          {steps.map((step) => (
            <Fade bottom delay={step.delay * 150 + 150} key={step.title}>
              <div className="bg-white p-10 rounded-lg shadow-md">
                <h2 className="text-center h-100 bg-tealg-500 text-white p-2  rounded-lg font-bold shadow-md">
                  {step.title}
                </h2>
                <p className="pt-5 text-tealg-700 text-center  ">
                  {step.content}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default How;
