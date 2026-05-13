import type { Clinic } from "../interface/Clinic";
import { secondapiClient } from "./api-client";



export interface ApiResponse<T = any> {
    success: boolean;
    data: T;
    statusCode: number;
    message?: string;
}

export async function getAllClinicsApi(): Promise<ApiResponse<Clinic[]>> {
    try {
        const response = await secondapiClient.get<Clinic[]>("/clinics");
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

export async function getClinicDetailsApi(id: string) {
    const response = await secondapiClient.request({
        method: "GET",
        url: `/clinics/${id}`,
    });

    return response;
}
