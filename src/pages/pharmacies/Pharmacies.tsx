import Banner from "../../components/banner/Banner";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb";
import SearchBox from "../../components/inner_search/InnerSearch";
import PharmacyCard from "../../components/shared_components/pharmacy_card/PharmacyCard";
import { usePharmacies } from "../../hooks/usePharmacy";

export default function Pharmacies() {

    const { pharmacies } = usePharmacies();


    return (
        <>
            <Banner title="Pharmacies" />
            <BreadcrumbComponent title="Pharmacies" />
            <div className="py-10">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h3 className="main_title mb-5">Pharmacies</h3>
                    <SearchBox />

                    <div className="mt-8 md:grid grid-cols-3 gap-10">
                        {pharmacies?.map((pharmacy) => (
                            <PharmacyCard key={pharmacy.id} pharmacyDetails={pharmacy} />
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}
