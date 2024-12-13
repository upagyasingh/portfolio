import React, { useState } from "react";
import { styles } from "../styles";
import { BrowserRouter, NavLink } from "react-router-dom";
import { close, menu, web } from "../assets";
import { navLinks } from "../constants";
import { Download, Menu, MonitorX } from "lucide-react";
import resume from "../assets/resume/upagya.pdf"
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 backdrop-blur-3xl`}
      >
        <div className="w-full  flex justify-between items-center  mx-auto ">
          <NavLink
            to="/"
            className={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            <img
              src={web}
              alt="logo"
              className="w-11 h-11 object-contain"
              height={100}
              width={100}
            />
          </NavLink>
          <ul className="list-none hidden  sm:flex flex-row gap-7 items-center ">
            {navLinks.map((nav) => {
              return (
                <>
                  <li key={nav.id}>
                    <NavLink
                      to={nav.id}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {nav.title}
                    </NavLink>
                  </li>
                  
                </>
              );
            })}
            <li><a href={resume} download="upagya-resume"><button className="violet-gradient h-10 w-36 rounded-3xl flex justify-center items-center gap-2">Resume <Download/></button></a></li>
          </ul>

          {/* for smaller screen < 640px */}
          <div className="sm:hidden flex justify-end items-center">
            {toggle ? (
              <MonitorX onClick={() => setToggle((prv) => !prv)} />
            ) : (
              <Menu onClick={() => setToggle((prv) => !prv)} />
            )}
          </div>
        </div>
      </nav>
      <div
        className={` sm:hidden backdrop-blur-3xl fixed top-[90px] right-0 z-50 h-[520px] w-48 rounded-xl transition-transform duration-300 ease-in-out ${
          toggle ? "translate-x-[-10px]" : "translate-x-full"
        }`}
      >
        <ul className="list-none flex flex-col items-center gap-4 mt-6">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <NavLink
                to={nav.id}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {nav.title === "Contact" ? <button className="violet-gradient h-10 w-36 rounded-3xl text-white">Say Hello</button> : nav.title}
              </NavLink>
            </li>
          ))}
          <li><a href={resume} download="upagya-resume"><button className="violet-gradient h-10 w-36 rounded-3xl flex justify-center items-center gap-2">Resume <Download/></button></a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
