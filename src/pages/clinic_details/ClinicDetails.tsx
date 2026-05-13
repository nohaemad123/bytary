import { useParams } from "react-router";
import Banner from "../../components/banner/Banner";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb";
import { useClinicDetails } from "../../hooks/useClinicDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClockRotateLeft,
    faEnvelope,
    faMapMarkerAlt,
    faMoneyBill,
    faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { useClinicProducts } from "../../hooks/useClinicProducts";
import ProductCard from "../../components/shared_components/product_card/ProductCard";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import SendMessage from "../../components/send_message/SendMessage";

const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});

export default function ClinicDetails() {
    const { id } = useParams<{ id: string }>();

    if (!id) return <p>Invalid clinic</p>;

    const { clinic, isLoading } = useClinicDetails(id);
    const { products } = useClinicProducts(Number(id));

    const [markerPosition] = useState<[number, number]>([30.0444, 31.2357]);

    if (isLoading || !clinic) return <p>Loading ....</p>;

    return (
        <>
            <Banner title={clinic.name} />
            <BreadcrumbComponent title={clinic.name} secondLinkTo="/pet-clinics" secondLink="Pet clinics" />

            <div className="bg-[#f0f0f0] py-10">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-10 md:gap-x-10">

                        <div className="col-span-12 md:col-span-8">
                            <div className="bg-white p-5 rounded-md">
                                <div className="flex items-center gap-x-3 mb-5">
                                    <h3 className="text-2xl font-bold">{clinic.name}</h3>

                                    <div className="flex gap-x-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${i < clinic.rate
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

                                <div className="flex items-center mt-5 gap-x-2 text-lg mb-5">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    <h3>Location:</h3>
                                    <p className="text-primary-600 font-bold">
                                        {clinic.address}
                                    </p>
                                </div>
                            </div>

                            <img
                                src={clinic.image}
                                className="w-full mt-5 rounded-md"
                                alt={clinic.name}
                            />

                            <div className="bg-white p-5 rounded-md mt-10">
                                {/* DESCRIPTION */}
                                <div className="mb-5">
                                    <h3 className="text-xl font-bold">Description</h3>
                                    <p className="mt-5 text-[#777] leading-[30px]">
                                        {clinic.description}
                                    </p>
                                </div>

                                {/* PRODUCTS */}
                                <div className="mb-5">
                                    <h3 className="text-xl font-bold">Products</h3>
                                    <div className="mt-5 grid md:grid-cols-3 gap-5">
                                        {products?.map((product: any) => (
                                            <ProductCard
                                                key={product.id}
                                                productDetails={product}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-5">
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
                                            <Popup>{clinic.name}</Popup>
                                        </Marker>
                                    </MapContainer>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-4 h-fit">

                            <div className="p-5 rounded-md bg-white">
                                <div className="flex gap-x-3 items-center mb-5">
                                    <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full border-2 border-black text-[20px]">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <p className="text-lg font-medium">{clinic.email}</p>
                                </div>

                                <div className="flex gap-x-3 items-center mb-5">
                                    <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full border-2 border-black text-[20px]">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <p className="text-lg font-medium">{clinic.phone}</p>
                                </div>

                                <div className="flex gap-x-3 mb-5">
                                    <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full border-2 border-black text-[20px]">
                                        <FontAwesomeIcon icon={faClockRotateLeft} />
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <p className="text-lg font-medium mb-3">
                                            Working hours
                                        </p>

                                        {clinic.working_hours?.[0] &&
                                            Object.entries(
                                                clinic.working_hours[0] as Record<string, string>
                                            ).map(([day, time]) => (
                                                <div
                                                    key={day}
                                                    className="flex justify-between text-sm mb-1"
                                                >
                                                    <span className="font-medium">{day}</span>
                                                    <span className="text-gray-600">{time}</span>
                                                </div>
                                            ))}
                                    </div>
                                </div>

                                <div className="flex gap-x-3 items-center">
                                    <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full border-2 border-black text-[20px]">
                                        <FontAwesomeIcon icon={faMoneyBill} />
                                    </div>
                                    <p className="text-lg font-medium">
                                        {clinic.price} EGP
                                    </p>
                                </div>
                            </div>

                            <SendMessage />



                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}