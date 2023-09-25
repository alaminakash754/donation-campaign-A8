import swal from "sweetalert";


const DisplayEachDonation = ({donation}) => {
    const {id, category_name, title, text_color, price, description, picture, category_bg, card_bg, text_bg } = donation || {}

    const handleAddToDonation = () => {
        const addedDonationArray = [];
        const donationItems = JSON.parse(localStorage.getItem('donation'))
        if(!donationItems){
            addedDonationArray.push(donation)
            localStorage.setItem('donation', JSON.stringify(addedDonationArray))
            swal("Good job!", "Donation added to the fund", "success");
        }
        else{
            const isExist = donationItems.find(donation => donation.id == id)
            if(!isExist){
                
            addedDonationArray.push(...donationItems, donation)
            localStorage.setItem('donation', JSON.stringify(addedDonationArray))
            swal("Good job!", "Donation added to the fund", "success");
            }
            else{
                swal("Error!", "you have already added this donation", "error");
            }

        }
        
    }

    return (
        <div>
            <div className="items-center justify-center mt-4">
                <img className="w-[1100px] mx-auto" src={donation.picture} alt="" />
                <button onClick={handleAddToDonation} 
                className="bg-[#FF444A] rounded p-2 text-white relative bottom-14 left-4">Donate ${price}</button>
                <h2 className="text-2xl font-semibold mt-6">{donation.title}</h2>
                <p className="text-base font-normal mt-6 ">{donation.description}</p>
            </div>
        </div>
    );
};

export default DisplayEachDonation;