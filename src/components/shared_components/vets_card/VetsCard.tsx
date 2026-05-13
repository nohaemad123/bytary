import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Vets } from "../../../interface/vets";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

interface LatestCardProps {
    vetDetails: Vets;
}

export default function VetsCard({ vetDetails }: LatestCardProps) {

    const { image, description, name, id } = vetDetails
    return (
        <>
            <div className="group mt-10 z-3 rounded-md border-t border-r border-[#eee] border-l-[5px] border-b-[5px] border-l-[#92c73f] border-b-[#92c73f] overflow-hidden">

                <Link to={`/vets/${id}`}>
                    <div className="relative text-center">

                        {/* Image */}
                        <img
                            src={image}
                            className="w-full h-[350px] object-cover"
                        />

                        {/* Overlay Description */}
                        <p className="absolute inset-0 text-white text-sm leading-7 px-10 py-10 bg-[rgba(59,51,106,0.6)]
                opacity-0 transition-all duration-500
                group-hover:opacity-100">
                            {description}
                        </p>

                        {/* Social Icon */}
                        <ul
                            className="absolute top-1/2 left-0 
    -translate-y-1/2 z-5

    w-[85px] h-[85px] bg-[#92c73f]
    flex items-center justify-center rounded-md text-white

    opacity-0
    -translate-x-[120%]
    transition-all duration-500

    group-hover:opacity-100
    group-hover:-translate-x-1/2
">
                            <a href="vets_details.html">
                                <li className="text-2xl flex items-center justify-center w-full h-full">
                                    <FontAwesomeIcon icon={faUser} />
                                </li>
                            </a>
                        </ul>

                    </div>
                </Link>

                {/* Info */}
                <div className="p-5 text-center">
                    <Link to={`/vets/${id}`}>

                        <h3 className="text-lg font-bold text-[#3b336a] mb-4">
                            {name}
                        </h3>
                    </Link>



                    <Link to="/send-message">
                        <button className="bg-[#92c73f] text-white px-8 py-2 text-lg rounded-md 
                shadow-[0_1px_2px_0_rgba(60,64,67,0.302),0_1px_3px_1px_rgba(60,64,67,0.149)]
                hover:shadow-[0_1px_3px_0_rgba(60,64,67,0.302),0_4px_8px_3px_rgba(60,64,67,0.149)]
                transition-all duration-300 ">
                            Send Message
                        </button>
                    </Link>

                </div>

            </div>
        </>
    )
}
