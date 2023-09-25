import { Link } from "react-router-dom";


const Card = ({ donation }) => {

    const { id, category_name, title, text_color, picture, category_bg, card_bg } = donation || {}

    return (
        <Link to={`/donation/${id}`}>
            <div style={{backgroundColor:card_bg}}>
                <div className="">
                    <img
                        src={picture}
                        className=""
                    />
                </div>
                <div className="p-4">

                    <p style={{color:text_color, backgroundColor:card_bg, width:'80px' , borderRadius:'5px', padding:'2px'}} >
                        {donation.category_name}
                    </p>

                    <p style={{color:text_color}}>
                        {donation.title}
                    </p>
                </div>

            </div>
        </Link>
    );
};

export default Card;