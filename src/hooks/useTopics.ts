import { useQuery } from "@tanstack/react-query";
import { getAllTopicssApi } from "../services/topic.service";
import type { Topic } from "../interface/Topic";

export function useTopic(categoryId: number) {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["topics", categoryId],
        queryFn: async (): Promise<Topic[]> => {
            if (!categoryId) return [];

            const res = await getAllTopicssApi(categoryId);

            if (!res.success) {
                throw new Error(res.message);
            }

            console.log(res.data)

            return res.data;

        },
        enabled: !!categoryId,
    });

    return {
        topics: data,
        isLoading,
        isError,
        error,
    };
}
