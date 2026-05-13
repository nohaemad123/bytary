import { useQuery } from "@tanstack/react-query";
import { getPharmacyDetailsApi } from "../services/pharmacies.service";

export function usePharmacyDetails(id: string) {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["pharmacy", id],
        queryFn: () => getPharmacyDetailsApi(id),
        enabled: !!id,
    });

    return {
        pharmacy: data?.data,
        isLoading,
        isError,
        error,
    };
}