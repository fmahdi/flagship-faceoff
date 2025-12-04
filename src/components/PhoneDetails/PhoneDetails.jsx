import { useLoaderData, useParams } from "react-router";

const PhoneDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    // console.log(currentID.id);
    const currentPhone = data.find(elem => elem.id === parseInt(id));
    const { image, name, description } = currentPhone;
    // console.log(currentPhone);
    return (
        <div>
            <img className="w-full mx-auto md:max-w-md" src={image} alt="current Phone" />
            <h1>Phone-Details Page</h1>
            <p>There are many models and companies available for cell phones. This is optimal</p>
        </div>
    );
};

export default PhoneDetails;