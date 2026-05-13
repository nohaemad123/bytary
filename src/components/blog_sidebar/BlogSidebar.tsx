import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCategories } from "../../hooks/useCategories";
import { Link } from "react-router";
import { useAllBlogs } from "../../hooks/useAllBlogs";
import MiniBlogCard from "../shared_components/mini_blog_card/MiniBlogCard";

export default function BlogSidebar() {
    const { categories } = useCategories();
    const { allBlogs } = useAllBlogs();
    const secondFourBlogs = allBlogs?.slice(5, 8);

    return (
        <>
            <div className="bg-white rounded-md">
                <h3 className="text-xl font-medium">Search</h3>
                <form className="flex mt-5">
                    <input type="text" className="w-full h-12 border-gray-400 text-gray-400 rounded-tl-sm rounded-bl-sm" placeholder="search for ...." />
                    <button type="submit" className="bg-secondary w-15 text-white border-transparent h-12 rounded-tr-sm rounded-tr-sm "><FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </div>
            <div className="bg-white rounded-md mt-5">
                <h3 className="text-xl font-medium">Categories</h3>
                <div className="flex flex-col gap-y-2 mt-5">
                    {categories?.map((category) => (
                        <div className="flex flex-col gap-x-3 border-b border-gray-200 pb-2">
                            <Link to="/forums" className="block w-full h-full relative">
                                {category.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-5">
                <div className="">
                    <h3 className="border-b-2 border-primary-600 inline-block pb-3 w-fit text-lg font-medium">Featured blogs</h3>
                    <div className="flex flex-col gap-y-5 mt-5">
                        {secondFourBlogs?.map((blog) => (
                            <MiniBlogCard key={blog.id} blogDetails={blog} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
