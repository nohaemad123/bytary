import { useNavigate } from "react-router";
import { useCategories } from "../../hooks/useCategories";
import ForumCategoriesCard from "../shared_components/forum_categories_card/ForumCategoriesCard";

export default function CategoriesSection({ type }: { type: "forum" | "blog" }) {
    const { categories } = useCategories();

    const navigate = useNavigate();

    function handleClick(categoryId: number) {
        if (type === "forum") {
            navigate(`/forums/${categoryId}`);
        } else {
            navigate(`/blogs/${categoryId}`);
        }
    }
    return (
        <>
            <div className="py-10">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h3 className="main_title mb-10">Our categories</h3>
                    <div className=" md:grid grid-cols-3 gap-10">
                        {categories?.map((category) => (
                            <div
                                key={category.id}
                                onClick={() => handleClick(category.id)}
                                className="cursor-pointer"
                            >
                                <ForumCategoriesCard key={category.id} forumCategroryDetails={category} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
