import swal from "sweetalert";


const DisplayEachDonation = ({ donation }) => {
    const { id, category_name, title, text_color, price, description, picture, category_bg, card_bg, text_bg } = donation || {}

    const handleAddToDonation = () => {
        const addedDonationArray = [];
        const donationItems = JSON.parse(localStorage.getItem('donation'))
        if (!donationItems) {
            addedDonationArray.push(donation)
            localStorage.setItem('donation', JSON.stringify(addedDonationArray))
            swal("Good job!", "Donation added to the fund", "success");
        }
        else {
            const isExist = donationItems.find(donation => donation.id == id)
            if (!isExist) {

                addedDonationArray.push(...donationItems, donation)
                localStorage.setItem('donation', JSON.stringify(addedDonationArray))
                swal("Good job!", "Donation added to the fund", "success");
            }
            else {
                swal("Error!", "you have already added this donation", "error");
            }

        }

    }
    return (
        <div>
            <div className="items-center justify-center mt-4">
                <img className="w-[1100px] mx-auto" src={donation.picture} alt="" />
                <div className="bg-gray-300 opacity-80 h-24">
                    <button onClick={handleAddToDonation} style={{ color: text_bg }}
                        className="bg-[#FF444A] font-semibold rounded p-2 relative -bottom-4 left-4">Donate ${price}</button>
                </div>
                <h2 className="text-2xl font-semibold mt-6">{donation.title}</h2>
                <p className="text-base font-normal mt-6 pb-3">{donation.description}</p>
            </div>
        </div>
    );
};

export default DisplayEachDonation;