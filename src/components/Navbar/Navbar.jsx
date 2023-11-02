import React, { useState } from "react";
import { Link } from "react-scroll";
import LogoSvg from "../Icons/logo";

function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    { link: "stock" },
    { link: "feature" },
    { link: "learn" },
    { link: "company" },
  ];

  return (
    <>
      <div className="bg-[#FFFFFF] flex h-16 shadow w-full fixed z-50 items-center lg:px-10 px-2 py-2 justify-between">
        <div>
          <a href="" className="flex items-center gap-1 cursor-pointer">
            <LogoSvg Fill="#1A1A1A"/>
            <h2 className=" capitalize font-bold">Nigerian RoboAdvisor</h2>
          </a>
        </div>

        <div className="lg:flex hidden items-center">
          {links.map(({ link }, index) => (
            <span
              key={index}
              className={`capitalize cursor-pointer text-lg hover:scale-115 duration-300 font-bold px-1 leading-5`}
            >
              <Link to={link} smooth duration={700}>
                {link}
              </Link>
            </span>
          ))}
        </div>

        <div className="lg:flex hidden items-center gap-4 font-bold">
          <button className="bg-transparent px-2 py-1 capitalize">
            log in
          </button>
          <button className="bg-gradient-to-tr from-Dark-Blue from-60% to-Blue via-40% px-6 rounded-xl py-2 capitalize hover:scale-105 duration-200 text-White">
            sign up
          </button>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="lg:hidden cursor-pointer flex items-center justify-center"
        >
          <ion-icon name="menu" size="large"></ion-icon>
        </div>
        {nav && (
          <ul className="absolute top-0 right-0 w-[50%] h-screen bg-White">
            <button
              onClick={() => setNav(!nav)}
              className="text-2xl mt-4 mx-10 rounded-md flex items-end justify-end text-black cursor-pointer hover:scale-105 duration-200"
            >
              <ion-icon name="close" size="large"></ion-icon>
            </button>
            {links.map(({ id, link}) => (
              <li
                key={id}
                className="flex px-8 my-6 justify-center hover:bg-black w-full hover:text-white hover:border-l-purple-500 hover:border-l-4"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                  className="flex capitalize p-3 gap-8 font-bold justify-center items-center text-center"
                >
                  <h3>{link}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )}
      
      </div>
    </>
  );
}

export default Navbar;
