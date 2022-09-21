import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const App = () => {
  const [no, setNo] = useState("");
  const [msg, setMsg] = useState("");
  const [link, setLink] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    const encodedMsg = encodeURIComponent(msg.trim());
    setLink(`https://wa.me/${no}?text=${encodedMsg}`);
    setNo("");
    setMsg("");
  };

  return (
    <div>
      <h1 className=" text-green-500 text-3xl font-bold underline ">
        Whatsup link
      </h1>

      <div className="w-full max-w-xl ml-10 mt-10">
        <form
          onSubmit={SubmitHandler}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700  font-bold mb-2">
              Your WhatsApp Number
            </label>
            <p className="block text-gray-500 text-sm mb-2">
              Include country code without + symbol. Eg. if country code is +91
              and WhatsApp number is 9000012345, then type 919000012345 below.
            </p>
            <input
              type="number"
              value={no}
              placeholder="eg. 919810333339"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setNo(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700  font-bold mb-2">
              Welcome Message (Optional)
            </label>
            <p className="block text-gray-500 text-sm mb-2">
              Automatically include this text when a user clicks on your chat
              link, making it easier to start a conversation.
            </p>
            <textarea
              cols="1"
              rows="5"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="eg. Hello, I have a question about your Service. Can you please help me with it"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Generate
            </button>
          </div>
        </form>
      </div>

      {link && (
        <div>
          <a href={link} target="_blank" rel="noreferrer">
            {link}
          </a>
          <QRCode
            title="GeeksForGeeks"
            value={link}
            bgColor="white"
            fgColor="#128c7e"
            size={200}
          />
        </div>
      )}
    </div>
  );
};

export default App;
