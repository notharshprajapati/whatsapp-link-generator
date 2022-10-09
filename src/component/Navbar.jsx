import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const navigation = [
  { name: "Generate", href: "#generate" },
  { name: "QnA", href: "#qna" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div as="nav" className="sticky top-0 backdrop-blur-xl z-50">
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <a href="#home">
                  <img
                    className="block h-8 w-auto "
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
                    alt="img"
                  />
                </a>
              </div>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex  space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      className="text-tealg-600 rounded-lg p-2 hover:bg-tealg-600 hover:text-white"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start">
                <div className=" sm:hidden">
                  {/* Mobile menu button*/}
                  <button className="inline-flex items-center justify-center rounded-md p-2 text-tealg-600  hover:bg-tealg-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <AiOutlineClose
                        className="block h-6 w-6"
                        aria-hidden="true"
                        onClick={toggle}
                      />
                    ) : (
                      <GiHamburgerMenu
                        className="block h-6 w-6"
                        aria-hidden="true"
                        onClick={toggle}
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden">
          {open && (
            <div className="space-y-1 flex  flex-col items-end px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <a key={item.name} onClick={toggle} href={item.href}>
                  <button
                    className="text-tealg-600  p-2 hover:bg-tealg-600 hover:text-white
                block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </button>
                </a>
              ))}
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default Navbar;
