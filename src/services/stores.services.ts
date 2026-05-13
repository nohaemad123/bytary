import type { Store } from "../interface/store";
import { firstapiClient } from "./api-client";



export interface ApiResponse<T = any> {
    success: boolean;
    data: T;
    statusCode: number;
    message?: string;
}

export async function getAllStoresApi(): Promise<ApiResponse<Store[]>> {
    try {
        const response = await firstapiClient.get<Store[]>("/stores");
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

export async function getStoreDetailsApi(id: string) {
    const response = await firstapiClient.request({
        method: "GET",
        url: `/stores/${id}`,
    });

    return response;
}
