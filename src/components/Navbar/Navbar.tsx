import { useState, useRef, useEffect } from "react";
import logo from "../../assets/fd.png";
import home from "../../assets/home-icon-silhouette.png";
import petClinic from "../../assets/icon1.png";
import vets from "../../assets/637308-2001.png";
import store from "../../assets/1173553-2001.png";
import pharmacies from "../../assets/image21.png";
import forum from "../../assets/communication.png";
import blog from "../../assets/blog-comment-speech-bubble-symbol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router";
import MobileNavbar from "../mobile_navbar/MobileNavbar";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <nav className="hidden xl:block bg-neutral-primary w-full z-20">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">

                    <a href="/" className="flex items-center">
                        <img src={logo} className="w-[50px]" alt="logo" />
                    </a>

                    <div className="hidden md:block">
                        <ul className="flex items-center space-x-8 text-lg font-medium">

                            <li className="relative flex flex-col items-center">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `group flex flex-col items-center relative leading-none
            ${isActive ? "text-primary-600" : "hover:text-primary-600"}`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span>Home</span>

                                            <img
                                                src={home}
                                                alt="icon"
                                                className={`
                        absolute -bottom-5 w-4 h-4 transition duration-200

                        ${isActive
                                                        ? "opacity-100"
                                                        : "opacity-0 group-hover:opacity-100"
                                                    }
                    `}
                                            />
                                        </>
                                    )}
                                </NavLink>
                            </li>

                            {/* Pet Clinic */}
                            <li className="relative group flex flex-col items-center">
                                <NavLink to="/pet-clinics" className={({ isActive }) =>
                                    `group flex flex-col items-center relative leading-none
            ${isActive ? "text-primary-600" : "hover:text-primary-600"}`
                                }>
                                    {({ isActive }) => (
                                        <>
                                            <span>Pet clinics</span>

                                            <img
                                                src={petClinic}
                                                alt="icon"
                                                className={`
                        absolute -bottom-5 w-4 h-4 transition duration-200

                        ${isActive
                                                        ? "opacity-100"
                                                        : "opacity-0 group-hover:opacity-100"
                                                    }
                    `}
                                            />
                                        </>
                                    )}
                                </NavLink>

                            </li>

                            {/* Vets */}
                            <li className="relative group flex flex-col items-center">
                                <NavLink to="/vets" className={({ isActive }) =>
                                    `group flex flex-col items-center relative leading-none
            ${isActive ? "text-primary-600" : "hover:text-primary-600"}`
                                }>
                                    {({ isActive }) => (
                                        <>
                                            <span>Vets</span>

                                            <img
                                                src={vets}
                                                alt="icon"
                                                className={`
                        absolute -bottom-5 w-4 h-4 transition duration-200

                        ${isActive
                                                        ? "opacity-100"
                                                        : "opacity-0 group-hover:opacity-100"
                                                    }
                    `}
                                            />
                                        </>
                                    )}
                                </NavLink>

                            </li>

                            {/* Pet Stores */}
                            <li className="relative group flex flex-col items-center">
                                <NavLink to="/pet-stores" className={({ isActive }) =>
                                    `group flex flex-col items-center relative leading-none
            ${isActive ? "text-primary-600" : "hover:text-primary-600"}`
                                }>
                                    {({ isActive }) => (
                                        <>
                                            <span>Pet stores</span>

                                            <img
                                                src={store}
                                                alt="icon"
                                                className={`
                        absolute -bottom-5 w-4 h-4 transition duration-200

                        ${isActive
                                                        ? "opacity-100"
                                                        : "opacity-0 group-hover:opacity-100"
                                                    }
                    `}
                                            />
                                        </>
                                    )}
                                </NavLink>

                            </li>

                            {/* Pharmacies */}
                            <li className="relative group flex flex-col items-center">
                                <NavLink to="/pharmacies" className={({ isActive }) =>
                                    `group flex flex-col items-center relative leading-none
            ${isActive ? "text-primary-600" : "hover:text-primary-600"}`
                                }>
                                    {({ isActive }) => (
                                        <>
                                            <span>Pharmacies</span>

                                            <img
                                                src={pharmacies}
                                                alt="icon"
                                                className={`
                        absolute -bottom-5 w-4 h-4 transition duration-200

                        ${isActive
                                                        ? "opacity-100"
                                                        : "opacity-0 group-hover:opacity-100"
                                                    }
                    `}
                                            />
                                        </>
                                    )}
                                </NavLink>

                            </li>
                            <li className="relative group flex flex-col items-center">
                                <NavLink to="/forum-categories" className={({ isActive }) =>
                                    `group flex flex-col items-center relative leading-none
            ${isActive ? "text-primary-600" : "hover:text-primary-600"}`
                                }>
                                    {({ isActive }) => (
                                        <>
                                            <span>Forum</span>

                                            <img
                                                src={forum}
                                                alt="icon"
                                                className={`
                        absolute -bottom-5 w-4 h-4 transition duration-200

                        ${isActive
                                                        ? "opacity-100"
                                                        : "opacity-0 group-hover:opacity-100"
                                                    }
                    `}
                                            />
                                        </>
                                    )}
                                </NavLink>

                            </li>
                            <li className="relative group flex flex-col items-center">
                                <NavLink to="/blog-categories" className={({ isActive }) =>
                                    `group flex flex-col items-center relative leading-none
            ${isActive ? "text-primary-600" : "hover:text-primary-600"}`
                                }>
                                    {({ isActive }) => (
                                        <>
                                            <span>Blog</span>

                                            <img
                                                src={blog}
                                                alt="icon"
                                                className={`
                        absolute -bottom-5 w-4 h-4 transition duration-200

                        ${isActive
                                                        ? "opacity-100"
                                                        : "opacity-0 group-hover:opacity-100"
                                                    }
                    `}
                                            />
                                        </>
                                    )}
                                </NavLink>

                            </li>
                            <li className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="hover:text-primary-600 leading-none"
                                >
                                    Join us     <FontAwesomeIcon icon={faAngleDown} className="text-sm" />
                                </button>

                                {open && (
                                    <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-200  shadow-lg">
                                        <ul className=" text-sm">
                                            <li>
                                                <Link to={"/clinic-register"} className="block px-4 py-4 hover:bg-primary-600 hover:text-white text-lg transition-colors duration-300">
                                                    <FontAwesomeIcon icon={faAngleRight} className="text-sm me-2" /> Pet clinic
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/vet-register"} className="block px-4 py-4 hover:bg-primary-600 hover:text-white text-lg transition-colors duration-300">
                                                    <FontAwesomeIcon icon={faAngleRight} className="text-sm me-2" /> Vets
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/store-register"} className="block px-4 py-4 hover:bg-primary-600 hover:text-white text-lg transition-colors duration-300">
                                                    <FontAwesomeIcon icon={faAngleRight} className="text-sm me-2" />  Pet stores
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/pharmacy-register"} className="block px-4 py-4 hover:bg-primary-600 hover:text-white text-lg transition-colors duration-300">
                                                    <FontAwesomeIcon icon={faAngleRight} className="text-sm me-2" />  Pharmacies
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
            <MobileNavbar />
        </>
    );
}
