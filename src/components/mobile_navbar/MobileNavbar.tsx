import { faAngleRight, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/fd.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router";
import home from "../../assets/home-icon-silhouette.png";
import petClinic from "../../assets/icon1.png";
import vets from "../../assets/637308-2001.png";
import store from "../../assets/1173553-2001.png";
import pharmacies from "../../assets/image21.png";
import forum from "../../assets/communication.png";
import blog from "../../assets/blog-comment-speech-bubble-symbol.png";

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    function toggleMenu() {
        setIsOpen(!isOpen);
    }
    return (
        <div className='xl:hidden'>

            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">

                <a href="/" className="flex items-center">
                    <img src={logo} className="w-[50px]" alt="logo" />
                </a>

                <button
                    onClick={toggleMenu}
                    className="text-white dark:bg-primary-300 dark:text-gray-700 cursor-pointer bg-primary-600 hover:bg-primary-600/95 font-medium rounded-lg text-md size-8 flex justify-center items-center "
                >
                    {isOpen ? (
                        <FontAwesomeIcon icon={faXmark} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />


                    )}
                </button>
            </div>

            {isOpen && (
                <>
                    <div
                        className="background cursor-pointer fixed inset-0 z-[3000] bg-black/50 "
                        onClick={toggleMenu}
                    >
                        <div className="offcanvas fixed w-60 bg-white p-5 top-0 bottom-0">
                            <div className="flex gap-x-10 justify-between items-center">
                                <Link to={"/"}>
                                    <img src={logo} className="w-[40px]" />
                                </Link>
                                <button
                                    onClick={toggleMenu}
                                    className="size-8 bg-gray-200 rounded-full"
                                >
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>

                            <div className="mt-4">
                                <ul className="flex flex-col gap-y-2 *:border-b *:pb-3 *:border-gray-400 *:text-lg *:font-medium">
                                    <Link to={"/"} className="flex gap-x-3 items-center">
                                        <img src={home} alt="icon" className="w-4 h-4" /> Home
                                    </Link>
                                    <Link to={"/pet-clinics"} className="flex gap-x-3 items-center">
                                        <img src={petClinic} alt="icon" className="w-4 h-4" /> Pet clinics
                                    </Link>
                                    <Link to={"/vets"} className="flex gap-x-3 items-center">
                                        <img src={vets} alt="icon" className="w-4 h-4" /> Vets
                                    </Link>
                                    <Link to={"/pet-stores"} className="flex gap-x-3 items-center">
                                        <img src={store} alt="icon" className="w-4 h-4" /> Pet stores
                                    </Link>
                                    <Link to={"/pharmacies"} className="flex gap-x-3 items-center">
                                        <img src={pharmacies} alt="icon" className="w-4 h-4" /> Pharmacies
                                    </Link>
                                    <Link to={"/forum-categories"} className="flex gap-x-3 items-center">
                                        <img src={forum} alt="icon" className="w-4 h-4" /> Forum
                                    </Link>
                                    <Link to={"/blog-categories"} className="flex gap-x-3 items-center ">
                                        <img src={blog} alt="icon" className="w-4 h-4" /> Blog
                                    </Link>
                                    <Link to={"/clinic-register"} className="flex gap-x-3 items-center">
                                        <FontAwesomeIcon icon={faAngleRight} className="text-sm  text-primary-600" />Join us pet clinic
                                    </Link>
                                    <Link to={"/vet-register"} className="flex gap-x-3 items-center">
                                        <FontAwesomeIcon icon={faAngleRight} className="text-sm  text-primary-600" /> Join us vet
                                    </Link>
                                    <Link to={"/pharmacy-register"} className="flex gap-x-3 items-center">
                                        <FontAwesomeIcon icon={faAngleRight} className="text-sm  text-primary-600" /> Join us pharmacy
                                    </Link>
                                    <Link to={"/store-register"} className="flex gap-x-3 items-center border-none">
                                        <FontAwesomeIcon icon={faAngleRight} className="text-sm  text-primary-600" /> Join us pet store
                                    </Link>

                                </ul>


                            </div>
                        </div>

                    </div>
                </>
            )}

        </div>
    )
}
