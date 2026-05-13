import Banner from "../../components/banner/Banner";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb";
import SearchBox from "../../components/inner_search/InnerSearch";
import ClinicCard from "../../components/shared_components/clinic_card/ClinicCard";
import { useClinics } from "../../hooks/useClinics";

export default function PetClinic() {
    const { clinics } = useClinics();

    return (
        <>
            <Banner title="Pet clinics" />
            <BreadcrumbComponent title="Pet clinics" />
            <div className="py-10">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h3 className="main_title mb-5">Pet clinics</h3>
                    <SearchBox />

                    <div className="mt-8 md:grid grid-cols-3 gap-10">
                        {clinics?.map((clinic) => (
                            <ClinicCard key={clinic.id} clinicDetails={clinic} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
