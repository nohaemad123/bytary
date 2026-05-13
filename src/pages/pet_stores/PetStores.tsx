import Banner from "../../components/banner/Banner";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb";
import SearchBox from "../../components/inner_search/InnerSearch";
import StoreCardHorizontal from "../../components/shared_components/store_card2/StoreCardHorizontal";
import { useStores } from "../../hooks/useStores";

export default function PetStores() {

    const { stores } = useStores();

    return (
        <>
            <Banner title="Pet stores" />
            <BreadcrumbComponent title="Pet stores" />
            <div className="py-10">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h3 className="main_title mb-5">Pet stores</h3>
                    <SearchBox />

                    <div className="mt-8 flex flex-col gap-10">
                        {stores?.map((store) => (
                            <StoreCardHorizontal key={store.id} storeDetails={store} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
