import { faEnvelope, faPhoneVolume, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from 'flowbite-react';
import { faFacebookF, faGooglePlusG, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router";

export default function Header() {
    return (
        <>
            <header>
                <nav className="bg-primary-600 text-white px-4 lg:px-6 py-2.5 dark:bg-gray-800 w-full">
                    <div className="flex flex-col lg:flex-row justify-between items-center max-w-screen-xl mx-auto gap-y-4">

                        {/* Left: phone + email */}
                        <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 sm:gap-x-5 text-sm">
                            <p className="flex items-center gap-1">
                                <FontAwesomeIcon icon={faPhoneVolume} /> 00966567962166
                            </p>
                            <p className="flex items-center gap-1">
                                <FontAwesomeIcon icon={faEnvelope} /> info@example.com
                            </p>
                        </div>

                        {/* Middle: Links */}
                        <ul className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium">
                            <li>
                                <Link to={"/signin"} className="pr-4 border-r border-white">Login</Link>
                            </li>
                            <li>
                                <Link to={"/signup"} className="pr-4 border-r border-white">Register</Link>
                            </li>
                            <li>
                                <Link to={"/account"} className="pr-4 border-r border-white">My account</Link>
                            </li>
                            <li>
                                <Tooltip content="My favourite" placement="left" className="text-xs">
                                    <Link to={"/account/myfavourites"} className="pr-4 border-r border-white">
                                        <FontAwesomeIcon icon={faStar} />
                                    </Link>
                                </Tooltip>
                            </li>
                            <li>
                                <a href="" className="pr-4 border-r border-white">Logout</a>
                            </li>
                            <li>
                                <Link to={"/about"} >About bytary</Link>
                            </li>
                        </ul>

                        {/* Right: Social Icons */}
                        <ul className="flex gap-3 mt-2 lg:mt-0">
                            {[faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn, faInstagram].map((icon, idx) => (
                                <li key={idx}>
                                    <a className="relative w-[35px] h-[35px] flex items-center justify-center text-white rounded-full overflow-hidden transition-colors duration-150 group" href="#">
                                        <span className="absolute w-0 h-0 bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 group-hover:w-[45px] group-hover:h-[45px]"></span>
                                        <FontAwesomeIcon icon={icon} className="relative z-10 text-[14px] transition-colors duration-150 group-hover:text-[#92c73f]" />
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>
                </nav>
            </header>

        </>
    )
}
