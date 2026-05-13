import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "../../components/banner/Banner";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb";
import { faLock, faQuestion, faUser } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { Tooltip } from "flowbite-react";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router";



export default function Login() {



    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    async function register(values: any) {
        console.log(values)
    }



    const validationSchema = yup.object({
        username: yup.string().required("Username is required").min(4, "Username must at least 4 characters"),
        password: yup
            .string()
            .min(8, "Min 6 characters")
            .required("Password is required")
            .matches(passwordRegex, "password must be minimum 8 characters least one capital character one low case character one number one special character"),

    });


    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",


        },
        validationSchema,
        onSubmit: register,
    });

    return (
        <>
            <Banner title="Login" />
            <BreadcrumbComponent title="Login" />

            <div className="py-10">
                <div className="max-w-screen-md mx-auto px-4">
                    <div className="form border border-gray-300 rounded-md shadow-md p-4">
                        <h3 className="border-b-2 border-primary-600  mb-5 inline-block pb-3 w-fit text-lg font-medium">Login</h3>

                        <form className="bg-secondary p-5 rounded-md"
                            onSubmit={formik.handleSubmit}

                        >
                            <div className="flex flex-col gap-y-3">
                                <div className="flex flex-col gap-y-2">
                                    <label className="text-white font-bold">Username</label>
                                    <div className="relative">
                                        <div className="absolute flex justify-center items-center w-7 border-r border-gray-200 h-full">
                                            <FontAwesomeIcon icon={faUser} />
                                        </div>
                                        <input type="text" placeholder="Username" className={`w-full rounded-sm pl-9 text-sm border-2 rounded-sm
                                            ${formik.touched.username && formik.errors.username
                                                ? "border-red-500 focus:ring-red-500"
                                                : "border-gray-300"}
                                                `}


                                            name="username"
                                            value={formik.values.username}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}


                                        />
                                        {formik.touched.username && formik.errors.username && (
                                            <div className="absolute right-2 top-0 h-full flex justify-center items-center">
                                                <Tooltip content={formik.errors.username} placement="top" className="text-xs whitespace-nowrap">
                                                    <a href="#" className="">
                                                        <FontAwesomeIcon icon={faQuestion} className="text-primary-700 blink-icon" />
                                                    </a>
                                                </Tooltip>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <label className="text-white font-bold">Password</label>
                                    <div className="relative">
                                        <div className="absolute flex justify-center items-center w-7 border-r border-gray-200 h-full">
                                            <FontAwesomeIcon icon={faLock} />
                                        </div>
                                        <input type="password" placeholder="Password" className={`w-full rounded-sm pl-9 text-sm border-2 rounded-sm
                                            ${formik.touched.password && formik.errors.password
                                                ? "border-red-500 focus:ring-red-500"
                                                : "border-gray-300"}
                                                `}


                                            name="password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}


                                        />
                                        {formik.touched.password && formik.errors.password && (
                                            <div className="absolute right-2 top-0 h-full flex justify-center items-center">
                                                <Tooltip content={formik.errors.password} placement="top" className="text-xs whitespace-nowrap">
                                                    <a href="#" className="">
                                                        <FontAwesomeIcon icon={faQuestion} className="text-primary-700 blink-icon" />
                                                    </a>
                                                </Tooltip>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-between flex-col md:flex-row items-center text-md">
                                    <p className="text-white">Not a member? <Link to={"/signup"}>Sign up</Link></p>
                                    <Link className="text-white" to={"/forget-password"}>Forget your password?</Link>
                                </div>
                                <div className="flex justify-center">
                                    <button className="px-6 py-2 bg-primary-600 text-white rounded hover:bg-primary-700" type="submit">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
