import { useQuery } from "@tanstack/react-query";
import { getAllBlogsApi } from "../services/blog.service";
import type { Blog } from "../interface/Blog";

export function useAllBlogs() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["allBlogs"],
        queryFn: async (): Promise<Blog[]> => {

            const res = await getAllBlogsApi();

            if (!res.success) {
                throw new Error(res.message);
            }

            console.log(res.data)

            return res.data;

        },
    });

    return {
        allBlogs: data,
        isLoading,
        isError,
        error,
    };
}
