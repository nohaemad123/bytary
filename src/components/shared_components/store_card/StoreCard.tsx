import { Link } from "react-router";
import { useStoreProducts } from "../../../hooks/useStoreProducts";
import type { Store } from "../../../interface/store";

interface LatestCardProps {
    storeDetails: Store;
}

export default function StoreCard({ storeDetails }: LatestCardProps) {

    const { image, name, rate, id } = storeDetails

    const { products, isLoading } = useStoreProducts(id);

    const firstFourProducts = products?.slice(0, 4);

    if (isLoading) return <p>Loading ...</p>;

    return (
        <div className="store wow fadeIn" data-wow-duration="1s">
            <a href="petstore_details.html">
                <div className="ad-archive-img" >
                    <img src={image} className="w-full h-[250px] object-cover" />
                </div>
            </a>

            <div className="ad-archive-desc bg-[#f7f7f7] p-4 relative -mt-1" >
                <a href="petstore_details.html" className=" text-lg font-medium mb-1 capitalize">
                    <h3>{name}</h3>
                </a>
                <div className="rate mb-5 flex gap-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                            key={i}
                            className={`w-4 h-4 ${i < rate ? "text-primary-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.048 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.285-3.974z" />
                        </svg>
                    ))}
                </div>
                {firstFourProducts && firstFourProducts.length > 0 && (
                    <div className="imgs flex gap-x-2">
                        {firstFourProducts.map((product, idx) => (
                            <Link key={idx} to={`/products/${product?.id}`}>
                                <img
                                    className="w-20 h-20 object-cover rounded"
                                    src={product.image}
                                    alt={product.name}
                                />
                            </Link>
                        ))}
                    </div>
                )}
                {!firstFourProducts || firstFourProducts.length === 0 ? (
                    <p className="text-white mt-2">No products available</p>
                ) : null}
                <div className="mt-10" >
                    <a href="petstore_details.html" className="bg-primary-600 hover:bg-primary-900 p-2 text-white rounded-md shadow-sm"><button>View details</button></a>

                </div>
            </div>

        </div>
    )
}
