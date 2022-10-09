import React, { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { Fade } from "react-reveal";

const data = [
  {
    delay: 1,
    question: "What does a WhatsApp link look like?",
    answer:
      "A WhatsApp link always begins with wa.me/ followed by your WhatsApp number. It may also contain a URL-encoded pre-filled message at the end.",
  },
  {
    delay: 2,
    question:
      "What happens after my customers click on a WhatsApp link or wa.me link?",
    answer:
      "When clicked, a WhatsApp link opens a chat window in the app or on WhatsApp web where customers can chat directly with your business.",
  },
  {
    delay: 3,
    question: "How much does it cost to generate a WhatsApp link?",
    answer:
      "It costs nothing to create a WhatsApp link. Respond.io’s WhatsApp Link Generator is free to use!",
  },
  {
    delay: 4,
    question:
      "How can I track where leads come from when they click on a WhatsApp link?",
    answer:
      "To track where WhatsApp leads generated through WhatsApp link, create a unique reference for each source and add them to the pre-filled message of the WhatsApp link. ",
  },
  {
    delay: 5,
    question: "Does a WhatsApp link work in my country?",
    answer:
      "WhatsApp link works in any country where WhatsApp is available. Being one of the most popular messaging apps, WhatsApp is available in the majority of the countries in Europe, Asia, America, Africa, and Oceania.",
  },
  {
    delay: 6,
    question: "Can I embed a WhatsApp link in an image?",
    answer:
      "Definitely! Just like any other link, WhatsApp links can be embedded in images or GIFs. Apart from that, you can also embed a WhatsApp link in a custom banner or widget on your website.",
  },
  {
    delay: 7,
    question:
      "I’m a current respond.io user, can I also generate a WhatsApp link from the platform?",
    answer:
      "Yes! If you are a respond.io user, you can create a WhatsApp link or WhatsApp QR code with the Code Generator on the platform. Simply navigate to Workplace Settings > Channels > WhatsApp > Code Generator.",
  },
  {
    delay: 8,
    question: "Why do I need a WhatsApp QR code?",
    answer:
      "While WhatsApp links are great for turning online customers into WhatsApp contacts, they can’t drive offline visitors to message you. You’ll need a WhatsApp QR code to turn foot traffic into WhatsApp conversations.",
  },
];

const Questions = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    } else {
      setSelected(i);
    }
  };
  return (
    <section
      className="mt-10 pt-10 pb-10 bg-gradient-to-br from-tealg-100 to-lightg-200"
      id="qna"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-20  gap-x-8 ">
        <Fade bottom delay={150}>
          <h2 className="text-2xl font-semibold pb-2 text-center mt-10">
            Some common questions <br />
            were often asked
          </h2>
        </Fade>
        <div className=" grid items-center  px-0 md:px-20 ">
          <div className=" py-8  ">
            {data.map((item, i) => (
              <Fade bottom delay={150} key={i}>
                <div
                  className={
                    selected === i
                      ? "bg-tealg-600 rounded-md accordion-open my-8 text-white  duration-300 shadow-md cursor-pointer "
                      : "bg-tealg-400 rounded-md my-8 text-green-900  duration-300 shadow-md cursor-pointer"
                  }
                  onClick={() => toggle(i)}
                >
                  <header className="flex items-center  gap-2 px-3 py-2 ">
                    <RiAddLine
                      className={
                        selected === i
                          ? "text-2xl rotate-45 duration-300 mt-2"
                          : "text-2xl duration-300 mt-2"
                      }
                    />
                    <h3 className=" font-semibold duration-300 mt-2">
                      {item.question}
                    </h3>
                  </header>
                  <div
                    className={
                      selected === i
                        ? "pb-5 overflow-hidden content h-auto max-h-80 duration-300"
                        : "pb-2 overflow-hidden max-h-0 duration-300"
                    }
                  >
                    <p className={selected === i ? "px-10" : "px-10 hidden"}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
