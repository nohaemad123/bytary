import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "../../components/banner/Banner";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb";
import { faEnvelope, faLock, faMapLocation, faPhoneAlt, faQuestion, faTimes, faUser, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { FieldArray, FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import { Checkbox, FileInput, Tooltip } from "flowbite-react";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { Link } from "react-router";

const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});


export default function Signup() {



    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    async function register(values: any) {
        console.log(values)
    }

    const [markerPosition] = useState<[number, number]>([30.0444, 31.2357]);


    const validationSchema = yup.object({
        name: yup.string().required("Clinic name is required").min(4, "clinic name must at least 4 characters"),
        username: yup.string().required("Username is required").min(4, "Username must at least 4 characters"),
        password: yup
            .string()
            .min(8, "Min 6 characters")
            .required("Password is required")
            .matches(passwordRegex, "password must be minimum 8 characters least one capital character one low case character one number one special character"),
        rePassword: yup
            .string()
            .oneOf([yup.ref("password")], "Passwords must match")
            .required("Confirm password is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        address: yup.string().required("Address is required"),
        specification: yup.string().required("Specification is required"),
        phoneNumber: yup.array().of(
            yup.string().test(
                "phone-validation",
                "Invalid phone number",
                function (value) {
                    const { path, parent } = this;
                    const index = Number(path.match(/\d+/)?.[0]);

                    const phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;

                    if (index === 0) {
                        if (!value) return this.createError({ message: "Phone is required" });
                        return phoneRegex.test(value);
                    }

                    if (!value) return true;

                    return phoneRegex.test(value);
                }
            )
        ),
        image: yup
            .mixed()
            .required("Image is required")
            .test("fileType", "Only images allowed", (value: any) => {
                return value && value.type.startsWith("image/");
            }),
        id: yup
            .mixed()
            .required("Image is required")
            .test("fileType", "Only images allowed", (value: any) => {
                return value && value.type.startsWith("image/");
            }),
        degree: yup
            .mixed()
            .required("Image is required")
            .test("fileType", "Only images allowed", (value: any) => {
                return value && value.type.startsWith("image/");
            })
    });


    const formik = useFormik({
        initialValues: {
            name: "",
            password: "",
            rePassword: "",
            email: "",
            phoneNumber: [""],

        },
        validationSchema,
        onSubmit: register,
    });

    return (
        <>
            <Banner title="Sign Up" />
            <BreadcrumbComponent title="Sign Up" />

            <div className="py-10">
                <div className="max-w-screen-md mx-auto px-4">
                    <div className="form border border-gray-300 rounded-md shadow-md p-4">
                        <h3 className="border-b-2 border-primary-600  mb-5 inline-block pb-3 w-fit text-lg font-medium">Sign up now</h3>
                        <FormikProvider value={formik}>

                            <form className="bg-secondary p-5 rounded-md"
                                onSubmit={formik.handleSubmit}

                            >
                                <div className="flex flex-col gap-y-3">
                                    <div className="flex flex-col gap-y-2">
                                        <label className="text-white font-bold">Store name</label>
                                        <div className="relative">
                                            <div className="absolute flex justify-center items-center w-7 border-r border-gray-200 h-full">
                                                <FontAwesomeIcon icon={faUser} />
                                            </div>
                                            <input type="text" placeholder="Name" className={`w-full rounded-sm pl-9 text-sm border-2 rounded-sm
                                            ${formik.touched.name && formik.errors.name
                                                    ? "border-red-500 focus:ring-red-500"
                                                    : "border-gray-300"}
                                                `}


                                                name="name"
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}


                                            />
                                            {formik.touched.name && formik.errors.name && (
                                                <div className="absolute right-2 top-0 h-full flex justify-center items-center">
                                                    <Tooltip content={formik.errors.name} placement="top" className="text-xs whitespace-nowrap">
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
                                            <input type="password" placeholder="password" className={`w-full rounded-sm pl-9 text-sm border-2 rounded-sm
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
                                    <div className="flex flex-col gap-y-2">
                                        <label className="text-white font-bold">Confirm password</label>
                                        <div className="relative">
                                            <div className="absolute flex justify-center items-center w-7 border-r border-gray-200 h-full">
                                                <FontAwesomeIcon icon={faLock} />
                                            </div>
                                            <input type="password" placeholder="Confirm password" className={`w-full rounded-sm pl-9 text-sm border-2 rounded-sm
                                            ${formik.touched.rePassword && formik.errors.rePassword
                                                    ? "border-red-500 focus:ring-red-500"
                                                    : "border-gray-300"}
                                                `}


                                                name="rePassword"
                                                value={formik.values.rePassword}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}


                                            />
                                            {formik.touched.password && formik.errors.rePassword && (
                                                <div className="absolute right-2 top-0 h-full flex justify-center items-center">
                                                    <Tooltip content={formik.errors.rePassword} placement="top" className="text-xs whitespace-nowrap">
                                                        <a href="#" className="">
                                                            <FontAwesomeIcon icon={faQuestion} className="text-primary-700 blink-icon" />
                                                        </a>
                                                    </Tooltip>
                                                </div>
                                            )}
                                        </div>
                                    </div>
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

                                    <div className="flex flex-col gap-y-2">
                                        <label className="text-white font-bold">Phone number</label>

                                        <FieldArray name="phoneNumber">
                                            {(arrayHelpers) => (
                                                <div className="flex flex-col gap-4">

                                                    {formik.values.phoneNumber.map((phone, index) => {
                                                        const isTouched =
                                                            (formik.touched.phoneNumber as any)?.[index];
                                                        const error =
                                                            (formik.errors.phoneNumber as any)?.[index];

                                                        return (
                                                            <div key={index} className="relative">

                                                                {/* icon */}
                                                                <div className="absolute flex justify-center items-center w-7 border-r border-gray-200 h-full">
                                                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                                                </div>

                                                                <div className="flex gap-2 items-center">

                                                                    {/* input */}
                                                                    <input
                                                                        type="text"
                                                                        name={`phoneNumber[${index}]`}
                                                                        value={phone}
                                                                        onChange={formik.handleChange}
                                                                        onBlur={formik.handleBlur}
                                                                        placeholder="Enter phone number"
                                                                        className={`w-full pl-9 text-sm border-2 rounded-sm py-2
                    ${isTouched && error
                                                                                ? "border-red-500"
                                                                                : "border-gray-300"
                                                                            }`}
                                                                    />

                                                                    {/* delete button يظهر من تاني input */}
                                                                    {index > 0 && (
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => arrayHelpers.remove(index)}
                                                                            className="cursor-pointer bg-red-500 text-white px-3 py-2 rounded-md"
                                                                        >
                                                                            <FontAwesomeIcon icon={faTimes} />
                                                                        </button>
                                                                    )}
                                                                </div>

                                                                {/* error tooltip */}
                                                                {isTouched && error && (
                                                                    <div className="absolute right-2 top-0 h-full flex items-center">
                                                                        <Tooltip
                                                                            content={error}
                                                                            placement="top"
                                                                            className="text-xs whitespace-nowrap"
                                                                        >
                                                                            <span>
                                                                                <FontAwesomeIcon className="text-red-500" icon={faQuestion} />
                                                                            </span>
                                                                        </Tooltip>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}

                                                    {/* error عام */}
                                                    {typeof formik.errors.phoneNumber === "string" && (
                                                        <p className="text-red-500 text-sm">
                                                            {formik.errors.phoneNumber}
                                                        </p>
                                                    )}

                                                    {/* add button */}
                                                    <button
                                                        type="button"
                                                        onClick={() => arrayHelpers.push("")}
                                                        className="cursor-pointer bg-primary-600 text-white px-4 py-2 rounded-md w-fit"
                                                    >
                                                        + Add Phone
                                                    </button>
                                                </div>
                                            )}
                                        </FieldArray>
                                    </div>


                                    <div className="flex flex-col gap-y-2">
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" />
                                            <label htmlFor="accept" className="flex text-white">
                                                I agree with the&nbsp;
                                                terms and conditions
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-y-2">
                                        <p className="text-white">Already have account? <Link to={"/signin"}>Sign in</Link></p>
                                    </div>

                                    <div className="flex justify-center">
                                        <button className="px-6 py-2 bg-primary-600 text-white rounded hover:bg-primary-700" type="submit">Sign up</button>
                                    </div>
                                </div>

                            </form>
                        </FormikProvider>
                    </div>
                </div>
            </div>
        </>
    )
}
