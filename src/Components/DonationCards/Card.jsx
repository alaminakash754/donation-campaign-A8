import { Link } from "react-router-dom";


const Card = ({ donation }) => {

    const { id, category_name, title, text_color, picture, category_bg, card_bg, text_bg } = donation || {}

    return (
        <Link to={`/donations/${id}`}>
            <div style={{ backgroundColor: card_bg, borderRadius: '5px' }}>
                <div className="">
                    <img
                        src={picture}
                        className=""
                    />
                </div>
                <div className="p-2">
                    <p style={{ color: text_color, backgroundColor: text_bg, textAlign: "left", fontWeight: '500', fontSize: '16px', width: '82px', borderRadius: '5px', padding: '2px' }} >
                        {donation.category_name}
                    </p>
                    <p style={{ color: text_color, fontWeight: '600', fontSize: '18px' }}>
                        {donation.title}
                    </p>
                </div>

            </div>
        </Link>
    );
};

export default Card;