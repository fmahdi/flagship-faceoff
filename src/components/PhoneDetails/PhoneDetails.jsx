import { useLoaderData, useParams } from "react-router";
import { MdBookmarkAdd, MdOutlineAddShoppingCart } from "react-icons/md";
import Buttons from "../UI/Buttons";
import { addFav } from "../../utils";


const PhoneDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const currentPhone = data.find(elem => elem.id === parseInt(id));
    const { image, name, description, brand, price, storage, camera_info } = currentPhone;
    const handleFavorites = () => {
        addFav(currentPhone);
    }

    return (
        <div className="p-10">
            <img className="w-full md:w-auto mx-auto mb-8" src={image} alt="current Phone" />
            <div className="flex justify-between mb-5">
                <h1 className="text-5xl font-thin">{name}</h1>
                <div className="flex justify-between gap-4">
                    <Buttons onClick={handleFavorites} label={<MdBookmarkAdd />}></Buttons>
                    <Buttons label={<MdOutlineAddShoppingCart />}></Buttons>
                </div>
            </div>
            <p className="text-4xl font-thin">Product Details:</p>
            <div>

                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm/6 font-medium text-gray-900">Brand name</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{brand}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm/6 font-medium text-gray-900">Description</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{description}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm/6 font-medium text-gray-900">Storage</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {
                                    storage.map((elem, index) => <div key={index} className="badge badge-soft badge-primary mr-3">{elem}</div>)
                                }
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm/6 font-medium text-gray-900">Pricing</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {
                                    Object.entries(price).map(([key, value], index) => {

                                        return <div key={index}>
                                            <div className="badge badge-outline badge-primary mr-2">{key}</div>
                                            <div className="badge badge-primary">{value}</div>
                                        </div>

                                    }

                                    )
                                }
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm/6 font-medium text-gray-900">Camera Info</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {camera_info}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>


        </div>
    );
};

export default PhoneDetails;