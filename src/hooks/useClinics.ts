import { useQuery } from "@tanstack/react-query";
import { getAllClinicsApi } from "../services/clinics.service";

export function useClinics() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["clinics"],
        queryFn: () => getAllClinicsApi(),
    });

    return {
        clinics: data?.data,
        isLoading,
        isError,
        error,
    };
}
