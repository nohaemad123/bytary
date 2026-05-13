import Banner from "../../components/banner/Banner";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb";
import image1 from "../../assets/photo-1517443191895-202c31142ccd.jpg";
import image2 from "../../assets/photo-1425082661705-1834bfd09dca.jpg";

export default function About() {
    return (
        <>
            <Banner title="About bytary" />
            <BreadcrumbComponent title="About bytary" />
            <div className="py-10">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h3 className="main_title mb-5">About bytary</h3>

                    <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 gap-y-10 pb-2 border-gray-200 mb-5">
                        <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
                            <p className="text-[#777] leading-[30px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                        <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
                            <img src={image1} className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 gap-y-10 pb-2 border-gray-200 mb-5">
                        <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
                            <img src={image2} className="w-full" />

                        </div>
                        <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2">
                            <p className="text-[#777] leading-[30px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
