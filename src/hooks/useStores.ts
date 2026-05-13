import { useQuery } from "@tanstack/react-query";
import { getAllStoresApi } from "../services/stores.services";

export function useStores() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["stores"],
        queryFn: () => getAllStoresApi(),
    });

    return {
        stores: data?.data,
        isLoading,
        isError,
        error,
    };
}
