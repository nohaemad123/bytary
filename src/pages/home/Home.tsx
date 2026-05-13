import HomeAds from "../../components/home_ads/HomeAds";
import HomeCategories from "../../components/home_categories/HomeCategories";
import LatestClinics from "../../components/latest_clinics/LatestClinics";
import LatestStores from "../../components/latest_stores/LatestStores";
import Search from "../../components/search/Search";

export default function Home() {
    return (
        <>
            <Search />
            <HomeCategories />
            <HomeAds />
            <LatestClinics />
            <LatestStores />
        </>
    )
}
