import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { steps } from "../data/data";

const Navbar = () => {
    const navs = steps;

    const [isOpen, setIsOpen] = useState(false);

    function hundleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <header className=" px-10 md:px-24 py-5 text-white fixed w-full z-10 flex justify-between items-center   property-desc left-0 top-0 bg-slate-800 shadow-md">
            <div className="logo z-10">
                <NavLink to="/" className="text-3xl font-bold">
                    Logo
                </NavLink>
            </div>

            <div className=" cursor-pointer text-2xl block md:hidden  z-10">
                {!isOpen ? (
                    <FaBars onClick={hundleClick} />
                ) : (
                    <FaTimes onClick={hundleClick} />
                )}
            </div>

            <nav
                className={`${
                    isOpen ? "block" : "hidden md:block"
                } absolute md:relative top-[100%] left-0 w-full md:w-auto bg-slate-800 md:bg-transparent py-5 md:py-0 z-5 `}
            >
                <ul className="flex flex-col md:flex-row gap-10  justify-around items-center">
                    {navs.map((nav) => (
                        <li
                            key={nav}
                            className=" hover:text-sky-700 transition"
                        >
                            <NavLink to={nav} className="capitalize">
                                {nav}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
