import { useState } from "react";
import bannerImage from "../../assets/banner.png";
import Buttons from "../UI/Buttons";

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
                    <Buttons type="submit" label="Search"></Buttons>

                </form>
            </div>
        </div>
    );
};

export default Banner;