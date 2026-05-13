import { useQuery } from "@tanstack/react-query";
import { getAllPharmacyProductsApi } from "../services/products.service";
import type { IProduct } from "../interface/Product";

export function usePharmacyProducts(pharmacyId: number) {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["pharmacyProducts", pharmacyId],
        queryFn: async (): Promise<IProduct[]> => {
            if (!pharmacyId) return [];

            const res = await getAllPharmacyProductsApi(pharmacyId);

            if (!res.success) {
                throw new Error(res.message);
            }

            return res.data;
        },
        enabled: !!pharmacyId,
    });

    return {
        products: data,
        isLoading,
        isError,
        error,
    };
}
