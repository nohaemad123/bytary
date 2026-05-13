import { useClinics } from "../../hooks/useClinics";
import ClinicCard from "../shared_components/clinic_card/ClinicCard";

export default function LatestClinics() {

    const { clinics } = useClinics();
    const firstFourClinics = clinics?.slice(0, 3);



    return (
        <div className="px-4 py-10 bg-third">
            <div className="max-w-screen-xl mx-auto ">
                <h3 className="main_title">Latest clinics</h3>
                <div className="mt-8 grid md:grid-cols-3 gap-10">
                    {firstFourClinics?.map((clinic) => (
                        <ClinicCard key={clinic.id} clinicDetails={clinic} />
                    ))}
                </div>
            </div>
        </div >
    )
}
