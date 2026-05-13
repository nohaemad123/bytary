import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import { addTopic } from "../../services/topic.service";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";

export default function AddTopic() {
    const [showTitlePicker, setShowTitlePicker] = useState(false);
    const [showDescriptionPicker, setShowDescriptionPicker] = useState(false);
    const { categoryId } = useParams<{ categoryId: string }>();
    const navigate = useNavigate();
    const titlePickerRef = useRef<HTMLDivElement>(null);
    const descriptionPickerRef = useRef<HTMLDivElement>(null);

    async function SendDataAddTopic(values: any) {
        try {
            const response = await addTopic(values);
            if (response) {
                toast.success("topic added successfully");

                setTimeout(() => {
                    navigate(`/forums/${categoryId}`);
                }, 3000);
            } else {
            }
        } catch (error: any) {
            toast.error(error);
        }
    }


    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            createdAt: new Date(),
            views: 0,
            category_id: categoryId,
            image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
            username: "noha emad",
            comments: []
        },
        onSubmit: SendDataAddTopic
    });

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                titlePickerRef.current &&
                !titlePickerRef.current.contains(event.target as Node)
            ) {
                setShowTitlePicker(false);
            }

            if (
                descriptionPickerRef.current &&
                !descriptionPickerRef.current.contains(event.target as Node)
            ) {
                setShowDescriptionPicker(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
            <div className="bg-white p-5 rounded-md">
                <h3 className="text-secondary text-xl font-bold border-b border-gray-200 pb-5">Add topic</h3>
                <form className="mt-5"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 items-center">
                        <div className="col-span-12 md:col-span-3">
                            <label
                                htmlFor="title_input"
                                className="text-primary-600 text-lg font-medium">Topic title:</label>
                        </div>
                        <div className="col-span-12 md:col-span-9">
                            <div className="relative">
                                <input type="text"
                                    id="title_input"
                                    value={formik.values.name}
                                    name="name"

                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="w-full border-gray-400 text-gray-400 rounded-md" placeholder="title" />
                                <button
                                    type="button"
                                    onClick={() => setShowTitlePicker(!showTitlePicker)}
                                    className="absolute right-2 bottom-2"
                                >
                                    😊
                                </button>
                                {showTitlePicker && (
                                    <div className="absolute z-50" ref={titlePickerRef}>
                                        <EmojiPicker
                                            onEmojiClick={(emojiData) => {
                                                formik.setFieldValue(
                                                    "name",
                                                    formik.values.name + emojiData.emoji
                                                );
                                            }}
                                        />
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col mt-5 gap-y-3 mb-5">
                        <label
                            htmlFor="description_input"
                            className="text-primary-600 text-lg font-medium">Description:</label>
                        <div className="relative">
                            <textarea rows={5}
                                id="description_input"
                                value={formik.values.description}
                                name="description"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border-gray-400 text-gray-400 rounded-md" placeholder="description"></textarea>
                            <button
                                type="button"
                                onClick={() => setShowDescriptionPicker(!showDescriptionPicker)}
                                className="absolute right-2 bottom-2"
                            >
                                😊
                            </button>
                            {showDescriptionPicker && (
                                <div className="absolute z-50" ref={descriptionPickerRef}>
                                    <EmojiPicker
                                        onEmojiClick={(emojiData) => {
                                            formik.setFieldValue(
                                                "description",
                                                formik.values.description + emojiData.emoji
                                            );
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn flex gap-2 px-2 mt-5 items-center text-center rounded-md py-2 justify-center bg-primary-600 dark:text-gray-900 dark:bg-primary-400 text-white hover:bg-primary-700 transition-colors duration-500"
                    >
                        <span>Submit</span>
                    </button>
                </form>
            </div >
        </>
    )
}
