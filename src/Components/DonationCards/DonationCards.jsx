import Card from "./Card";

const DonationCards = ({donationsCard}) => {
    
    return (
        <div className="py-10">
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
                {
                    donationsCard?.map(donation => <Card key={donation.id} donation={donation}></Card>)
                }
            </div>
        </div>
    );
};

export default DonationCards;