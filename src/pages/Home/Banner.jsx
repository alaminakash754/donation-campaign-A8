import { Link } from "react-router-dom";

const Banner = ({donation}) => {
    const { id, category_name } = donation || {}
    const handleSearch = () => {
        const searchField = document.getElementById('search-field')
        const searchText = searchField.value;
        console.log(searchText);
    }
    return (
        <div className="flex h-screen justify-center items-center flex-col">
            <div className="w-full h-screen bg-[url('https://i.ibb.co/S5FX0rv/Rectangle-4281.png')] bg-cover bg-center bg-slate-200 bg-blend-screen">
                <div className="w-full h-full text-center my-60 justify-center items-center">
                    <span className="text-black text-3xl w-1/2 text-center font-bold">I Grow By Helping People In Need </span>
                    <div className="text-center items-center justify-center mt-3">
                        <input className="p-2 rounded-lg border-black" type="search" name="" id="search-field" placeholder="Search here...." />
                        <Link to={`/donations/${category_name}`}>
                        <button onClick={() => handleSearch()} className="bg-[#FF444A] text-white font-medium p-2 rounded-lg">Search</button>
                        </Link>
                       
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;