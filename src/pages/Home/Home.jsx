import { useLoaderData } from "react-router-dom";
import DonationCards from "../../Components/DonationCards/DonationCards";
import Banner from "./Banner";



const Home = () => {

    const donationsCard = useLoaderData();
    
    
    return (
        <div>
            <Banner></Banner>
            <DonationCards donationsCard={donationsCard}></DonationCards>
        </div>
    );
};

export default Home;