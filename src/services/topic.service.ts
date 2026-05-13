import type { Topic } from "../interface/Topic";
import { forthapiClient } from "./api-client";



export interface ApiResponse<T = any> {
    success: boolean;
    data: T;
    statusCode: number;
    message?: string;
}

export async function getAllTopicssApi(categoryId: number): Promise<ApiResponse<Topic[]>> {
    try {
        const response = await forthapiClient.get<Topic[]>(`/topics?category_id=${categoryId}`);
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

export async function getTopicDetailsApi(
    topicId: string
) {
    const response = await forthapiClient.request({
        method: "GET",
        url: `/topics/${topicId}`,
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

