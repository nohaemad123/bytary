import type { Comment } from "../../../interface/Comment";
import user_image from "../../../assets/1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faExclamationTriangle, faReply } from "@fortawesome/free-solid-svg-icons";
interface LatestCardProps {
    commentDetails: Comment;
    onReply: (comment: Comment) => void;
    onReport: (comment: Comment) => void;
}

export default function CommentCard({ commentDetails, onReply, onReport }: LatestCardProps) {

    return (
        <div className="flex flex-col md:flex-row items-center gap-5 md:items-start">

            {/* User */}
            <div className="w-[120px] text-center border border-gray-300 p-1 rounded-md">
                <img
                    src={user_image}
                    className="w-full mb-3 object-cover rounded-md border"
                />
                <p className="mt-2 font-medium">{commentDetails?.username}</p>
            </div>

            {/* Comment */}
            <div className="relative flex-1">

                {/* Arrow Border */}
                <div className="absolute -left-3 top-6 w-0 h-0 
                    border-t-[10px] border-t-transparent 
                    border-b-[10px] border-b-transparent 
                    border-r-[10px] border-r-gray-300">
                </div>

                {/* Arrow White */}
                <div className="absolute -left-[11px] top-6 w-0 h-0 
                    border-t-[9px] border-t-transparent 
                    border-b-[9px] border-b-transparent 
                    border-r-[9px] border-r-white">
                </div>

                {/* Box */}
                <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm">

                    {/* Header */}
                    <div className="flex   justify-between items-center border-b border-gray-300 pb-3 mb-3">

                        {/* Date */}
                        <p className="flex items-center gap-2 text-sm text-gray-700">
                            <FontAwesomeIcon className="text-primary-600" icon={faCalendarAlt} />
                            {new Date(commentDetails.createdAt).toLocaleString()}
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-x-3">
                            <button className="px-4 py-2 bg-red-600 rounded-md text-white cursor-pointer"
                                onClick={() => onReply(commentDetails)}

                            ><FontAwesomeIcon icon={faReply} /></button>
                            <button
                                onClick={() => onReport(commentDetails)}
                                className="px-4 py-2 bg-primary-600 rounded-md text-white cursor-pointer"><FontAwesomeIcon icon={faExclamationTriangle} /></button>
                        </div>

                    </div>

                    {/* Content */}
                    <p className="text-gray-700 leading-7 text-sm">
                        {commentDetails.content}
                    </p>

                </div>

            </div>

        </div>
    );
}