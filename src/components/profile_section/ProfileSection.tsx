import cat_image from "../../assets/halloween-black-cat.png";
import dog_image from "../../assets/dog.png";
import sheep_image from "../../assets/sheep.png";
import crab_image from "../../assets/crab.png";
import fish_image from "../../assets/fish.png";
import horse_image from "../../assets/jumping-horse-silhouette-facing-left-side-view.png";
import penguin_image from "../../assets/linux-logo.png";
import duck_image from "../../assets/rubber-duck.png";
import camel_image from "../../assets/camel-silhouette.png";
import { Tooltip } from "flowbite-react";
import user_image from "../../assets/1.jpeg";

export default function ProfileSection() {
    return (
        <>
            <div className="bg-white p-3 flex flex-col gap-y-3">
                <div className="grid grid-cols-12  gap-y-10 md:gap-x-10 border-b pb-2 border-gray-200">
                    <div className="col-span-12 md:col-span-3">
                        <p className="text-lg">Name</p>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <p className="text-gray-600">Noha emad</p>
                    </div>
                </div>
                <div className="grid grid-cols-12  gap-y-10 md:gap-x-10 border-b pb-2 border-gray-200">
                    <div className="col-span-12 md:col-span-3">
                        <p className="text-lg">Username</p>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <p className="text-gray-600">Noha emad</p>
                    </div>
                </div>
                <div className="grid grid-cols-12  gap-y-10 md:gap-x-10 border-b pb-2 border-gray-200">
                    <div className="col-span-12 md:col-span-3">
                        <p className="text-lg">Email address</p>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <p className="text-gray-600">info@example.com
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-12  gap-y-10 md:gap-x-10 border-b pb-2 border-gray-200">
                    <div className="col-span-12 md:col-span-3">
                        <p className="text-lg">Phone number</p>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <p className="text-gray-600">00966567962166
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-12  gap-y-10 md:gap-x-10 border-b pb-2 border-gray-200">
                    <div className="col-span-12 md:col-span-3">
                        <p className="text-lg">Address</p>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <p className="text-gray-600">Kingdom of saudi arabic
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-12  gap-y-10 md:gap-x-10 border-b pb-2 border-gray-200">
                    <div className="col-span-12 md:col-span-3">
                        <p className="text-lg">My pets</p>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <div className="flex flex-col md:flex-row gap-x-5">
                            <Tooltip content="Dog" placement="top">
                                <img src={dog_image} w-8 h-8 />
                            </Tooltip>
                            <Tooltip content="Cat" placement="top">
                                <img src={cat_image} w-8 h-8 />
                            </Tooltip>  <Tooltip content="Crab" placement="top">
                                <img src={crab_image} w-8 h-8 />
                            </Tooltip>  <Tooltip content="Fish" placement="top">
                                <img src={fish_image} w-8 h-8 />
                            </Tooltip>  <Tooltip content="Horse" placement="top">
                                <img src={horse_image} w-8 h-8 />
                            </Tooltip>  <Tooltip content="Penguin" placement="top">
                                <img src={penguin_image} w-8 h-8 />
                            </Tooltip>  <Tooltip content="Sheep" placement="top">
                                <img src={sheep_image} w-8 h-8 />
                            </Tooltip>
                            <Tooltip content="Duck" placement="top">
                                <img src={duck_image} w-8 h-8 />
                            </Tooltip>
                            <Tooltip content="Camel" placement="top">
                                <img src={camel_image} w-8 h-8 />
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12  gap-y-10 md:gap-x-10 ">
                    <div className="col-span-12 md:col-span-3">
                        <p className="text-lg">Image</p>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <img src={user_image} className="w-60 h-60 rounded-md" />
                    </div>
                </div>
            </div>
        </>
    )
}
