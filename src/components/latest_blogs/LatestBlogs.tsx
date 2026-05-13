import { useAllBlogs } from "../../hooks/useAllBlogs";
import BlogCard from "../shared_components/blog_card/BlogCard";
import MiniBlogCard from "../shared_components/mini_blog_card/MiniBlogCard";

export default function LatestBlogs() {
    const { allBlogs } = useAllBlogs();
    const firstFourBlogs = allBlogs?.slice(0, 4);
    const secondFourBlogs = allBlogs?.slice(5, 8);
    const thirdFourBlogs = allBlogs?.slice(9, 12);

    return (
        <>
            <div className="bg-[#f0f0f0] py-10">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-10 md:gap-x-10">

                        {/* LEFT SIDE */}
                        <div className="col-span-12 md:col-span-8">
                            <h3 className="main_title ">Latest blogs</h3>
                            <div className="mt-8 md:grid grid-cols-2 gap-8">
                                {firstFourBlogs?.map((blog) => (
                                    <BlogCard key={blog.id} blogDetails={blog} />
                                ))}
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <div className="mb-5">
                                <h3 className="border-b-2 border-primary-600 inline-block pb-3 w-fit text-lg font-medium">Most watched blogs</h3>
                                <div className="flex flex-col gap-y-5 mt-5">
                                    {secondFourBlogs?.map((blog) => (
                                        <MiniBlogCard key={blog.id} blogDetails={blog} />
                                    ))}
                                </div>
                            </div>
                            <div className="">
                                <h3 className="border-b-2 border-primary-600 inline-block pb-3 w-fit text-lg font-medium">Featured blogs</h3>
                                <div className="flex flex-col gap-y-5 mt-5">
                                    {thirdFourBlogs?.map((blog) => (
                                        <MiniBlogCard key={blog.id} blogDetails={blog} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>)
}
