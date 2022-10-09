import React, { useState } from "react";
import QRCode from "react-qr-code";
import { Fade } from "react-reveal";
import { BsClipboard, BsClipboardCheck } from "react-icons/bs";

const From = () => {
  const [no, setNo] = useState("");
  const [msg, setMsg] = useState("");
  const [link, setLink] = useState("");
  const [copy, setCopy] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (9 < no.toString().length && no.toString().length < 13) {
      if (msg.length > 0) {
        const encodedMsg = encodeURIComponent(msg.trim());
        setLink(`https://wa.me/${no}?text=${encodedMsg}`);
        setMsg("");
      } else {
        setLink(`https://wa.me/${no}`);
      }
      setNo("");
    } else {
      alert("Please check number length");
    }
  };

  return (
    <div id="generate" className="pt-10">
      <div className="pt-10 mt-10 pb-10 ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="grid items-top gap-x-8 grid-cols-1 md:grid-cols-2 ">
            <Fade left>
              <div className="w-full max-w-xl">
                <form
                  onSubmit={SubmitHandler}
                  className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4"
                >
                  <div className="mb-4">
                    <label className="block text-gray-700  font-bold mb-2">
                      Your WhatsApp Number
                    </label>
                    <p className="block text-gray-500 text-sm mb-2">
                      Include country code without + symbol. Eg. if country code
                      is +91 and WhatsApp number is 9000012345, then type
                      919000012345 below.
                    </p>

                    <input
                      type="text"
                      value={no}
                      placeholder="eg. 919810333339"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                      onChange={(e) => {
                        const { value } = e.target;
                        const regex = /^[0-9]/;
                        setNo(value);
                        console.log(regex.test(value));
                      }}
                      minLength={10}
                      maxLength={12}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700  font-bold mb-2">
                      Welcome Message (Optional)
                    </label>
                    <p className="block text-gray-500 text-sm mb-2 ">
                      Automatically include this text when a user clicks on your
                      chat link, making it easier to start a conversation.
                    </p>
                    <textarea
                      cols="1"
                      rows="5"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                      placeholder="eg. Hello, I have a question about your Service. Can you please help me with it"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-tealg-500 hover:bg-tealgdark-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Generate
                    </button>
                  </div>
                </form>
              </div>
            </Fade>
            <Fade right>
              <div className="flex items-stretch bg-grey-lighter min-h-full">
                <div className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
                  <h1 className="block text-gray-700  font-bold mb-2">
                    CREATE YOUR FREE LINK
                  </h1>
                  <h2 className="text-gray-500 text-1xl pb-2 sm:text-justify md:text-left">
                    Get your customer's phone number and make the most of
                    WhatsApp Marketing by establishing a more fluid
                    communication with them!
                  </h2>
                  {link && (
                    <Fade>
                      <div className="mt-5  flex flex-col items-center ">
                        <div className="flex align-middle ">
                          <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 w-44 truncate bg-tealg-400 pl-2 rounded"
                          >
                            {link}
                          </a>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(link);
                              setCopy(true);
                            }}
                            className="ml-auto bg-gradient-to-r from-tealg-400 to-tealg-500 text-white p-2 px-5 rounded shadow-md"
                          >
                            {copy ? <BsClipboardCheck /> : <BsClipboard />}
                          </button>
                        </div>

                        <QRCode
                          value={link}
                          bgColor="white"
                          fgColor="#128c7e"
                          size={180}
                          className="mt-5"
                        />
                      </div>
                    </Fade>
                  )}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default From;
