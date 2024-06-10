import Populerproduct from "../../PopulerProduct/Populerproduct";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Location from "../Location/Location";
import Services from "../Services/Services";
import Temservices from "../Temservices/Temservices";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Location></Location>
            <Populerproduct></Populerproduct>
            <Temservices></Temservices>
            <Features></Features>
            
        </div>
    );
};

export default Home;