import { useQuery } from "@tanstack/react-query";
import { getAllStoreProductsApi } from "../services/products.service";
import type { IProduct } from "../interface/Product";

export function useStoreProducts(storeId: number) {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["clinicProducts", storeId],
        queryFn: async (): Promise<IProduct[]> => {
            if (!storeId) return [];

            const res = await getAllStoreProductsApi(storeId);

            if (!res.success) {
                throw new Error(res.message);
            }

            return res.data;
        },
        enabled: !!storeId, // يشغل query بس لو عندنا clinicId
    });

    return {
        products: data,
        isLoading,
        isError,
        error,
    };
}
