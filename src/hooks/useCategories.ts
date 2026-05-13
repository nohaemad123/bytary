import { useQuery } from "@tanstack/react-query";
import { getAllCategoriesApi } from "../services/categories.service";

export function useCategories() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["categories"],
        queryFn: () => getAllCategoriesApi(),
    });

    return {
        categories: data?.data,
        isLoading,
        isError,
        error,
    };
}
