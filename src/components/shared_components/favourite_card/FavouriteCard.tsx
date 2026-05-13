import type { IFavourite } from '../../../interface/Favourite';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

interface favouriteCardProps {
    clinicDetails: IFavourite;
}

export default function FavouriteCard({ clinicDetails }: favouriteCardProps) {
    const { image, name, description, id } = clinicDetails

    return (
        <>






            <div className="clinic wow fadeIn mb-5" data-wow-duration="1s">
                {/* Image + Zoom Button + Hover Effect */}
                <figure className="relative overflow-hidden group">
                    <img
                        src={image}
                        className="w-full h-[250px] object-cover"
                        alt={name}
                    />
                    {/* Zoom Button Overlay */}
                    <Link to={`/pet-clinics/${id}`}
                        className="absolute inset-0 flex justify-center items-center bg-primary-600/0 opacity-0 group-hover:bg-primary-600/50 group-hover:opacity-100 transition duration-300"
                    >
                        <div className="w-10 h-10 rounded-full bg-[#363c48] flex justify-center items-center text-white">
                            <i className="fa fa-plus leading-[40px]"></i>
                            <FontAwesomeIcon icon={faTrash} className="text-lg font-bold" />
                        </div>
                    </Link>

                    {/* Diagonal Overlay Effect */}
                    <span className="absolute inset-0 bg-primary-600/45 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity delay-100"></span>
                </figure>

                {/* Clinic Description */}
                <div className="desc bg-[#38455e] p-4 relative -mt-1">
                    <h3 className="text-white text-lg font-normal mb-1 capitalize">
                        <Link to={`/pet-clinics/${id}`}
                        >{name}</Link>
                    </h3>
                    <p className='text-gray-300'>{description}</p>
                </div>
            </div>


        </>
    )
}
