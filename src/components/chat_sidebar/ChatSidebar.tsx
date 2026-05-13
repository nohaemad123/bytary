import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user_image from "../../assets/1.jpeg";
import {
    faBoxArchive,
    faComments,
    faEdit,
    faShieldHalved,
    faSignOut,
    faStar,
    faTags
} from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router";
import { faWpforms } from "@fortawesome/free-brands-svg-icons";

export default function ChatSidebar() {
    return (
        <>


            <div className="relative">
                <div className="mb-10 md:mb-0 md:absolute left-0 top-5 z-50 flex flex-col gap-3">

                    <img
                        src={user_image}
                        className="w-[45px] h-[45px] rounded-r-md object-cover"
                    />

                    {/* Profile */}
                    <NavLink to="/account" className="w-fit">
                        {({ isActive }) => (
                            <div
                                className={`
                                    flex items-center
                                    bg-green-500 text-white
                                    rounded-r-md
                                    overflow-hidden
                                    transition-all duration-300
                                    group
                                    cursor-pointer

                                    ${isActive
                                        ? "w-[170px] px-4 py-3"
                                        : "w-[46px] h-[46px] justify-center hover:w-[170px] hover:px-4 hover:justify-start"
                                    }
                                `}
                            >
                                <FontAwesomeIcon
                                    icon={faEdit}
                                    className="min-w-[16px]"
                                />

                                <span
                                    className={`
                                        ml-3 whitespace-nowrap transition-all duration-300

                                        ${isActive
                                            ? "opacity-100 visible"
                                            : "opacity-0 invisible w-0 group-hover:opacity-100 group-hover:visible group-hover:w-auto"
                                        }
                                    `}
                                >
                                    Profile
                                </span>
                            </div>
                        )}
                    </NavLink>

                    {/* Chat */}
                    <NavLink to="/chat" className="w-fit" end>
                        {({ isActive }) => (
                            <div
                                className={`
                                    flex items-center
                                    bg-blue-500 text-white
                                    rounded-r-md
                                    overflow-hidden
                                    transition-all duration-300
                                    group
                                    cursor-pointer

                                    ${isActive
                                        ? "w-[170px] px-4 py-3"
                                        : "w-[46px] h-[46px] justify-center hover:w-[170px] hover:px-4 hover:justify-start"
                                    }
                                `}
                            >
                                <FontAwesomeIcon
                                    icon={faComments}
                                    className="min-w-[16px]"
                                />

                                <span
                                    className={`
                                        ml-3 whitespace-nowrap flex items-center gap-2 transition-all duration-300

                                        ${isActive
                                            ? "opacity-100 visible"
                                            : "opacity-0 invisible w-0 group-hover:opacity-100 group-hover:visible group-hover:w-auto"
                                        }
                                    `}
                                >
                                    Messages

                                    <span className="w-6 h-6 flex items-center justify-center text-white bg-gray-700 rounded-full text-xs">
                                        5
                                    </span>
                                </span>
                            </div>
                        )}
                    </NavLink>

                    {/* Archive */}
                    <NavLink to="/chat/archeive" className="w-fit">
                        {({ isActive }) => (
                            <div
                                className={`
                                    flex items-center
                                    bg-primary-600 text-white
                                    rounded-r-md
                                    overflow-hidden
                                    transition-all duration-300
                                    group
                                    cursor-pointer

                                    ${isActive
                                        ? "w-[170px] px-4 py-3"
                                        : "w-[46px] h-[46px] justify-center hover:w-[170px] hover:px-4 hover:justify-start"
                                    }
                                `}
                            >
                                <FontAwesomeIcon
                                    icon={faBoxArchive}
                                    className="min-w-[16px]"
                                />

                                <span
                                    className={`
                                        ml-3 whitespace-nowrap flex items-center gap-2 transition-all duration-300

                                        ${isActive
                                            ? "opacity-100 visible"
                                            : "opacity-0 invisible w-0 group-hover:opacity-100 group-hover:visible group-hover:w-auto"
                                        }
                                    `}
                                >
                                    Archeive

                                    <span className="w-6 h-6 flex items-center justify-center text-white bg-gray-700 rounded-full text-xs">
                                        5
                                    </span>
                                </span>
                            </div>
                        )}
                    </NavLink>

                    {/* Favourite */}
                    <NavLink to="/account/myfavourites" className="w-fit">
                        {({ isActive }) => (
                            <div
                                className={`
                                    flex items-center
                                    bg-red-500 text-white
                                    rounded-r-md
                                    overflow-hidden
                                    transition-all duration-300
                                    group
                                    cursor-pointer

                                    ${isActive
                                        ? "w-[190px] px-4 py-3"
                                        : "w-[46px] h-[46px] justify-center hover:w-[190px] hover:px-4 hover:justify-start"
                                    }
                                `}
                            >
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className="min-w-[16px]"
                                />

                                <span
                                    className={`
                                        ml-3 whitespace-nowrap transition-all duration-300

                                        ${isActive
                                            ? "opacity-100 visible"
                                            : "opacity-0 invisible w-0 group-hover:opacity-100 group-hover:visible group-hover:w-auto"
                                        }
                                    `}
                                >
                                    My favourite
                                </span>
                            </div>
                        )}
                    </NavLink>

                    {/* Products */}
                    <NavLink to={"/account/myProducts"} className="w-fit">
                        {({ isActive }) => (
                            <div
                                className={`
                                    flex items-center
                                    bg-green-900 text-white
                                    rounded-r-md
                                    overflow-hidden
                                    transition-all duration-300
                                    group
                                    cursor-pointer

                                    ${isActive
                                        ? "w-[190px] px-4 py-3"
                                        : "w-[46px] h-[46px] justify-center hover:w-[190px] hover:px-4 hover:justify-start"
                                    }
                                `}
                            >
                                <FontAwesomeIcon
                                    icon={faTags}
                                    className="min-w-[16px]"
                                />

                                <span
                                    className={`
                                        ml-3 whitespace-nowrap transition-all duration-300

                                        ${isActive
                                            ? "opacity-100 visible"
                                            : "opacity-0 invisible w-0 group-hover:opacity-100 group-hover:visible group-hover:w-auto"
                                        }
                                    `}
                                >
                                    My products
                                </span>
                            </div>
                        )}
                    </NavLink>

                    {/* Forum */}
                    <NavLink to={"/account/my-topics"}
                        className="w-fit">
                        {({ isActive }) => (
                            <div
                                className={`
                                    flex items-center
                                    bg-slate-700 text-white
                                    rounded-r-md
                                    overflow-hidden
                                    transition-all duration-300
                                    group
                                    cursor-pointer

                                    ${isActive
                                        ? "w-[220px] px-4 py-3"
                                        : "w-[46px] h-[46px] justify-center hover:w-[220px] hover:px-4 hover:justify-start"
                                    }
                                `}
                            >
                                <FontAwesomeIcon
                                    icon={faWpforms}
                                    className="min-w-[16px]"
                                />

                                <span
                                    className={`
                                        ml-3 whitespace-nowrap transition-all duration-300

                                        ${isActive
                                            ? "opacity-100 visible"
                                            : "opacity-0 invisible w-0 group-hover:opacity-100 group-hover:visible group-hover:w-auto"
                                        }
                                    `}
                                >
                                    My forum topics
                                </span>
                            </div>
                        )}
                    </NavLink>

                    {/* Deactivate */}
                    <NavLink to="/deactivate" className="w-fit">
                        {({ isActive }) => (
                            <div
                                className={`
                                    flex items-center
                                    bg-gray-600 text-white
                                    rounded-r-md
                                    overflow-hidden
                                    transition-all duration-300
                                    group
                                    cursor-pointer

                                    ${isActive
                                        ? "w-[240px] px-4 py-3"
                                        : "w-[46px] h-[46px] justify-center hover:w-[240px] hover:px-4 hover:justify-start"
                                    }
                                `}
                            >
                                <FontAwesomeIcon
                                    icon={faShieldHalved}
                                    className="min-w-[16px]"
                                />

                                <span
                                    className={`
                                        ml-3 whitespace-nowrap transition-all duration-300

                                        ${isActive
                                            ? "opacity-100 visible"
                                            : "opacity-0 invisible w-0 group-hover:opacity-100 group-hover:visible group-hover:w-auto"
                                        }
                                    `}
                                >
                                    Deactivate my account
                                </span>
                            </div>
                        )}
                    </NavLink>

                    {/* Logout */}
                    <NavLink to="/logout" className="w-fit">
                        {({ isActive }) => (
                            <div
                                className={`
                                    flex items-center
                                    bg-red-600 text-white
                                    rounded-r-md
                                    overflow-hidden
                                    transition-all duration-300
                                    group
                                    cursor-pointer

                                    ${isActive
                                        ? "w-[160px] px-4 py-3"
                                        : "w-[46px] h-[46px] justify-center hover:w-[160px] hover:px-4 hover:justify-start"
                                    }
                                `}
                            >
                                <FontAwesomeIcon
                                    icon={faSignOut}
                                    className="min-w-[16px]"
                                />

                                <span
                                    className={`
                                        ml-3 whitespace-nowrap transition-all duration-300

                                        ${isActive
                                            ? "opacity-100 visible"
                                            : "opacity-0 invisible w-0 group-hover:opacity-100 group-hover:visible group-hover:w-auto"
                                        }
                                    `}
                                >
                                    Logout
                                </span>
                            </div>
                        )}
                    </NavLink>

                </div>
            </div>
        </>
    );
}