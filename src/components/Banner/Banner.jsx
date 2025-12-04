import { useState } from "react";
import bannerImage from "../../assets/banner.png"

const Banner = ({ handleSearch }) => {
    const [searchText, setSearchText] = useState("");
    return (
        <div>
            <img className="w-full mx-auto md:max-w-md" src={bannerImage} alt="This is banner habibi" />
            <div className="text-center space-y-4">
                <h1 className="font-thin text-7xl text-gray-900">Browse, Search, View, Buy</h1>
                <p className="text-gray-600">Best place to browse, search, view details and
                    <br></br>
                    purchase of top flagship phones
                    of the current time - FlagshipFaceOff</p>

                <form onSubmit={
                    (e) => {
                        handleSearch(e, searchText);
                        setSearchText("");
                    }
                }
                    className="flex flex-col md:flex-row justify-center items-center mb-4">

                    {/* Input element */}
                    <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className="bg-white border-grey-300 rounded md:mr-2 shadow-md w-2/3 h-12 px-4 mb-3 focus:outline-none focus:shadow-outline" type="text" placeholder="Search Phone by Name" />

                    {/* stylized button */}
                    <button type="submit" className="relative inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Search</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Banner;