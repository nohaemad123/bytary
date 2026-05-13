import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "../../components/banner/Banner";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb";
import { faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGooglePlusG, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    return (
        <>
            <Banner title="Contact us" />
            <BreadcrumbComponent title="Contact us" />
            <div className="py-10">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h3 className="main_title mb-5">Contact us</h3>
                    <div className="col-span-12 md:col-span-6 flex flex-col ">
                        <div className="grid grid-cols-12 pb-2 border-gray-200 mb-5">
                            <div className="col-span-12 md:col-span-4 flex flex-col gap-y-2">
                                <div className="bg-primary-600 w-full p-5 text-white flex flex-col gap-y-3">
                                    <h4 className="text-xl font-medium">Contact info</h4>
                                    <p className="flex gap-x-2 items-center"><FontAwesomeIcon icon={faLocationDot} /> kingdom Of Saudi Arabia</p>
                                    <p className="flex gap-x-2 items-center"><FontAwesomeIcon icon={faEnvelope} /> info@example.com</p>
                                    <p className="flex gap-x-2 items-center"><FontAwesomeIcon icon={faPhoneVolume} />  00966567962166</p>
                                    <h4 className="text-xl font-medium">Follow us</h4>
                                    <div className="flex gap-2 mb-6">
                                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary-600! ">
                                            <FontAwesomeIcon icon={faFacebookF} className="text-primary-600" />
                                        </a>

                                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary-600! ">
                                            <FontAwesomeIcon icon={faTwitter} className="text-primary-600" />

                                        </a>

                                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary-600! ">
                                            <FontAwesomeIcon icon={faGooglePlusG} className="text-primary-600" />
                                        </a>
                                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary-600! ">
                                            <FontAwesomeIcon icon={faInstagram} className="text-primary-600" />
                                        </a>
                                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary-600! ">
                                            <FontAwesomeIcon icon={faLinkedinIn} className="text-primary-600" />
                                        </a>


                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-8 flex flex-col gap-y-2">
                                <div className="bg-[#f7f7f7] p-5 shadow-md">
                                    <h4 className="text-xl font-medium mb-5">We Want To Hear From You!</h4>
                                    <form>
                                        <div className="col-span-12 md:col-span-6 flex flex-col ">
                                            <div className="grid grid-cols-12 pb-2 border-gray-200 mb-5 gap-5">
                                                <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
                                                    <input type="text" placeholder="Your name" className="w-full border-gray-400 text-gray-400 rounded-md" />
                                                </div>
                                                <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
                                                    <input type="email" placeholder="Your email" className="w-full border-gray-400 text-gray-400 rounded-md" />
                                                </div>
                                                <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
                                                    <input type="tel" placeholder="Your phone number" className="w-full border-gray-400 text-gray-400 rounded-md" />
                                                </div>
                                                <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
                                                    <input type="text" placeholder="Your subject" className="w-full border-gray-400 text-gray-400 rounded-md" />
                                                </div>

                                                <div className="col-span-12 md:col-span-12 flex flex-col gap-y-2">
                                                    <textarea className="w-full border border-gray-400 rounded-sm text-gray-400" placeholder="Your message" rows={3}></textarea>
                                                </div>


                                            </div>
                                        </div>
                                        <button className="px-6 py-2 bg-primary-600 text-white rounded hover:bg-primary-700" type="submit">Send message</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
