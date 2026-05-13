import { useQuery } from "@tanstack/react-query";
import { getCategoryDetails } from "../services/categories.service";

export function useCategoryDetails(id?: number) {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["category", id],
        queryFn: () => getCategoryDetails(id!),
        enabled: !!id,
    });

    console.log(data?.data)

    return {
        category: data?.data,
        isLoading,
        isError,
        error,
    };
}