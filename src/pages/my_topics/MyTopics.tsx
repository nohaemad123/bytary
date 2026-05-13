import { Link } from "react-router";
import type { Topic } from "../../interface/Topic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faEye } from "@fortawesome/free-solid-svg-icons";
import user_image from "../../assets/1.jpeg";

export default function MyTopics() {

    const topics: Topic[] = [
        {
            categoryId: 1,
            "createdAt": "2026-03-02T09:20:00",
            "name": "Best food for puppies",
            "username": "Noha",
            "views": 50,
            "description": "Puppies need balanced food with protein, vitamins, and healthy fats to grow properly.",
            "comments": [
                {
                    "id": "1",
                    "content": "Try changing the food",
                    "username": "Ahmed",
                    "createdAt": "2026-03-02T09:20:00"
                },
                {
                    "id": "2",
                    "content": "Maybe he is sick",
                    "username": "Sara",
                    "createdAt": "2026-03-02T09:20:00"
                }
            ],
            "id": 1
        },
        {
            "createdAt": "2026-03-02T09:20:00",
            "name": "My cat is not eating",
            "username": "Sara",
            "views": 20,
            "description": "Loss of appetite in cats can be due to stress or illness.",
            "comments": [
                {
                    "id": "1",
                    "content": "Check with a vet",
                    "username": "Noha",
                    "createdAt": "2026-03-02T09:20:00"
                },
                {
                    "id": "2",
                    "content": "Try wet food",
                    "username": "Omar",
                    "createdAt": "2026-03-02T09:20:00"
                }
            ],
            categoryId: 1,
            "id": 2
        },
    ]
    return (
        <div className="bg-[#f7f7f7] p-4 rounded-md">
            <div className='flex justify-between items-center pb-3 border-b border-gray-300 mb-5'>
                <h3 className='text-2xl font-medium'>My topics</h3>
                <Link to={`/account/add-my-topic`} className="bg-primary-500 text-white rounded-md px-4 py-2 text-center whitespace-nowrap"
                >
                    Add topic</Link>
            </div>

            {topics?.map((topic) => (
                <div className="border border-gray-300 mb-5 rounded-md shadow-md p-3 bg-white">
                    <div className="flex gap-x-3">
                        <img src={user_image} alt="" className="w-20 h-20 rounded-md" />

                        <div className="flex flex-col gap-y-2 w-full">

                            <Link to={`/`} className="text-lg font-medium hover:text-primary-600">
                                <h3>{topic.name}</h3>
                            </Link>

                            <div className="flex flex-col md:flex-row justify-between items-center w-full">

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
        </div>
    )
}
