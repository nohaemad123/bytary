import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCategories } from "../../hooks/useCategories";
import { Link } from "react-router";
import ads1 from "../../assets/advertise-here.gif";

export default function ForumSidebar() {
    const { categories } = useCategories();


    return (
        <>
            <div className="bg-white p-5 rounded-md">
                <h3 className="text-xl font-medium">Search</h3>
                <form className="flex mt-5">
                    <input type="text" className="w-full h-12 border-gray-400 text-gray-400 rounded-tl-sm rounded-bl-sm" placeholder="search for ...." />
                    <button type="submit" className="bg-secondary w-15 text-white border-transparent h-12 rounded-tr-sm rounded-tr-sm "><FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </div>
            <div className="bg-white p-5 rounded-md mt-5">
                <h3 className="text-xl font-medium">Categories</h3>
                <div className="flex flex-col gap-y-2 mt-5">
                    {categories?.map((category) => (
                        <div className="flex gap-x-3 border-b border-gray-200 pb-2">
                            <Link to="/forums" className="block w-full h-full relative">
                                {category.name}
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-5">
                <img
                    src={ads1}
                    alt="Ad 1 mt-5"
                    className="w-full md:h-120 h-140 rounded-lg shadow-lg"
                />
            </div>
        </>
    )
}
