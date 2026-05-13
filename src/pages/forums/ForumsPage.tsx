import { Link, useParams } from "react-router";
import { useTopic } from "../../hooks/useTopics";
import { useCategoryDetails } from "../../hooks/useCategoryDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faEye, faPlus } from "@fortawesome/free-solid-svg-icons";
import user_image from "../../assets/1.jpeg";


export default function ForumsPage() {

    const { categoryId } = useParams<{ categoryId: string }>();

    if (!categoryId) return <p>Invalid topics</p>;

    const { topics, isLoading } = useTopic(Number(categoryId));

    const { category } = useCategoryDetails(Number(categoryId))
    console.log(category)
    if (isLoading || !topics) return <p>Loading ....</p>;

    return (
        <>
            <div className="bg-white p-5 rounded-md">
                <div className="flex flex-col md:flex-row gap-y-3 items-center justify-between">
                    <h3 className="text-secondary text-xl font-bold">{category?.name}</h3>
                    <div className="flex gap-x-5 mb-5">
                        <select className="border border-gray-300 rounded-md px-3 py-2 w-full w-100">
                            <option disabled defaultValue="">Filter</option>
                            <option>Newest</option>
                            <option>From day</option>
                            <option>From weeek</option>
                            <option>From month</option>
                            <option>The oldest</option>
                        </select>
                        <Link to={`/forums/${category?.id}/add-topic`} className="bg-primary-500 text-white rounded-md px-4 py-2 text-center whitespace-nowrap"
                        >
                            <FontAwesomeIcon icon={faPlus} /> Add topic</Link>
                    </div>
                </div>
                {topics?.map((topic) => (
                    <div className="border border-gray-300 mb-5 rounded-md shadow-md p-3">
                        <div className="flex  gap-x-3">
                            <img src={user_image} alt="" className="w-20 h-20 rounded-md" />

                            <div className="flex flex-col gap-y-2 w-full">

                                <Link to={`/forums/${categoryId}/${topic.id}`} className="text-lg font-medium hover:text-primary-600">
                                    <h3>{topic.name}</h3>
                                </Link>

                                <div className="flex flex-col md:flex-row gap-y-3 justify-between items-center w-full">

                                    <span className="text-sm">
                                        {new Date(topic.createdAt).toLocaleString()}
                                    </span>

                                    <div className="flex gap-x-5 text-primary-600">
                                        <span className="flex gap-x-2 items-center">
                                            <FontAwesomeIcon icon={faComments} /> {topic?.comments?.length}
                                        </span>

                                        <span className="flex gap-x-2 items-center">
                                            <FontAwesomeIcon icon={faEye} /> {topic?.views}
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div >
        </>
    )
}
