import type { Blog } from "../interface/Blog";
import { forthapiClient } from "./api-client";



export interface ApiResponse<T = any> {
    success: boolean;
    data: T;
    statusCode: number;
    message?: string;
}

export async function getAllBlogsApi(): Promise<ApiResponse<Blog[]>> {
    try {
        const response = await forthapiClient.get<Blog[]>(`/blogs`);
        return {
            success: true,
            data: response.data,
            statusCode: response.status,
        };
    } catch (error: any) {
        return {
            success: false,
            data: [],
            statusCode: error?.response?.status || 500,
            message: error?.response?.data?.message || error.message || "Network error",
        };
    }
}

export async function getAllBlogsByCategoryIdApi(categoryId: number): Promise<ApiResponse<Blog[]>> {
    try {
        const response = await forthapiClient.get<Blog[]>(`/blogs?category_id=${categoryId}`);
        return {
            success: true,
            data: response.data,
            statusCode: response.status,
        };
    } catch (error: any) {
        return {
            success: false,
            data: [],
            statusCode: error?.response?.status || 500,
            message: error?.response?.data?.message || error.message || "Network error",
        };
    }
}

export async function getBlogDetailsApi(
    topicId: string
) {
    const response = await forthapiClient.request({
        method: "GET",
        url: `/blogs/${topicId}`,
    });

    return response;
}

export async function addTopic(values: any) {
    try {
        const options = {
            method: "POST",
            url: "topics",
            data: values,
        };

        const response = await forthapiClient.request(options);
        return response;
    } catch (error) {
        throw error;
    }
}

