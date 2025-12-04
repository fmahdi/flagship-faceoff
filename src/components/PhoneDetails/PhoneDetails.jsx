import { useLoaderData, useParams } from "react-router";
import { MdBookmarkAdd, MdOutlineAddShoppingCart } from "react-icons/md";

const PhoneDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const currentPhone = data.find(elem => elem.id === parseInt(id));
    const { image, name, description, brand, price, storage, camera_info } = currentPhone;
    return (
        <div className="border-2 p-10">
            <img className="w-auto mx-auto" src={image} alt="current Phone" />
            <div className="flex justify-between">
                <h1 className="text-5xl font-thin">{name}</h1>
                <div className="flex justify-between">
                    <MdBookmarkAdd />
                    <MdOutlineAddShoppingCart />
                </div>
            </div>
            <p>There are many models and companies available for cell phones. This is optimal</p>
        </div>
    );
};

export default PhoneDetails;