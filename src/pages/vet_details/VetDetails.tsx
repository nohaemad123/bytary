import { useParams } from "react-router";
import { useVetDetails } from "../../hooks/useVetDetails";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb";
import Banner from "../../components/banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhoneVolume, faUserGroup, faUserMd } from "@fortawesome/free-solid-svg-icons";
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

export default function VetDetails() {
    const { id } = useParams<{ id: string }>();
    if (!id) return <p>Invalid clinic</p>;

    const { vet, isLoading } = useVetDetails(id);
    const [markerPosition] = useState<[number, number]>([30.0444, 31.2357]);

    if (isLoading || !vet) return <p>Loading ....</p>;

    return (
        <>
            <Banner title={vet.name} />
            <BreadcrumbComponent title={vet.name} secondLinkTo={"/vets"} secondLink="Vets" />
            <div className="bg-[#f0f0f0] py-10">
                <div className="max-w-screen-xl mx-auto">
                    <div className="bg-white p-5 rounded-md mb-10">
                        <div className="grid grid-cols-12 gap-y-10 md:gap-x-10">
                            <div className="col-span-12 md:col-span-4">
                                <img src={vet.image} alt={vet.name} className="w-full" />
                            </div>
                            <div className="col-span-12 md:col-span-8">
                                <div className="flex items-center gap-x-3 mb-5">
                                    <h3 className="text-2xl font-bold">{vet.name}</h3>

                                    <div className="flex gap-x-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${i < vet.rate
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
                                <div className="flex flex-col gap-y-3">
                                    <p className="flex gap-x-2 items-center text-gray-500"><FontAwesomeIcon icon={faLocationDot} className="text-primary-600" />{vet.address}</p>
                                    <div className="flex flex-col md:flex-row gap-y-3 gap-x-10">
                                        <p className="flex gap-x-2 items-center text-gray-500"><FontAwesomeIcon icon={faPhoneVolume} className="text-primary-600" />{vet.phone}</p>
                                        <p className="flex gap-x-2 items-center text-gray-500"><FontAwesomeIcon icon={faEnvelope} className="text-primary-600" />{vet.email}</p>
                                    </div>
                                    <p className="flex gap-x-2 items-center text-gray-500"><span className="text-primary-600"><FontAwesomeIcon icon={faUserMd} /> Specification:</span>{vet.specification}</p>
                                    <p className="flex gap-x-2 items-center text-gray-500"><span className="text-primary-600"><FontAwesomeIcon icon={faUserGroup} /> Number of clients:</span>{vet.clients}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-y-10 md:gap-x-10">

                        <div className="col-span-12 md:col-span-8">
                            <div className="bg-white p-5 rounded-md">
                                <h3 className="text-xl font-bold mb-5">Description:</h3>
                                <p className="mt-5 text-[#777] leading-[30px]">
                                    {vet.description}
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <h3 className="bg-primary-600 text-white font-bold hover:bg-primary-600 py-5 px-5 text-xl rounded-tl-md rounded-tr-md">Our location:</h3>
                            <div className="bg-white p-5 rounded-bl-md rounded-br-md">
                                <div className="w-full overflow-hidden ">
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
                                            <Popup>{vet.name}</Popup>
                                        </Marker>
                                    </MapContainer>
                                </div>
                            </div>

                            <SendMessage />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
