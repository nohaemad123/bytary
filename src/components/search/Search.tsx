import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import SearchForm from "../search_form/SearchForm";

const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});

export default function MapWithSearch() {
    const markerPosition: [number, number] = [30.0444, 31.2357];

    return (
        <div className="relative w-full">
            <MapContainer
                center={markerPosition}
                zoom={13}
                className="w-full h-[500px]"
                scrollWheelZoom={true}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                />
                <Marker position={markerPosition} icon={customIcon}>
                    <Popup>Marker in Cairo</Popup>
                </Marker>
            </MapContainer>

            <SearchForm />
        </div>

    );
}
