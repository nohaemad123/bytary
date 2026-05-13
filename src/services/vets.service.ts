import type { Vets } from "../interface/vets";
import { secondapiClient } from "./api-client";



export interface ApiResponse<T = any> {
    success: boolean;
    data: T;
    statusCode: number;
    message?: string;
}

export async function getAllVetsApi(): Promise<ApiResponse<Vets[]>> {
    try {
        const response = await secondapiClient.get<Vets[]>("/vets");
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

export async function getVetDetailsApi(id: string) {
    const response = await secondapiClient.request({
        method: "GET",
        url: `/vets/${id}`,
    });

    return response;
}
