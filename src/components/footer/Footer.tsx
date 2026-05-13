import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/fd.png";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGooglePlusG, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import google_play from "../../assets/google_play.png";
import app_store from "../../assets/appstore.png";
import { Link } from "react-router";

export default function Footer() {
    return (
        <>
            <footer className="bg-[#222222] text-gray-400 pt-16 pb-12">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="grid md:grid-cols-12 gap-10">

                        {/* Left Section */}
                        <div className="md:col-span-4">
                            <div className="grid grid-cols-12 items-center gap-4">
                                <div className="col-span-5 flex justify-center">
                                    <img src={logo} className="w-20" />
                                </div>

                                <div className="col-span-7 space-y-3 text-sm">
                                    <p className="flex items-center gap-3">
                                        <FontAwesomeIcon icon={faPhone} className="text-lg text-primary-600" />
                                        00966567962166
                                    </p>

                                    <p className="flex items-center gap-3">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-lg text-primary-600" />
                                        <a href="mailto:info@example.com" className="hover:text-primary-600">
                                            info@example.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <p className="mt-6 text-sm leading-6">
                                This is Photoshop's version of Lorem Ipsum proin grav ida nibh vel velit auctor ali quet aenean sollicitudin, lorquis bibendum
                            </p>
                        </div>

                        {/* Middle Section */}
                        <div className="md:col-span-5">
                            <div className="grid grid-cols-2 gap-8">

                                <div>
                                    <h3 className="text-sky-500 font-semibold mb-6 uppercase">
                                        Quick Links
                                    </h3>

                                    <div className="space-y-3 text-sm *:hover:text-primary-600">
                                        <p ><Link to={"/about"}>About Us</Link></p>
                                        <p><Link to={"/contact"}>Contact Us</Link></p>
                                        <p><Link to={"/signin"}>Login</Link></p>
                                        <p><Link to={"/signup"}>Register</Link></p>
                                        <p><a href="bytary_map.html">Bytary Map</a></p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sky-500 font-semibold mb-6 uppercase">
                                        Be A Partner
                                    </h3>

                                    <div className="space-y-3 text-sm *:hover:text-primary-600">
                                        <p><Link to={"/clinic-register"}>Pet Clinic</Link></p>
                                        <p><Link to={"/vet-register"} >Vets</Link></p>
                                        <p><Link to={"/store-register"}>Pet Store</Link></p>
                                        <p><Link to={"/pharmacy-register"}>Pharmacy</Link></p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Social Section */}
                        <div className="md:col-span-3">
                            <h3 className="text-sky-500 font-semibold mb-6 uppercase">
                                Our Social
                            </h3>

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

                                <a className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3a3a3a] hover:bg-blue-700">
                                    <FontAwesomeIcon icon={faLinkedinIn} className="text-white" />
                                </a>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <img src={google_play} />
                                <img src={app_store} />
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

            {/* Copyright */}
            <div className="bg-[#111] text-center text-gray-400 py-3 text-sm">
                All Rights reserved DTAG Solutios
            </div>
        </>
    );
}