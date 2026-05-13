import { useQuery } from "@tanstack/react-query";
import { getProductDetailsApi } from "../services/products.service";

export function useProductDetails(id: string) {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["product", id],
        queryFn: () => getProductDetailsApi(id),
        enabled: !!id,
    });

    return {
        product: data?.data,
        isLoading,
        isError,
        error,
    };
}