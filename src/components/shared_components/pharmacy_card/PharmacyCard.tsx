import { Link } from "react-router";
import type { Pharmacy } from "../../../interface/pharmacy";

interface LatestCardProps {
    pharmacyDetails: Pharmacy;
}

export default function PharmacyCard({ pharmacyDetails }: LatestCardProps) {
    const { image, name, short_description, id } = pharmacyDetails

    return (
        <>
            <div className="group relative mb-5 md:mb-0 overflow-hidden rounded-md transition-all duration-500">

                {/* Image */}
                <Link to={`/pharmacies/${id}`}>
                    <img
                        src={image}
                        className="w-full h-[320px] object-cover"
                    />
                </Link>
                {/* Rotated Layer */}
                <div className="
        absolute left-[-20px] bottom-[-65px] z-0
        w-[120%] h-[170px]
        bg-[rgba(146,199,63,0.65)]
        px-10 pt-2 pb-5
        rotate-[5deg]
        transition-all duration-500

        group-hover:bottom-[-100%]
    ">

                    {/* Content */}
                    <div className="relative rotate-[-5deg] transition-all duration-500 text-white">

                        <i className="fa fa-user absolute right-10 top-10 opacity-40 text-5xl"></i>

                        <h3 className="text-lg font-normal mb-2">
                            {name}
                        </h3>

                        <p className="text-sm">
                            {short_description}
                        </p>

                    </div>
                </div>

                {/* Details Link */}
                <div className="
        absolute left-0 bottom-[-100%] w-full
        bg-[#6a8f31] text-center
        transition-all duration-500

        group-hover:bottom-0
    ">
                    <Link to={`/pharmacies/${id}`}
                        className="block text-white py-3 px-5 text-base tracking-wide"
                    >
                        View Details
                    </Link>
                </div>

            </div></>
    )
}
