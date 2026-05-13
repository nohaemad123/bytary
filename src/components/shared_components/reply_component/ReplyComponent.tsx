import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
    type: "report" | "reply";
    data: any;
    onClose: () => void;
}

export default function ReplyComponent({ type, data, onClose }: ModalProps) {

    return (
        <>
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/50 flex items-center justify-center">
                <div className="p-5 rounded-md w-[500px] shadow-md"
                    onClick={(e) => e.stopPropagation()}
                >

                    <div className="bg-secondary p-3 py-3 text-white flex justify-between rounded-tl-md rounded-tr-md">
                        <p className="text-sm ">
                            {type === "report" ? "Report" : "Reply"} to - {data?.name || data?.content}
                        </p>
                        <button onClick={onClose} className="cursor-pointer"><FontAwesomeIcon icon={faTimes} /></button>

                    </div>

                    <div className="bg-white rounded-bl-md rounded-br-md p-5">
                        <textarea className="w-full border border-gray-400 text-sm text-gray-400 rounded-md  p-2 mb-3" rows={5} placeholder="Description" />

                        <div className=" gap-2">
                            <button className="bg-primary-600 text-white px-4 py-2 rounded-sm">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}