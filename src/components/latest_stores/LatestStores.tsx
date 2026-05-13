import { useStores } from "../../hooks/useStores";
import StoreCard from "../shared_components/store_card/StoreCard";

export default function LatestStores() {

    const { stores } = useStores();
    const firstThreeStores = stores?.slice(0, 3);

    return (
        <div className="px-4 py-10 ">
            <div className="max-w-screen-xl mx-auto ">
                <h3 className="main_title">Latest stores</h3>
                <div className="mt-8 grid md:grid-cols-3 gap-10">
                    {firstThreeStores?.map((store) => (
                        <StoreCard key={store.id} storeDetails={store} />
                    ))}
                </div>
            </div>
        </div>
    )
}
