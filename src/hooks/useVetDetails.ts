import { useQuery } from "@tanstack/react-query";
import { getVetDetailsApi } from "../services/vets.service";

export function useVetDetails(id: string) {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["vet", id],
        queryFn: () => getVetDetailsApi(id),
        enabled: !!id,
    });

    return {
        vet: data?.data,
        isLoading,
        isError,
        error,
    };
}