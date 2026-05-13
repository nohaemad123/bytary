import type { IProduct } from "../interface/Product";
import { firstapiClient } from "./api-client";

export interface ApiResponse<T = any> {
    success: boolean;
    data: T;
    statusCode: number;
    message?: string;
}

export async function getAllClinicProductsApi(
    clinicId: number
): Promise<ApiResponse<IProduct[]>> {
    try {
        const response = await firstapiClient.get<IProduct[]>(
            `/products?clinicId=${clinicId}`
        );

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

export async function getAllStoreProductsApi(
    storeId: number
): Promise<ApiResponse<IProduct[]>> {
    try {
        const response = await firstapiClient.get<IProduct[]>(
            `/products?storeId=${storeId}`
        );

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

export async function getAllPharmacyProductsApi(
    pharmacyId: number
): Promise<ApiResponse<IProduct[]>> {
    try {
        const response = await firstapiClient.get<IProduct[]>(
            `/products?pharmacyId=${pharmacyId}`
        );

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

export async function getProductDetailsApi(
    productId: string
) {
    const response = await firstapiClient.request({
        method: "GET",
        url: `/products/${productId}`,
    });

    return response;
}
