import { Link } from "react-router";
import type { Categories } from "../../../interface/Categories";

interface LatestCardProps {
    forumCategroryDetails: Categories;
}

export default function ForumCategoriesCard({ forumCategroryDetails }: LatestCardProps) {
    return (
        <div className="text-center mb-5 md:mb-0">

            {/* Card */}
            <div
                className="group w-[220px] h-[220px]  mx-auto rounded-full"
                style={{ perspective: "900px" }}
            >
                <Link to={`/forums/${forumCategroryDetails.id}`} className="block w-full h-full relative">

                    {/* Image */}
                    <div className="absolute inset-0 rounded-full">
                        <img
                            src={forumCategroryDetails.image}
                            className="w-full h-full object-cover rounded-full"
                        />

                        {/* Inner Border */}
                        <div className="absolute inset-2 rounded-full border-2 border-white pointer-events-none"></div>
                    </div>

                    {/* Flip Container */}
                    <div
                        className="absolute inset-0 transition-all duration-500"
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >

                        {/* Front (empty عشان الصورة هي الواجهة) */}
                        <div className="absolute inset-0 rounded-full backface-hidden"></div>

                        {/* Back */}
                        <div
                            className="absolute inset-0 rounded-full flex items-center justify-center bg-black/60 text-white text-xl tracking-wider"
                            style={{
                                transform: "rotateY(180deg)",
                                backfaceVisibility: "hidden",
                            }}
                        >
                            {forumCategroryDetails.name}
                        </div>

                    </div>

                    {/* Hover Effect */}
                    <style>
                        {`
                .group:hover div[style*="preserve-3d"] {
                    transform: rotateY(-180deg);
                }
                `}
                    </style>

                </Link>
            </div>

            {/* Title */}

            <Link to={`/forums/${forumCategroryDetails.id}`} className="mt-5 font-bold text-xl">{forumCategroryDetails.name}</Link>
        </div>)
}
