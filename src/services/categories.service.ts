import type { Categories } from "../interface/Categories";
import { thirdapiClient } from "./api-client";

export interface ApiResponse<T = any> {
    success: boolean;
    data: T;
    statusCode: number;
    message?: string;
}

export async function getAllCategoriesApi(): Promise<ApiResponse<Categories[]>> {
    try {
        const response = await thirdapiClient.get<Categories[]>("/categories");
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

export async function getCategoryDetails(id: string | number) {
    const res = await thirdapiClient.get(`/categories/${id}`);
    console.log(res.data)
    return res;
}