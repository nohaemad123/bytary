import { useParams } from "react-router";
import { useBlog } from "../../hooks/useBlog";
import BlogCard from "../../components/shared_components/blog_card/BlogCard";

export default function Blogs() {

    const { categoryId } = useParams<{ categoryId: string }>();
    if (!categoryId) return <p>Invalid blogs</p>;

    const { blogs, isLoading } = useBlog(Number(categoryId));


    return (
        <>
            <h3 className="main_title">Blogs</h3>
            <div className="mt-8 flex flex-col gap-10">
                {blogs?.map((blog) => (
                    <BlogCard key={blog.id} blogDetails={blog} />
                ))}
            </div>
        </>
    )
}
