
import Banner from "../components/banner/Banner";
import ExploreCategories from "../components/ExploreCategories";

import TabCategories from "../components/TabCategories";
import Testimonial from "../components/testimonial/Testimonial";


const Home = () => {
    return (
        <div className="overflow-hidden">
            <Banner/>
            <TabCategories/>
           <ExploreCategories/>
           <Testimonial/>
        </div>
    );
};

export default Home;