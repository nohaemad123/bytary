import { useQuery } from "@tanstack/react-query";
import { getClinicDetailsApi } from "../services/clinics.service";

export function useClinicDetails(id: string) {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["clinic", id],
        queryFn: () => getClinicDetailsApi(id),
        enabled: !!id,
    });

    return {
        clinic: data?.data,
        isLoading,
        isError,
        error,
    };
}