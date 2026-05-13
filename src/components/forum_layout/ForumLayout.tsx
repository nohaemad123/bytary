import { Outlet } from "react-router";
import ForumSidebar from "../forum_sidebar/ForumSidebar";
import Banner from "../banner/Banner";
import BreadcrumbComponent from "../breadcrumb/Breadcrumb";

export default function ForumLayout() {
    return (
        <>

            <Banner title="Forums" />
            <BreadcrumbComponent title="Forum" />
            <div className="bg-[#f0f0f0] py-10">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="grid grid-cols-12 gap-y-10 md:gap-x-10">

                        {/* LEFT SIDE */}
                        <div className="col-span-12 md:col-span-4">
                            <ForumSidebar />
                        </div>
                        <div className="col-span-12 md:col-span-8">

                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
