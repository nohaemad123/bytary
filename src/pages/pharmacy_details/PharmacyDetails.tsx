import { useParams } from "react-router";
import { usePharmacyDetails } from "../../hooks/usePharmacyDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { usePharmacyProducts } from "../../hooks/usePharmacyProducts";
import ProductCard from "../../components/shared_components/product_card/ProductCard";
import { Icon } from "leaflet";
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import SendMessage from "../../components/send_message/SendMessage";
const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});
export default function PharmacyDetails() {
    const { id } = useParams<{ id: string }>();
    const { pharmacy, isLoading } = usePharmacyDetails(id!);
    const { products } = usePharmacyProducts(Number(id));

    const [markerPosition] = useState<[number, number]>([30.0444, 31.2357]);
    if (isLoading || !pharmacy) return <p>Loading ....</p>;
    return (
        <>


            {/* Header */}
            <div className="relative mb-8">

                {/* Image */}
                <div className="relative">
                    <img
                        src={pharmacy.image}
                        className="w-full h-[250px] md:h-[500px] "
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent z-10"></div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 z-20">
                    <div className="max-w-screen-xl mx-auto">

                        {/* Title + Rate */}
                        <div className="flex flex-col md:flex-row  flex-wrap items-center gap-4 mb-4">

                            <h1 className="text-3xl font-semibold tracking-wide">
                                {pharmacy.name}
                            </h1>

                            <div className="flex gap-x-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-4 h-4 ${i < pharmacy.rate
                                            ? "text-primary-600"
                                            : "text-gray-300"
                                            }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.048 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.285-3.974z" />
                                    </svg>
                                ))}
                            </div>

                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col md:flex-row flex-wrap gap-x-12 gap-y-2">

                            <p className="flex gap-x-2 items-center text-gray-500"><FontAwesomeIcon icon={faPhoneVolume} className="text-primary-600" />{pharmacy.phone}</p>


                            <p className="flex gap-x-2 items-center text-gray-500"><FontAwesomeIcon icon={faEnvelope} className="text-primary-600" />{pharmacy.email}</p>


                        </div>

                    </div>
                </div>

            </div>

            <div className=" py-10">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-10 md:gap-x-10">
                        <div className="col-span-12 md:col-span-8">
                            <div className="relative mb-10" >
                                <img
                                    src={pharmacy.image}
                                    className="w-full h[250px] md:h-[500px] "
                                />

                            </div>
                            <h3 className="text-xl font-bold mb-5">Description:</h3>
                            <p className="mt-5 text-[#777] leading-[30px]">
                                {pharmacy.description}
                            </p>

                            <div className="mt-5">
                                <h3 className="text-xl font-bold">Products</h3>
                                <div className="mt-5 grid md:grid-cols-3 gap-5">
                                    {products?.map((product: any) => (
                                        <ProductCard
                                            key={product.id}
                                            productDetails={product}
                                        />
                                    ))}

                                </div>
                                {!products || products.length === 0 ? (
                                    <p className="text-white mt-2">No products available</p>
                                ) : null}
                            </div>
                            <div className="mt-5">
                                <h3 className="text-xl font-bold mb-5">Location</h3>
                                <MapContainer
                                    center={markerPosition}
                                    zoom={13}
                                    className="w-full h-[250px] rounded-md"
                                    scrollWheelZoom
                                >
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution="&copy; OpenStreetMap contributors"
                                    />
                                    <Marker position={markerPosition} icon={customIcon}>
                                        <Popup>{pharmacy.name}</Popup>
                                    </Marker>
                                </MapContainer>

                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <div className="border rounded-md border-gray-300 gap-y-5 p-5 flex flex-col">
                                <h1 className="text-2xl font-semibold tracking-wide">
                                    {pharmacy.name}
                                </h1>
                                <p className="text-[#777]">{pharmacy.address}</p>

                                <p className="flex gap-x-2 items-center text-gray-500"><FontAwesomeIcon icon={faPhoneVolume} className="text-primary-600" />{pharmacy.phone}</p>


                                <p className="flex gap-x-2 items-center text-gray-500"><FontAwesomeIcon icon={faEnvelope} className="text-primary-600" />{pharmacy.email}</p>

                            </div>
                            <SendMessage />
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
