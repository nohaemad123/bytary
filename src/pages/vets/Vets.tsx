import Banner from "../../components/banner/Banner";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb";
import SearchBox from "../../components/inner_search/InnerSearch";
import VetsCard from "../../components/shared_components/vets_card/VetsCard";
import { useVets } from "../../hooks/useVets";


export default function Vets() {
    const { vets } = useVets();

    return (
        <>
            <Banner title="Vets" />
            <BreadcrumbComponent title="Vets" />
            <div className="py-10">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h3 className="main_title mb-5">Vets</h3>
                    <SearchBox />

                    <div className="mt-8 md:grid grid-cols-3 gap-10">
                        {vets?.map((vet) => (
                            <VetsCard key={vet.id} vetDetails={vet} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
