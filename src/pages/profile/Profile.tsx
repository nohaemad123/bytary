import { Alert, TabItem, Tabs } from "flowbite-react";
import ProfileSection from "../../components/profile_section/ProfileSection";
import EditProfile from "../../components/edit_profile/EditProfile";
import ChangePassword from "../../components/change_password/ChangePassword";


export default function Profile() {
    return (
        <>
            <Alert color="info">
                <span className="font-medium">Hey noha emad!</span> You only complete 60% of your Profile
            </Alert>

            <div className="bg-[#f7f7f7] p-2 mt-5 rounded-md">
                <Tabs
                    aria-label="tabs"
                    variant="pills"
                    className=" rounded-none
    [&_[role=tab]]:border-b-[3px] 
    [&_[aria-selected=true]]:border-primary-600 [&_[aria-selected=true]]:bg-white   [&_[aria-selected=true]]:text-black  [&_[aria-selected=false]]:rounded-none [&_[aria-selected=false]]:bg-transparent
  "
                >                    <TabItem active title="Profile" className="border-b-[3px]">
                        <ProfileSection />
                    </TabItem>
                    <TabItem title="Edit profile" className="border-b-3!">
                        <EditProfile />
                    </TabItem>
                    <TabItem title="Change password" className="border-b-3">
                        <ChangePassword />
                    </TabItem>

                </Tabs>
            </div>
        </>
    )
}
