import { useQuery } from "@tanstack/react-query";
import { getTopicDetailsApi } from "../services/topic.service";

export function useTopicDetails(id: string) {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["topic", id],
        queryFn: () => getTopicDetailsApi(id),
        enabled: !!id,
    });

    return {
        topic: data?.data,
        isLoading,
        isError,
        error,
    };
}