import React from "react";

const How = () => {
  return (
    <section className="mt-20 pt-10 pb-10 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-20  gap-x-8 ">
        <h1 className="text-3xl font-semibold pb-2 text-center mb-10">
          Check these examples
        </h1>
        <div
          className="grid grid-cols-1 p-10 md:grid-cols-3 gap-20 place-content-around mt-5"
          font-bold
        >
          <div className=" grid grid-cols-1 ">
            <img
              src="https://v.fastcdn.co/u/51e5171d/27859382-0-Ex-01-EN-min.jpg"
              alt=""
              className="max-w-full h-auto justify-self-center w-48 rounded-xl md:order-1"
            />
            <h2 className=" mt-5 text-center h-100 bg-green-500 text-white p-2 font-bold  rounded-lg order-1">
              Share it on Instagram
            </h2>
          </div>
          <div className=" rounded-lg ">
            <img
              src="https://v.fastcdn.co/u/51e5171d/27859387-0-Ex-02-EN-min.jpg"
              alt=""
              className="max-w-full h-auto justify-self-center w-48 rounded-xl md:order-1"
            />
            <h2 className=" mt-5 text-center h-100 bg-green-500  text-white p-2  font-bold rounded-lg ">
              Facebook's newsfeed
            </h2>
          </div>
          <div className=" rounded-lg ">
            <img
              src="https://v.fastcdn.co/u/51e5171d/27859392-0-Ex-03-EN-min.jpg"
              alt=""
              className="max-w-full h-auto justify-self-center w-48 rounded-xl md:order-1"
            />
            <h2 className=" mt-5 text-center h-100 bg-green-500 text-white p-2 font-bold rounded-lg">
              or on Twitter
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
