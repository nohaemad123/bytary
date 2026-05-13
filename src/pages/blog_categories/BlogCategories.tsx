import Banner from "../../components/banner/Banner";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb";
import CategoriesSection from "../../components/categories_section/CategoiesSection";
import LatestBlogs from "../../components/latest_blogs/LatestBlogs";

export default function BlogCategories() {
    return (
        <>
            <Banner title="Blog" />
            <BreadcrumbComponent title="Blog" />
            <CategoriesSection type="blog" />

            <LatestBlogs />

        </>
    )
}
