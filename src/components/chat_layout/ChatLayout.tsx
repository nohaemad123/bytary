import { Outlet } from "react-router";
import Banner from "../banner/Banner";
import BreadcrumbComponent from "../breadcrumb/Breadcrumb";
import ChatSidebar from "../chat_sidebar/ChatSidebar";
import AccountSidebar from "../account_sidebar/AccountSidebar";

export default function ChatLayout() {
    return (
        <>
            <Banner title="My chat" />
            <BreadcrumbComponent title="My chat" />

            <div className=" py-10 bg-[#f0f0f0]">
                <div className="md:hidden relative  mb-10">
                    <AccountSidebar />
                </div>
                <div className="hidden md:block">
                    <ChatSidebar />
                </div>
                <div className="max-w-screen-xl mx-auto px-4">
                    <Outlet />

                </div>
            </div>
        </>
    )
}
