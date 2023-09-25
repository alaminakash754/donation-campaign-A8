import Card from "./Card";

const DonationCards = ({donationsCard}) => {
    
    return (
        <div className="py-10">
            <h2 className="text-4xl text-center text-[#FFB74D]">All categories card</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-5">
                {
                    donationsCard?.map(donation => <Card key={donation.id} donation={donation}></Card>)
                }
            </div>
        </div>
    );
};

export default DonationCards;