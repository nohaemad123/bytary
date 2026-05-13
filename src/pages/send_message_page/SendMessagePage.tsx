import Banner from "../../components/banner/Banner";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb";
import bgImage from "../../assets/home-contact-bg.jpg";
import pets_image from "../../assets/pet-contact-img1.png";


export default function SendMessagePage() {
    return (
        <>
            <Banner title="Send message" />
            <BreadcrumbComponent title="Send message" />
            <div className="pt-20">
                <div className="max-w-screen-xl mx-auto px-4">

                    <h3 className="main_title mb-5">Send message</h3>
                </div>
                <div
                    className="w-full relative pt-[20px] min-h-[400px]
    bg-none md:bg-cover md:bg-center"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                    }}
                >
                    <div className="max-w-screen-xl mx-auto px-4">

                        {/* Form Box */}
                        <div className="flex justify-end">
                            <div className="w-full max-w-[655px] bg-[#f7f7f7] p-10 md:p-[70px_55px] shadow-[0_0_87px_rgba(0,0,0,0.14)] relative z-[99]">

                                <form className="flex flex-col gap-4">

                                    <textarea
                                        className="w-full border border-gray-300 p-3 outline-none focus:border-[#92c73f]"
                                        placeholder="your message"
                                        rows={5}
                                    ></textarea>

                                    <input
                                        type="submit"
                                        value="Send"
                                        className="bg-[#92c73f] text-white px-6 py-2 text-lg font-bold cursor-pointer hover:opacity-90 transition"
                                    />

                                </form>

                            </div>
                        </div>
                    </div>

                    {/* Image Animation */}
                    <div
                        className="hidden md:block absolute left-[130px] bottom-0 w-[500px] h-[420px] bg-cover bg-no-repeat"
                        style={{ backgroundImage: `url(${pets_image})` }}
                    >
                    </div>

                </div>
            </div>
        </>
    )
}
