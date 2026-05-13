import { Tooltip } from "flowbite-react";
import type { IProduct } from "../../../interface/Product";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

interface LatestCardProps {
    productDetails: IProduct;
}


export default function MyProductCard({ productDetails }: LatestCardProps) {
    return (
        <div className="border-2 border-gray-400 rounded-xl overflow-hidden my-3">
            <div className="relative overflow-hidden group">

                <img
                    src={productDetails?.image}
                    className="w-full h-[200px] object-cover"
                />

                <div
                    className="absolute inset-0 bg-black/50 opacity-0 invisible translate-y-1/2 skew-x-[-6deg] transition-all duration-300
      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
                ></div>

                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      opacity-0 invisible scale-50 transition-all duration-300 flex gap-x-3
      group-hover:opacity-100 group-hover:visible group-hover:scale-100 z-50"
                >
                    <Tooltip content="Edit product" placement="left" className="text-xs w-fit">
                        <Link to={`/account/edit-product`}
                            className="flex items-center justify-center w-[45px] h-[45px] border border-white rounded-full text-white text-lg"
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </Link>
                    </Tooltip>
                    <Tooltip content="Delete product" placement="right" className="text-xs w-fit">
                        <Link to={``}
                            className="flex items-center justify-center w-[45px] h-[45px] border border-white rounded-full text-white text-lg"
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </Link>
                    </Tooltip>
                </div>

            </div>

            <div className="p-3">
                <h5 className="font-semibold text-lg">{productDetails?.name}</h5>
                <div className="text-gray-600">
                    <span>{productDetails?.price} EGP</span>
                </div>
            </div>
        </div>
    )
}
