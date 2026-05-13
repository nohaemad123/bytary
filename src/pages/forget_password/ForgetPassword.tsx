import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "../../components/banner/Banner";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb";
import { faEnvelope, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { Tooltip } from "flowbite-react";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router";



export default function ForgetPassword() {


    async function register(values: any) {
        console.log(values)
    }



    const validationSchema = yup.object({
        email: yup.string().email("Invalid email").required("Email is required"),
    });


    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema,
        onSubmit: register,
    });

    return (
        <>
            <Banner title="Forget password" />
            <BreadcrumbComponent title="Forget password" />

            <div className="py-10">
                <div className="max-w-screen-md mx-auto px-4">
                    <div className="form border border-gray-300 rounded-md shadow-md p-4">
                        <h3 className="border-b-2 border-primary-600  mb-5 inline-block pb-3 w-fit text-lg font-medium">Forget password</h3>

                        <form className="bg-secondary p-5 rounded-md"
                            onSubmit={formik.handleSubmit}

                        >
                            <div className="flex flex-col gap-y-3">

                                <div className="flex flex-col gap-y-2">
                                    <label className="text-white font-bold">Email</label>
                                    <div className="relative">
                                        <div className="absolute flex justify-center items-center w-7 border-r border-gray-200 h-full">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <input type="email" placeholder="Email" className={`w-full rounded-sm pl-9 text-sm border-2 rounded-sm
                                            ${formik.touched.email && formik.errors.email
                                                ? "border-red-500 focus:ring-red-500"
                                                : "border-gray-300"}
                                                `}


                                            name="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}


                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <div className="absolute right-2 top-0 h-full flex justify-center items-center">
                                                <Tooltip content={formik.errors.email} placement="top" className="text-xs whitespace-nowrap">
                                                    <a href="#" className="">
                                                        <FontAwesomeIcon icon={faQuestion} className="text-primary-700 blink-icon" />
                                                    </a>
                                                </Tooltip>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <button className="px-6 py-2 bg-primary-600 text-white rounded hover:bg-primary-700" type="submit">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
