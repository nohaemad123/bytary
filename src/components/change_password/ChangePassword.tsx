
export default function ChangePassword() {
    return (
        <div className="bg-white px-3 py-5  ">
            <h3 className="text-md font-bold">Manage Your Security Settings</h3>
            <p className="text-sm text-gray-500">Manage Your Account</p>
            <form className="mt-5">
                <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 pb-2 border-gray-200">
                    <div className="col-span-12 flex flex-col gap-y-2">
                        <label className="font-bold">Old password</label>
                        <input type="password" className="w-full border border-gray-400 rounded-sm text-gray-400" placeholder="old password" />
                    </div>
                    <div className="col-span-12 flex flex-col gap-y-2">
                        <label className="font-bold">New password</label>
                        <input type="password" className="w-full border border-gray-400 rounded-sm text-gray-400" placeholder="new password" />
                    </div>
                    <div className="col-span-12 flex flex-col gap-y-2">
                        <label className="font-bold">Confirm new password</label>
                        <input type="password" className="w-full border border-gray-400 rounded-sm text-gray-400" placeholder="Confirm new password" />
                    </div>


                </div>
                <button className="px-6 py-2 mt-5 bg-primary-600 text-white rounded hover:bg-primary-700" type="submit">Update password</button>
            </form>
        </div>
    )
}
