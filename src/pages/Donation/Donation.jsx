import { useEffect, useState } from "react";
import DonationFund from "./DonationFund/DonationFund";

const Donation = () => {

    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));
        if(donationItems){
            setDonation(donationItems)
        }else{
            setNoFound("No data found");
        }
        
    },[])

    console.log(donation);

    return (
        <div>
            {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
            :
            <div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5">
                    {
                    isShow ? donation.map((donation) => (<DonationFund key={donation.id} donation={donation}></DonationFund>))
                    :
                    donation.slice(0,4).map((donation) => (<DonationFund key={donation.id} donation={donation}></DonationFund>))
                    }
                </div>
                {donation.length >= 4 && !isShow && <button onClick={()=> setIsShow(!isShow) } className="p-3 rounded-lg text-white bg-green-700 block mx-auto mt-5">{isShow? 'See Less' : 'See All'}</button>}
            </div> }
        </div>
    );
};

export default Donation;