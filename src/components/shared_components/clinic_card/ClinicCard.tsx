import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useClinicProducts } from "../../../hooks/useClinicProducts";
import type { Clinic } from "../../../interface/Clinic";
import { faMap, faPhoneVolume, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

interface LatestCardProps {
    clinicDetails: Clinic;
}

export default function ClinicCard({ clinicDetails }: LatestCardProps) {

    const { image, name, rate, phone, address, id } = clinicDetails
    const { products, isLoading } = useClinicProducts(clinicDetails.id);

    const firstFourProducts = products?.slice(0, 4);

    if (isLoading) return <p>Loading ...</p>;

    return (
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
                        <FontAwesomeIcon icon={faPlus} className="text-lg font-bold" />
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

                {/* Rate */}
                <div className="rate mb-5 flex gap-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                            key={i}
                            className={`w-4 h-4 ${i < rate ? "text-primary-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.048 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.285-3.974z" />
                        </svg>
                    ))}
                </div>

                {/* First 4 Products */}
                {firstFourProducts && firstFourProducts.length > 0 && (
                    <div className="imgs flex gap-x-2">
                        {firstFourProducts.map((product, idx) => (
                            <Link key={idx} to={`/products/${product?.id}`}>
                                <img
                                    className="w-20 h-20 object-cover rounded"
                                    src={product.image}
                                    alt={product.name}
                                />
                            </Link>
                        ))}
                    </div>
                )}
                {!firstFourProducts || firstFourProducts.length === 0 ? (
                    <p className="text-white mt-2">No products available</p>
                ) : null}
            </div>

            {/* Contact Info */}
            <div className="ad-info-1 bg-[#102b34] p-2.5 overflow-hidden w-full">
                <ul className="flex flex-col md:row gap-4 list-none">
                    <li className="number flex  items-center gap-x-2">
                        <FontAwesomeIcon icon={faPhoneVolume} className="text-gray-500" />

                        <a
                            href="#"
                            className="text-[#92c73f] font-bold flex items-center gap-1"
                        >
                            {phone}
                        </a>
                    </li>
                    <li className="flex items-center gap-1 text-white">
                        <FontAwesomeIcon icon={faMap} className="text-gray-500" />

                        <i className="fa fa-map-marker"></i> {address}
                    </li>
                </ul>
            </div>
        </div>
    );
}
