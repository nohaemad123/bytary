import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

type breadcrumbProps = {
    secondLink?: string;
    title: string;
    secondLinkTo?: any;
};

export default function BreadcrumbComponent({ secondLink, title, secondLinkTo }: breadcrumbProps) {
    return (
        <div className="bg-secondary py-5">
            <div className="max-w-screen-xl mx-auto px-4">

                <div className="flex flex-col md:flex-row gap-x-3 text-lg font-bold items-center">
                    <Link to={"/"} className="text-white">Home</Link>   <FontAwesomeIcon icon={faAngleRight} className="text-sm  text-white" />
                    {secondLink ? <> <Link to={secondLinkTo} className="text-white">{secondLink}</Link>  <FontAwesomeIcon icon={faAngleRight} className="text-sm  text-white" /></>
                        : ""}

                    <p className="text-primary-600">{title}</p>
                </div>
            </div>
        </div>
    )
}
