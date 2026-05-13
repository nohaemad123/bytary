import { Link } from "react-router";
import type { Clinic } from "../../../interface/Clinic";
import type { Store } from "../../../interface/store";

interface LatestCardProps {
    cardDetails: Store | Clinic
}

export default function LatestCard({ cardDetails }: LatestCardProps) {
    const { name, image, rate, id } = cardDetails;
    return (
        <>
            <div className="flex flex-col items-center gap-y-2">
                <img src={image} alt="" className="w-full h-30" />
                <Link to={`/pet-clinics/${id}`}>
                    <h4 className="text-[16px] font-medium">{name}</h4></Link>
                <div className="flex">
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
        </>
    )
}
