import type { Blog } from "../../../interface/Blog";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { useCategoryDetails } from "../../../hooks/useCategoryDetails";

interface LatestCardProps {
    blogDetails: Blog;
}

export default function BlogCard({ blogDetails }: LatestCardProps) {



    function formatDate(dateString: string) {
        const date = new Date(dateString);

        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();

        return { day, month };
    }

    const { day, month } = formatDate(blogDetails.createdAt);

    const { category } = useCategoryDetails(blogDetails?.category_id);



    return (
        <>
            <div className="blog_card border mb-5 border-gray-300 rounded-md">
                <img src={blogDetails.image} alt="" className="rounded-tl-md rounded-tr-md  w-full h-[350px] object-cover" />
                <div className="bg-white p-4 rounded-bl-md rounded-br-md">
                    <div className="flex gap-x-3 items-center">
                        <div className="w-15 h-15 rounded-full bg-primary-600 text-white flex flex-col items-center justify-center font-bold">
                            <span className="text-lg">{day}</span>
                            <span className="text-sm">{month}</span>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <Link to={`/blogs/${blogDetails.category_id}/${blogDetails.id}`} className="text-lg font-medium"><h3>{blogDetails.title}</h3></Link>
                            <p className="text-gray-500"><FontAwesomeIcon icon={faTag} /> {category?.name}</p>
                        </div>
                    </div>

                    <p className="mt-5 text-[#666] leading-[30px]">{blogDetails?.shortDescription}</p>
                </div>
            </div>

        </>
    )
}
