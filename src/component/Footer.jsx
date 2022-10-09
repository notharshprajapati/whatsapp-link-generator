import React from "react";
import { Fade } from "react-reveal";

const Footer = () => {
  return (
    <Fade bottom>
      <div className="bg-gray-700">
        <div className="flex p-5 m-auto text-white text-sm flex-col">
          <div className="text-center ">
            Surepass Technologies Private Limited
            <br /> ISO 27001:2013 Certified
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Footer;
