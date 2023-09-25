const Banner = () => {
    return (
        <div className="flex h-screen justify-center items-center flex-col">
            <div className="w-full h-screen bg-[url('https://i.ibb.co/S5FX0rv/Rectangle-4281.png')] bg-cover bg-center opacity-70">
                <div className="w-full h-full text-center my-60 justify-center items-center">
                    <span className="text-black text-4xl w-1/2 text-center font-bold">I Grow By Helping People In Need </span>
                    <div className="text-center items-center justify-center mt-3">
                        <input className="p-2 rounded-lg" type="search" name="" id="" placeholder="Search here...." /><button className="bg-[#FF444A] text-white font-medium p-2 rounded-lg">Search</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;