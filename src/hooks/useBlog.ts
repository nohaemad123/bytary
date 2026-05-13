import { useQuery } from "@tanstack/react-query";
import { getAllBlogsByCategoryIdApi } from "../services/blog.service";
import type { Blog } from "../interface/Blog";

export function useBlog(categoryId: number) {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["blogs", categoryId],
        queryFn: async (): Promise<Blog[]> => {
            if (!categoryId) return [];

            const res = await getAllBlogsByCategoryIdApi(categoryId);

            if (!res.success) {
                throw new Error(res.message);
            }

            console.log(res.data)

            return res.data;

        },
        enabled: !!categoryId,
    });

    return {
        blogs: data,
        isLoading,
        isError,
        error,
    };
}
