import { Link } from "react-router-dom";

const DonationFund = ({ donation }) => {
    const { id, category_name, title, text_color, price, description, picture, category_bg, card_bg, text_bg } = donation || {}

    return (
        <div style={{ backgroundColor: card_bg, borderRadius: '5px', display: "flex" }}>
            <div className="">
                <img
                    src={picture}
                    className=""
                />
            </div>
            <div className="p-2">

                <p style={{ color: text_color, backgroundColor: text_bg, textAlign: "left", fontWeight: '500', fontSize: '16px', width: '82px', borderRadius: '5px', padding: '2px', marginTop: '10px' }} >
                    {donation.category_name}
                </p>

                <p style={{ color: "black", fontWeight: '600', fontSize: '18px', marginTop: '10px' }}>
                    {donation.title}
                </p>
                <p style={{ color: text_color, marginTop: '10px' }}>${donation.price}</p>
                <Link to={`/donations/${id}`}>
                    <button style={{ backgroundColor: text_bg, color: "white", padding: '3px', borderRadius: '5px', marginTop: '10px' }}>View Details</button>
                </Link>

            </div>

        </div>
    );
};

export default DonationFund;