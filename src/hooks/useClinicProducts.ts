import { useQuery } from "@tanstack/react-query";
import { getAllClinicProductsApi } from "../services/products.service";
import type { IProduct } from "../interface/Product";

export function useClinicProducts(clinicId: number) {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["clinicProducts", clinicId],
        queryFn: async (): Promise<IProduct[]> => {
            if (!clinicId) return [];

            const res = await getAllClinicProductsApi(clinicId);

            if (!res.success) {
                throw new Error(res.message);
            }

            return res.data;
        },
        enabled: !!clinicId,
    });

    return {
        products: data,
        isLoading,
        isError,
        error,
    };
}
