import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user_image from "../../assets/1.jpeg";
import { faDeleteLeft, faFolderOpen, faThumbTack, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "flowbite-react";


export default function Archeive() {
    return (
        <>
            <div className="bg-white overflow-hidden flex">
                <div className="grid grid-cols-12 gap-x-10 gap-y-5 pb-2 border-gray-200 w-full">

                    <div className="col-span-12 md:col-span-4 border-r border-gray-200">

                        <div className="flex justify-between items-center p-4">
                            <h4 className="text-lg font-semibold text-gray-600">My messages</h4>

                            <div className="hidden md:flex gap-2">
                                <Tooltip content="Archeive" placement="bottom" className="text-xs">
                                    <a href="#" className="">
                                        <FontAwesomeIcon icon={faFolderOpen} className="text-lg text-primary-600" />
                                    </a>
                                </Tooltip>
                                <Tooltip content="Delete" placement="bottom" className="text-xs">
                                    <a href="#" className="">
                                        <FontAwesomeIcon icon={faTrash} className="text-lg text-primary-600" />
                                    </a>
                                </Tooltip>

                            </div>
                        </div>

                        <div className=" md:h-[788px] overflow-y-auto border-t border-gray-200">
                            <ul className="flex flex-col">

                                <li className="relative border-b border-gray-200 hover:bg-gray-50 transition">
                                    <a href="messages.html" className="flex items-center gap-3 p-4">

                                        <input type="checkbox" className="mt-1 cursor-pointer" />

                                        <img src={user_image} className="w-12 h-12 rounded-full" />

                                        <div className="flex-1 relative">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-gray-800">John Doe</span>
                                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            </div>

                                            <p className="text-sm text-gray-500">Message</p>

                                            <span className="absolute right-0 top-0 text-xs text-gray-400">
                                                7 Days Ago
                                            </span>
                                        </div>

                                    </a>

                                    <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 hover:opacity-100 transition">
                                        <Tooltip content="Archeive" placement="bottom" className="text-xs">
                                            <a href="#" className="">
                                                <FontAwesomeIcon icon={faFolderOpen} className="text-lg text-primary-600" />
                                            </a>
                                        </Tooltip>
                                        <Tooltip content="Delete" placement="bottom" className="text-xs">
                                            <a href="#" className="">
                                                <FontAwesomeIcon icon={faTrash} className="text-lg text-primary-600" />
                                            </a>
                                        </Tooltip>
                                        <Tooltip content="Pin" placement="bottom" className="text-xs">
                                            <a href="#" className="">
                                                <FontAwesomeIcon icon={faThumbTack} className="text-lg text-primary-600" />
                                            </a>
                                        </Tooltip>

                                    </div>
                                </li>


                            </ul>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-8 ">

                        <div className="p-6 mt-3 md:mt-0 border-t-3 border-gray-400 flex flex-col md:flex-row justify-between items-start border-b border-gray-200">

                            <div className="flex items-center gap-3">
                                <img src={user_image} className="w-12 h-12 rounded-full" />
                                <div>
                                    <h5 className="font-semibold text-gray-800">John Doe</h5>
                                    <span className="text-sm text-gray-400">7 Days Ago</span>
                                </div>
                            </div>

                            <div className="text-right">
                                <label className="text-sm text-gray-600 block mb-2">Rate This Chat:</label>
                                <div className="flex gap-1 text-yellow-400">
                                    ★ ★ ★ ★ ★
                                </div>
                            </div>

                        </div>

                        <div className="md:h-[590px]  overflow-y-auto p-4 space-y-3 bg-gray-50">

                            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                                <img src={user_image} className="w-12 h-12 rounded-full" />

                                <div className="bg-gray-200 
                                relative
                                text-gray-800 p-3 rounded-lg w-full">
                                    <div className="absolute left-[-6px] top-3 w-0 h-0 
              border-t-[7px] border-t-transparent
              border-b-[7px] border-b-transparent
              border-r-[7px] border-r-gray-200">
                                    </div>
                                    hiiiiiiiii
                                    <div className="text-xs text-gray-500 mt-1 md:text-right">Today At 8:53 PM</div>
                                </div>
                            </div>

                            <div className="flex w-full flex-col md:flex-row items-center md:items-start gap-3">

                                <div className="bg-blue-600 relative text-white p-3 rounded-lg w-full">
                                    <div className="absolute right-[-6px] top-3 w-0 h-0
              border-t-[7px] border-t-transparent
              border-b-[7px] border-b-transparent
              border-l-[7px] border-l-blue-700">
                                    </div>
                                    hiiiiiii
                                    <div className="text-xs text-gray-200 mt-1 md:text-right">Today At 8:53 PM</div>
                                </div>

                                <img src={user_image} className="w-12 h-12 rounded-full" />
                            </div>

                        </div>

                        <div className="bg-gray-100 p-4 flex flex-col w-full md:flex-row gap-3 items-center">

                            <input
                                type="text"
                                placeholder="Type Your Message Here"
                                className="flex-1 p-3 w-full rounded border text-gray-500 border-gray-300 focus:outline-none"
                            />

                            <button className="bg-green-500 text-white px-6 py-2">
                                Send
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
