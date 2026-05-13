import { useQuery } from "@tanstack/react-query";
import { getAllVetsApi } from "../services/vets.service";

export function useVets() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["vets"],
        queryFn: () => getAllVetsApi(),
    });

    return {
        vets: data?.data,
        isLoading,
        isError,
        error,
    };
}
