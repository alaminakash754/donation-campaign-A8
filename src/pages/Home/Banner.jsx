

const Banner = ({handleSearch}) => {
    

    return (
        <div className="flex h-screen justify-center items-center flex-col">
            <div className="w-full h-screen bg-[url('https://i.ibb.co/S5FX0rv/Rectangle-4281.png')] bg-cover bg-center bg-slate-200 bg-blend-screen">
                <div className="w-full h-full text-center my-60 justify-center items-center">
                    <span className="text-black text-3xl w-1/2 text-center font-bold">I Grow By Helping People In Need </span>
                    <div className="text-center items-center justify-center mt-3">
                        <input onChange={handleSearch}
                         className="p-2 rounded-lg border-black" type="search" name="search" placeholder="Search here...." />
                        
                        <button type="button" className="bg-[#FF444A] text-white font-medium p-2 rounded-lg">Search</button>
                        
                       
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;