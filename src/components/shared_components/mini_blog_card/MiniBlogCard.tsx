import type { Blog } from "../../../interface/Blog";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { useCategoryDetails } from "../../../hooks/useCategoryDetails";

interface LatestCardProps {
    blogDetails: Blog;
}
export default function MiniBlogCard({ blogDetails }: LatestCardProps) {


    const { category } = useCategoryDetails(blogDetails?.category_id);



    return (
        <>

            <div className="flex gap-x-3 items-center">
                <img src={blogDetails.image} alt="" className="rounded-tl-md rounded-tr-md w-20 h-20 object-cover" />


                <div className="flex flex-col gap-y-1">
                    <Link to={`/blogs/${blogDetails.category_id}/${blogDetails.id}`} className="text-lg font-medium"><h3>{blogDetails.title}</h3></Link>
                    <p className="text-gray-500"><FontAwesomeIcon icon={faTag} /> {category?.name}</p>
                </div>
            </div>



        </>
    )
}


