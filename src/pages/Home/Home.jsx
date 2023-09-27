import { useLoaderData } from "react-router-dom";
import DonationCards from "../../Components/DonationCards/DonationCards";
import Banner from "./Banner";
import { useState } from "react";



const Home = () => {

    const donationsCard = useLoaderData();
    const [displayAllCard, setDisplayAllCard] = useState([...donationsCard]);
    const [search, setSearch] = useState([...donationsCard]);

    const handleSearch = (e) => {
        let input = e.target.value.toLowerCase();
        const searchCards = search.filter((card) => card.category.toLowerCase().startsWith(input));
        setDisplayAllCard(searchCards);
    }
    
    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
            {displayAllCard?.map((donationsCard) =>(<DonationCards key={donationsCard.id} donationsCard={donationsCard}></DonationCards>)) }
           
        </div>
    );
};

export default Home;