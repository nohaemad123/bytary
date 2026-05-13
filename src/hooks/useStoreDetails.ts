import { useQuery } from "@tanstack/react-query";
import { getStoreDetailsApi } from "../services/stores.services";

export function useStoreDetails(id: string) {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["store", id],
        queryFn: () => getStoreDetailsApi(id),
        enabled: !!id,
    });

    return {
        store: data?.data,
        isLoading,
        isError,
        error,
    };
}