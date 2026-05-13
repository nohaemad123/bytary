import { FileInput } from "flowbite-react"
import { useLocation } from "react-router";

export default function AddProduct() {

    const location = useLocation();


    return (
        <div className="bg-[#f7f7f7] p-4 rounded-md">
            <h3 className='text-2xl font-medium pb-3 border-b border-gray-300'>{location.pathname.includes("add") ? "Add product" : "Edit product"}</h3>
            <form className="mt-5">
                <div className="grid grid-cols-12 gap-3 md:gap-x-10 md:gap-y-5 pb-2 border-gray-200 items-center">
                    <div className="col-span-12 md:col-span-3 flex flex-col gap-y-3">
                        <label className="font-bold text-sm">Product name</label>
                    </div>
                    <div className="col-span-12 md:col-span-9 flex flex-col gap-y-3">
                        <input type="text" className="w-full border border-gray-400 rounded-sm text-gray-400" placeholder="product name" />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex flex-col gap-y-3">
                        <label className="font-bold text-sm">Product price</label>
                    </div>
                    <div className="col-span-12 md:col-span-9 flex flex-col gap-y-3">
                        <input type="number" className="w-full border border-gray-400 rounded-sm text-gray-400" placeholder="product price" />
                    </div>
                </div>
                <div className="col-span-12 flex flex-col gap-y-3 mt-5">
                    <label className="font-bold text-sm">Product description</label>
                    <textarea className="w-full border border-gray-400 rounded-sm text-gray-400" placeholder="product description" rows={5}></textarea>
                </div>
                <div className="col-span-12 flex flex-col gap-y-3 mt-5">
                    <label className="font-bold text-sm">Product image</label>
                    <div className="flex ">
                        <label
                            htmlFor="dropzone-file"
                            className="flex h-25  w-25 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary-600 bg-gray-50 "
                        >
                            <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                <span className="w-8 h-8 bg-primary-600 rounded-full flex justify-center items-center text-white text-lg">+</span>
                            </div>
                            <FileInput id="dropzone-file" className="hidden" />
                        </label>
                    </div>

                </div>

                <button className="px-6 py-2 mt-5 bg-primary-600 text-white rounded hover:bg-primary-700" type="submit">Add product</button>

            </form >
        </div >
    )
}
