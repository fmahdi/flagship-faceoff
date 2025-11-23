import bannerImage from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className="w-full mx-auto md:max-w-md">
            <img src={bannerImage} alt="This is banner habibi" />
            <div>
                <h1 className="font-thin text-7xl text-gray-900">Browse, Search, View, Buy</h1>
                <p className="text-gray-600">Best place to browse, search, view details and purchase of top flagship phones
                    of the current time - FlagshipFaceOff</p>
                <form className="flex flex-col md:flex-row justify-center items-center mb-4">
                    <input type="text" placeholder="Search Phone by Name" />
                    <button>Search</button>
                </form>
            </div>
        </div>
    );
};

export default Banner;