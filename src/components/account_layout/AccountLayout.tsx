import { Outlet } from "react-router";
import Banner from "../banner/Banner";
import BreadcrumbComponent from "../breadcrumb/Breadcrumb";
import AccountSidebar from "../account_sidebar/AccountSidebar";

export default function AccountLayout() {
    return (
        <>
            <Banner title="My account" />
            <BreadcrumbComponent title="My account" />
            <div className=" py-10 bg-[#f0f0f0]">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="grid grid-cols-12  gap-y-10 md:gap-x-10">

                        {/* LEFT SIDE */}

                        <div className="col-span-12 md:col-span-4">
                            <AccountSidebar />
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
