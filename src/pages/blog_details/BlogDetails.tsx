import { useParams } from "react-router";
import { useCategoryDetails } from "../../hooks/useCategoryDetails";
import { useBlogDetails } from "../../hooks/useBlogDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faTag } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function BlogDetails() {

    const { blogId } = useParams<{
        blogId: string;
    }>();

    const { blog, isLoading } = useBlogDetails(blogId!);
    const { category } = useCategoryDetails(blog?.category_id);

    if (isLoading) return <p>Loading</p>

    return (
        <>
            <img src={blog?.image} alt="" className="rounded-md" />
            <div className="flex flex-col gap-y-2">
                <h3 className="text-lg font-medium mt-5">{blog.title}</h3>
                <div className="flex gap-x-5 text-gray-600 items-center">
                    <p className="flex gap-x-2 items-center"><FontAwesomeIcon icon={faTag} /> {category?.name}</p>
                    <p className="flex gap-x-2 items-center"><FontAwesomeIcon icon={faCalendarAlt} /> {blog?.createdAt}</p>
                </div>
                <p className="text-gray-500">{blog.description}</p>

                <div className="flex gap-x-3">
                    <h3 className="text-xl font-medium">Share</h3>
                    <div className="flex gap-4 mb-6">
                        <a className="w-10 h-10 flex items-center justify-center rounded-full border border-primary-600 hover:bg-primary-600 hover:text-white transition">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a className="w-10 h-10 flex items-center justify-center rounded-full border border-primary-600 hover:bg-primary-600 hover:text-white transition">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>

                        <a className="w-10 h-10 flex items-center justify-center rounded-full border border-primary-600 hover:bg-primary-600 hover:text-white transition">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
