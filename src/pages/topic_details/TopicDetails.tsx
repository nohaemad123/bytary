import { useParams } from "react-router";
import { useTopicDetails } from "../../hooks/useTopicDetails";
import user_image from "../../assets/1.jpeg";
import cat_image from "../../assets/halloween-black-cat.png";
import dog_image from "../../assets/dog.png";
import { Tooltip } from "flowbite-react";
import { useCategoryDetails } from "../../hooks/useCategoryDetails";
import sheep_image from "../../assets/sheep.png";
import crab_image from "../../assets/crab.png";
import fish_image from "../../assets/fish.png";
import horse_image from "../../assets/jumping-horse-silhouette-facing-left-side-view.png";
import penguin_image from "../../assets/linux-logo.png";
import duck_image from "../../assets/rubber-duck.png";
import camel_image from "../../assets/camel-silhouette.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faComments, faExclamationTriangle, faEye, faReply } from "@fortawesome/free-solid-svg-icons";
import CommentCard from "../../components/shared_components/comment_card/CommentCard";
import { useState } from "react";
import ReplyComponent from "../../components/shared_components/reply_component/ReplyComponent";

export default function TopicDetails() {

    const [modalType, setModalType] = useState<"report" | "reply" | null>(null);
    const [selectedItem, setSelectedItem] = useState<any>(null);

    const { topicId } = useParams<{
        topicId: string;
    }>();

    const { topic, isLoading } = useTopicDetails(topicId!);

    const { category } = useCategoryDetails(topic?.category_id);

    const categoryIcons: Record<number, string> = {
        1: dog_image,
        2: cat_image,
        3: crab_image,
        4: fish_image,
        5: horse_image,
        6: penguin_image,
        7: sheep_image,
        8: duck_image,
        9: camel_image,
        10: camel_image
    };

    function getCategoryIcon(categoryId: number) {
        return categoryIcons[categoryId] || cat_image;
    }



    if (isLoading) return <p>Loading</p>;

    return (
        <>
            <div className="bg-white p-5 rounded-md mb-5">
                <div className="border border-gray-300 mb-5 rounded-md shadow-md p-3">
                    <div className="grid grid-cols-12 gap-5">

                        <div className="col-span-12 md:col-span-3 border-r border-gray-300 pr-5">
                            <div className="flex flex-col items-center gap-y-3">

                                <img src={user_image} className="w-full h-40 rounded-md" />

                                <h3 className="text-xl font-medium">
                                    {topic.username}
                                </h3>

                                <Tooltip content={category?.name} placement="left">
                                    <img
                                        src={getCategoryIcon(topic.category_id)}
                                        className="w-8 h-8 object-contain cursor-pointer"
                                    />
                                </Tooltip>

                            </div>

                        </div>
                        <div className="col-span-12 md:col-span-9">
                            <div className="border-b border-gray-300 pb-3">
                                <div className="flex justify-between items-center w-full">

                                    <span className="text-sm">
                                        <FontAwesomeIcon className="text-primary-600" icon={faCalendarAlt} /> {new Date(topic.createdAt).toLocaleString()}
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
                            <div className="mt-3 flex flex-col gap-y-2">
                                <h3 className="text-lg font-medium">{topic?.name}</h3>
                                <p className="text-gray-500 mb-2">
                                    {topic?.description}
                                </p>
                                <img src={topic?.image} className="rounded-md" alt={topic?.name} />
                                <div className="flex gap-x-3">
                                    <button
                                        onClick={() => {
                                            setModalType("reply");
                                            setSelectedItem(topic);
                                        }}
                                        className="px-4 py-2 bg-red-600 rounded-md text-white cursor-pointer"><FontAwesomeIcon icon={faReply} /></button>
                                    <button
                                        onClick={() => {
                                            setModalType("report");
                                            setSelectedItem(topic);
                                        }}
                                        className="px-4 py-2 bg-primary-600 rounded-md text-white cursor-pointer"><FontAwesomeIcon icon={faExclamationTriangle} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-5 rounded-md ">
                <h3 className="text-lg font-bold mb-5">Comments</h3>
                <div className="mt-8 flex flex-col gap-10">
                    {topic?.comments.map((comment: any) => (
                        <CommentCard key={comment.id} commentDetails={comment}
                            onReply={(comment) => {
                                setModalType("reply");
                                setSelectedItem(comment);
                            }}
                            onReport={(comment) => {
                                setModalType("report");
                                setSelectedItem(comment);
                            }}
                        />
                    ))}
                </div>
            </div>

            {modalType && (
                <ReplyComponent
                    type={modalType}
                    data={selectedItem}
                    onClose={() => setModalType(null)}
                />
            )}
        </>
    )
}


