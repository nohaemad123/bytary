import Banner from "../../components/banner/Banner";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb";
import CategoriesSection from "../../components/categories_section/CategoiesSection";


export default function CategoriesPage() {

    return (
        <>
            <Banner title="forum" />
            <BreadcrumbComponent title="forum" />
            <CategoriesSection type="forum" />
        </>
    )
}
