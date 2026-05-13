import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user_image from "../../assets/1.jpeg";
import { faArchive, faComments, faEdit, faEnvelope, faLocationDot, faPhoneAlt, faShieldHalved, faSignOut, faStar, faTags } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGooglePlusG, faInstagram, faTwitter, faWpforms } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router";


export default function AccountSidebar() {
    return (
        <>
            <img src={user_image} className="w-full h-60 rounded-md" />
            <div className="bg-white">
                <div className="px-5 py-4 pb-0 flex flex-col gap-y-2">
                    <h3 className="text-xl">Noha emad</h3>
                    <p className="flex gap-x-2 items-center"><FontAwesomeIcon className="text-primary-600" icon={faLocationDot} />  Kingdom of saudi arabic</p>
                    <p className="flex gap-x-2 items-center"><FontAwesomeIcon className="text-primary-600" icon={faEnvelope} />  info@example.com</p>
                    <p className="flex gap-x-2 items-center"><FontAwesomeIcon className="text-primary-600" icon={faPhoneAlt} />   00966567962166
                    </p>
                    <div className="flex gap-4 mb-6">
                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3a3a3a] hover:bg-blue-600">
                            <FontAwesomeIcon icon={faFacebookF} className="text-white" />
                        </a>

                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3a3a3a] hover:bg-sky-400">
                            <FontAwesomeIcon icon={faTwitter} className="text-white" />
                        </a>

                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3a3a3a] hover:bg-red-500">
                            <FontAwesomeIcon icon={faGooglePlusG} className="text-white" />
                        </a>

                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3a3a3a] hover:bg-pink-500">
                            <FontAwesomeIcon icon={faInstagram} className="text-white" />
                        </a>


                    </div>
                </div>

                <ul className="flex flex-col">
                    <li className="border-t border-gray-200">
                        <NavLink end
                            to={"/account"}
                            className={({ isActive }) =>
                                `relative block w-full px-5 py-2

        ${isActive ? "border-l-3 border-primary-600 " : ""}

        after:content-['']
        after:absolute
        after:left-0  
        after:top-1/2
        after:-translate-y-1/2
        after:border-y-[8px]
        after:border-y-transparent
        after:border-l-[9px]

        ${isActive ? "after:border-l-primary-600" : "after:border-l-transparent"}
        `
                            }
                        >
                            <div className="flex items-center gap-2 pl-2">
                                <FontAwesomeIcon icon={faEdit} className="text-primary-600" />
                                Profile
                            </div>
                        </NavLink>
                    </li>
                    <li className="border-t border-gray-200">
                        <NavLink
                            to={"/chat"} end
                            className={({ isActive }) =>
                                `relative block w-full px-5 py-2 flex justify-between items-center

        ${isActive ? "border-l-3 border-primary-600 " : ""}

        after:content-['']
        after:absolute
        after:left-0  
        after:top-1/2
        after:-translate-y-1/2
        after:border-y-[8px]
        after:border-y-transparent
        after:border-l-[9px]

        ${isActive ? "after:border-l-primary-600" : "after:border-l-transparent"}
        `
                            }
                        >
                            <div className="flex items-center gap-2 pl-2">
                                <FontAwesomeIcon icon={faComments} className="text-primary-600" />
                                Messages
                            </div>
                            <span className="w-6 h-6 flex items-center justify-center text-white bg-primary-600 rounded-full">5</span>
                        </NavLink>
                    </li>
                    <li className="border-t border-gray-200">
                        <NavLink
                            to={"/chat/archeive"}
                            className={({ isActive }) =>
                                `relative block w-full px-5 py-2 flex justify-between items-center

        ${isActive ? "border-l-3 border-primary-600 " : ""}

        after:content-['']
        after:absolute
        after:left-0  
        after:top-1/2
        after:-translate-y-1/2
        after:border-y-[8px]
        after:border-y-transparent
        after:border-l-[9px]

        ${isActive ? "after:border-l-primary-600" : "after:border-l-transparent"}
        `
                            }
                        >
                            <div className="flex items-center gap-2 pl-2">
                                <FontAwesomeIcon icon={faArchive} className="text-primary-600" />
                                Archeives
                            </div>
                            <span className="w-6 h-6 flex items-center justify-center text-white bg-primary-600 rounded-full">5</span>
                        </NavLink>
                    </li>
                    <li className="border-t border-gray-200">
                        <NavLink
                            to={"/account/myfavourites"}
                            className={({ isActive }) =>
                                `relative block w-full px-5 py-2 

        ${isActive ? "border-l-3 border-primary-600 " : ""}

        after:content-['']
        after:absolute
        after:left-0  
        after:top-1/2
        after:-translate-y-1/2
        after:border-y-[8px]
        after:border-y-transparent
        after:border-l-[9px]

        ${isActive ? "after:border-l-primary-600" : "after:border-l-transparent"}
        `
                            }
                        >
                            <div className="flex items-center gap-2 pl-2">
                                <FontAwesomeIcon icon={faStar} className="text-primary-600" />
                                My favourite
                            </div>
                        </NavLink>
                    </li>

                    <li className="border-t border-gray-200">
                        <NavLink
                            to={"/account/myProducts"} className={({ isActive }) =>
                                `relative block w-full px-5 py-2 

        ${isActive ? "border-l-3 border-primary-600 " : ""}

        after:content-['']
        after:absolute
        after:left-0  
        after:top-1/2
        after:-translate-y-1/2
        after:border-y-[8px]
        after:border-y-transparent
        after:border-l-[9px]

        ${isActive ? "after:border-l-primary-600" : "after:border-l-transparent"}
        `
                            }
                        >
                            <div className="flex items-center gap-2 pl-2">
                                <FontAwesomeIcon icon={faTags} className="text-primary-600" />
                                My Products
                            </div>
                        </NavLink>
                    </li>
                    <li className="border-t border-gray-200">
                        <NavLink
                            to={"/account/my-topics"}
                            className={({ isActive }) =>
                                `relative block w-full px-5 py-2 

        ${isActive ? "border-l-3 border-primary-600 " : ""}

        after:content-['']
        after:absolute
        after:left-0  
        after:top-1/2
        after:-translate-y-1/2
        after:border-y-[8px]
        after:border-y-transparent
        after:border-l-[9px]

        ${isActive ? "after:border-l-primary-600" : "after:border-l-transparent"}
        `
                            }
                        >
                            <div className="flex items-center gap-2 pl-2">
                                <FontAwesomeIcon icon={faWpforms} className="text-primary-600" />
                                My forum topics
                            </div>
                        </NavLink>
                    </li>
                    <li className="border-t border-gray-200">
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                `relative block w-full px-5 py-2 

        ${isActive ? "border-l-3 border-primary-600 " : ""}

        after:content-['']
        after:absolute
        after:left-0  
        after:top-1/2
        after:-translate-y-1/2
        after:border-y-[8px]
        after:border-y-transparent
        after:border-l-[9px]

        ${isActive ? "after:border-l-primary-600" : "after:border-l-transparent"}
        `
                            }
                        >
                            <div className="flex items-center gap-2 pl-2">
                                <FontAwesomeIcon icon={faShieldHalved} className="text-primary-600" />
                                Deactivate my account
                            </div>
                        </NavLink>
                    </li>
                    <li className="border-t border-gray-200">
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                `relative block w-full px-5 py-2 

        ${isActive ? "border-l-3 border-primary-600 " : ""}

        after:content-['']
        after:absolute
        after:left-0  
        after:top-1/2
        after:-translate-y-1/2
        after:border-y-[8px]
        after:border-y-transparent
        after:border-l-[9px]

        ${isActive ? "after:border-l-primary-600" : "after:border-l-transparent"}
        `
                            }
                        >
                            <div className="flex items-center gap-2 pl-2">
                                <FontAwesomeIcon icon={faSignOut} className="text-primary-600" />
                                Logout
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div >
        </>
    )
}
