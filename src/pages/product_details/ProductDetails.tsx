import { useParams } from "react-router";
import Banner from "../../components/banner/Banner";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb";
import { useProductDetails } from "../../hooks/useProductDetails";

export default function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const { product, isLoading } = useProductDetails(id!);

    if (isLoading || !product) return <p>Loading ....</p>;
    return (
        <>
            <Banner title={product?.name} />
            <BreadcrumbComponent title={product?.name} />
            <div className="bg-[#f0f0f0] py-10">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-10 md:gap-x-10">

                        {/* LEFT SIDE */}
                        <div className="col-span-12 md:col-span-5">
                            <div className="bg-white p-5 rounded-md">
                                <img
                                    src={product.image}
                                    className="w-full mt-5 rounded-md"
                                    alt={product.name}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-7">
                            <div className="bg-white p-5 rounded-md flex flex-col gap-y-3">
                                <h3 className="text-2xl font-bold">{product.name}</h3>
                                <p className="text-primary-600 font-bold text-lg">
                                    {product.price} EGP
                                </p>
                                <p className="text-[#777] leading-[30px]">{product.description}</p>
                            </div>
                        </div>
                    </div></div>
            </div>
        </>

    )
}
