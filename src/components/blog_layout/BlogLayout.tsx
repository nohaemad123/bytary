import { Outlet } from "react-router";
import Banner from "../banner/Banner";
import BreadcrumbComponent from "../breadcrumb/Breadcrumb";
import BlogSidebar from "../blog_sidebar/BlogSidebar";

export default function BlogLayout() {

    return (
        <>

            <Banner title="Blogs" />
            <BreadcrumbComponent title="Blogs" />
            <div className=" py-10">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="grid grid-cols-12 gap-y-10 md:gap-x-10">

                        {/* LEFT SIDE */}

                        <div className="col-span-12 md:col-span-8">

                            <Outlet />
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
