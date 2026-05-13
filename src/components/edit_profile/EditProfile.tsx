import cat_image from "../../assets/halloween-black-cat.png";
import dog_image from "../../assets/dog.png";
import sheep_image from "../../assets/sheep.png";
import crab_image from "../../assets/crab.png";
import fish_image from "../../assets/fish.png";
import horse_image from "../../assets/jumping-horse-silhouette-facing-left-side-view.png";
import penguin_image from "../../assets/linux-logo.png";
import duck_image from "../../assets/rubber-duck.png";
import camel_image from "../../assets/camel-silhouette.png";
import Select from "react-select";
import { FileInput } from "flowbite-react";

export default function EditProfile() {

    const options = [
        {
            value: "dog",
            label: (
                <div className="flex items-center gap-2">
                    <img src={dog_image} w-8 h-8 />

                    Dog
                </div>
            ),
        },

        {
            value: "cat",
            label: (
                <div className="flex items-center gap-2">
                    <img src={cat_image} w-8 h-8 />
                    Cat
                </div>
            ),
        },

        {
            value: "fish",
            label: (
                <div className="flex items-center gap-2">
                    <img src={fish_image} w-8 h-8 />
                    Fish
                </div>
            ),
        },
        {
            value: "crab",
            label: (
                <div className="flex items-center gap-2">
                    <img src={crab_image} w-8 h-8 />
                    Crab
                </div>
            ),
        },
        {
            value: "horse",
            label: (
                <div className="flex items-center gap-2">
                    <img src={horse_image} w-8 h-8 />
                    Horse
                </div>
            ),
        },
        {
            value: "penguin",
            label: (
                <div className="flex items-center gap-2">
                    <img src={penguin_image} w-8 h-8 />
                    Penguin
                </div>
            ),
        },
        {
            value: "sheep",
            label: (
                <div className="flex items-center gap-2">
                    <img src={sheep_image} w-8 h-8 />
                    Sheep
                </div>
            ),
        },
        {
            value: "duck",
            label: (
                <div className="flex items-center gap-2">
                    <img src={duck_image} w-8 h-8 />
                    Duck
                </div>
            ),
        },
        {
            value: "camel",
            label: (
                <div className="flex items-center gap-2">
                    <img src={camel_image} w-8 h-8 />
                    Camel
                </div>
            ),
        },
    ];

    return (
        <div className="bg-white px-3 py-5  ">
            <h3 className="text-md font-bold">Manage Your Security Settings</h3>
            <p className="text-sm text-gray-500">Manage Your Account</p>
            <form className="mt-5">
                <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 pb-2 border-gray-200">
                    <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
                        <label className="font-bold">Your name</label>
                        <input type="text" className="w-full border border-gray-400 rounded-sm text-gray-400" placeholder="Name" value="Noha emad" />
                    </div>
                    <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
                        <label className="font-bold">Username</label>
                        <input type="text" className="w-full border border-gray-400 rounded-sm text-gray-400" placeholder="name" value="noha emad" />
                    </div>
                    <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
                        <label className="font-bold">Email address</label>
                        <input type="email" className="w-full border border-gray-400 rounded-sm text-gray-400" placeholder="Email address" value="info@example.com" />
                    </div>
                    <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
                        <label className="font-bold">Contact number</label>
                        <input type="tel" className="w-full border border-gray-400 rounded-sm text-gray-400" placeholder="Username" value="00966567962166" />
                    </div>
                    <div className="col-span-12 flex flex-col gap-y-2">
                        <label className="font-bold">My pets</label>
                        <Select
                            options={options}
                            isMulti
                            className="w-full border border-gray-400 rounded-sm text-gray-400"
                            placeholder="Choose your pets"
                            hideSelectedOptions={false}
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
                        <label className="font-bold">Facebook link</label>
                        <input type="text" className="w-full border border-gray-400 rounded-sm text-gray-400" placeholder="facebook link" />
                    </div>
                    <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
                        <label className="font-bold">Twitter link</label>
                        <input type="tel" className="w-full border border-gray-400 rounded-sm text-gray-400" placeholder="twitter link" />
                    </div>
                    <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
                        <label className="font-bold">Google plus link</label>
                        <input type="email" className="w-full border border-gray-400 rounded-sm text-gray-400" placeholder="google plus link" />
                    </div>
                    <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
                        <label className="font-bold">Instagram link</label>
                        <input type="tel" className="w-full border border-gray-400 rounded-sm text-gray-400" placeholder="instagram link" />
                    </div>
                    <div className="col-span-12 flex flex-col gap-y-2">
                        <label className="font-bold">Address</label>
                        <textarea className="w-full border border-gray-400 rounded-sm text-gray-400" placeholder="address" rows={3}></textarea>
                    </div>
                    <div className="col-span-12 flex flex-col gap-y-2">
                        <label className="font-bold">Image</label>
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
                </div>
                <button className="px-6 py-2 mt-5 bg-primary-600 text-white rounded hover:bg-primary-700" type="submit">Update</button>
            </form>
        </div>
    )
}
