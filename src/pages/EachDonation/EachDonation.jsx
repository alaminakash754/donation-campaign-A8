import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DisplayEachDonation from "./DisplayEachDonation";


const EachDonation = () => {
    const [donation, setDonation] = useState({});
    const donations = useLoaderData();
    const { id } = useParams();
  

    useEffect(() => {
        const findDonation = donations?.find((donation) => donation.id == id);
        setDonation(findDonation);
    }, [id, donations]);
    
   
    return (
       <div>
            <DisplayEachDonation donation={donation}></DisplayEachDonation>
       </div>
    );
};

export default EachDonation;