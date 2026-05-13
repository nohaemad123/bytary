import { Tooltip } from "flowbite-react";
import type { Store } from "../../../interface/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faMapMarkerAlt, faPhoneAlt, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { useStoreProducts } from "../../../hooks/useStoreProducts";
import { Link } from "react-router";

interface LatestCardProps {
    storeDetails: Store;
}

export default function StoreCardHorizontal({ storeDetails }: LatestCardProps) {
    const { image, name, rate, short_description, phone, address, email, id } = storeDetails
    const { products, isLoading } = useStoreProducts(id);
    const firstFourProducts = products?.slice(0, 4);

    if (isLoading) return <p>Loading ...</p>;

    return (
        <div className="ads-list-archive wow fadeIn" data-wow-duration="1s">
            <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 shadow-lg text-[#777] rounded-sm border border-[#ddd]">

                <div className="col-span-12 md:col-span-5">
                    <Link to={`/pet-stores/${id}`}>
                        <div className="ad-archive-img w-full">
                            <img src={image} className="w-full h-[300px]" />
                        </div>
                    </Link>
                </div>
                <div className="col-span-12 md:col-span-7">
                    <div className="ad-archive-desc wow fadeInRight p-3 flex flex-col gap-y-3" data-wow-duration="2s">
                        <div className="flex justify-between items-center ">
                            <Link to={`/pet-stores/${id}`} className="text-lg font-bold">
                                <h3>{name}</h3>
                            </Link>
                            <div className="rate flex gap-x-1">
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
                        </div>
                        <p className="text-md text-[#aaa]">{short_description}</p>
                        <ul className="block md:hidden flex flex-col gap-y-3">
                            <p className="flex gap-x-2 items-center"><FontAwesomeIcon icon={faLocationDot} className="text-primary-600" /> kingdom Of Saudi Arabia</p>
                            <p className="flex gap-x-2 items-center"><FontAwesomeIcon icon={faEnvelope} className="text-primary-600" /> info@example.com</p>
                            <p className="flex gap-x-2 items-center"><FontAwesomeIcon icon={faPhoneVolume} className="text-primary-600" />  00966567962166</p>
                        </ul>

                        <ul className="hidden md:block flex gap-x-3">
                            <li className="w-[30px] h-[30px] border border-gray-400 rounded-sm flex justify-center items-center text-sm text-gray-400">
                                <Tooltip content={phone} placement="top" className="text-xs">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                    </a>
                                </Tooltip>
                            </li>

                            <li className="w-[30px] h-[30px] border border-gray-400 rounded-sm flex justify-center items-center text-sm text-gray-400">
                                <Tooltip content={address} placement="top" className="text-xs">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </a>
                                </Tooltip>
                            </li>

                            <li className="w-[30px] h-[30px] border border-gray-400 rounded-sm flex justify-center items-center text-sm text-gray-400">
                                <Tooltip content={email} placement="top" className="text-xs">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </a>
                                </Tooltip>
                            </li>
                        </ul>
                        <div className="flex justify-between items-center flex-col gap-y-3 md:flex-row">

                            {firstFourProducts && firstFourProducts.length > 0 && (
                                <div className="imgs flex gap-x-2">
                                    {firstFourProducts.map((product, idx) => (

                                        <Link key={idx} to={`/products/${product?.id}`}>
                                            <img
                                                className="w-20 border-2 p-2 border-transparent hover:border-2 hover:border-primary-600 h-20 object-cover rounded"
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
                            <div className="button">
                                <a href="petstore_details.html" className="mt-5 px-6 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"><button>View details</button></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
