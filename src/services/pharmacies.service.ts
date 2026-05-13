import type { Pharmacy } from "../interface/pharmacy";
import { thirdapiClient } from "./api-client";



export interface ApiResponse<T = any> {
    success: boolean;
    data: T;
    statusCode: number;
    message?: string;
}

export async function getAllPharmaciesApi(): Promise<ApiResponse<Pharmacy[]>> {
    try {
        const response = await thirdapiClient.get<Pharmacy[]>("/pharmacies");
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

export async function getPharmacyDetailsApi(id: string) {
    const response = await thirdapiClient.request({
        method: "GET",
        url: `/pharmacies/${id}`,
    });

    return response;
}
