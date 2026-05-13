import { useQuery } from "@tanstack/react-query";
import { getAllPharmaciesApi } from "../services/pharmacies.service";

export function usePharmacies() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["pharmacies"],
        queryFn: () => getAllPharmaciesApi(),
    });

    return {
        pharmacies: data?.data,
        isLoading,
        isError,
        error,
    };
}
