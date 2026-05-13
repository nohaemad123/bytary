import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { useStores } from "../../hooks/useStores";
import LatestCard from "../shared_components/latest_card/LatestCard";
import ads1 from "../../assets/advertise-here.gif";
import { useClinics } from "../../hooks/useClinics";

export default function HomeAds() {
    const { stores, isLoading } = useStores();
    const { clinics } = useClinics();

    if (isLoading) return <h4>Loading...</h4>;

    const firstFourStores = stores?.slice(0, 4);
    const firstFourClinics = clinics?.slice(0, 4);


    return (
        <div className="px-4 py-20">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Column 1: Featured Stores */}
                <div className="relative">
                    {/* Header with icons */}
                    <div className="flex items-center justify-center gap-x-4 text-xl font-semibold text-gray-900">
                        <FontAwesomeIcon icon={faPaw} className="text-primary-600" />
                        <h4 className="font-bold uppercase">Latest Stores</h4>
                        <FontAwesomeIcon icon={faPaw} className="text-primary-600" />
                    </div>

                    {/* Caption */}
                    <div className="absolute top-12 left-0 right-0 z-10 text-center">
                        <p className="inline-block uppercase bg-white px-4 tracking-widest text-green-500 font-bold text-base">
                            Featured Stores
                        </p>
                    </div>

                    {/* Stores grid */}
                    <div className="mt-8 px-6 py-8 rounded-md border-2 border-gray-200">
                        <div className="grid grid-cols-2 gap-4">
                            {firstFourStores?.map((store) => (
                                <LatestCard key={store.id} cardDetails={store} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Column 2: Ad */}
                <div className="flex items-center justify-center">
                    <img
                        src={ads1}
                        alt="Ad 1"
                        className="w-full md:h-120 h-140 rounded-lg shadow-lg"
                    />
                </div>

                {/* Column 3: Empty or future content */}
                <div className="relative">
                    <div className="flex items-center justify-center gap-x-4 text-xl font-semibold text-gray-900">
                        <FontAwesomeIcon icon={faPaw} className="text-primary-600" />
                        <h4 className="font-bold uppercase">Most viewed</h4>
                        <FontAwesomeIcon icon={faPaw} className="text-primary-600" />
                    </div>

                    {/* Caption */}
                    <div className="absolute top-12 left-0 right-0 z-10 text-center">
                        <p className="inline-block uppercase bg-white px-4 tracking-widest text-green-500 font-bold text-base">
                            Pet clinics
                        </p>
                    </div>

                    <div className="mt-8 px-6 py-8 rounded-md border-2 border-gray-200">
                        <div className="grid grid-cols-2 gap-4">
                            {firstFourClinics?.map((clinic) => (
                                <LatestCard key={clinic.id} cardDetails={clinic} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
