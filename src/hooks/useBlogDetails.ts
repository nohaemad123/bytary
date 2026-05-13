import { useQuery } from "@tanstack/react-query";
import { getTopicDetailsApi } from "../services/topic.service";
import { getBlogDetailsApi } from "../services/blog.service";

export function useBlogDetails(id: string) {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["blog", id],
        queryFn: () => getBlogDetailsApi(id),
        enabled: !!id,
    });

    return {
        blog: data?.data,
        isLoading,
        isError,
        error,
    };
}