import { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import PhonesContainer from '../../components/PhonesContainer/PhonesContainer';
import { useLoaderData } from 'react-router';

const HomePage = () => {
    const data = useLoaderData();
    const [phones, setPhones] = useState(data);
    const handleSearch = (e, text) =>{
        e.preventDefault();
        if (text==="") return setPhones(data);
        const searchedPhone = data.filter((phone) => 
            {return phone?.name?.toLowerCase().split(" ").includes(text.toLowerCase()) ||
            phone?.model?.toLowerCase().split(" ").includes(text.toLowerCase())
            })
        setPhones(searchedPhone);
    };

    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
            <PhonesContainer phones={phones}></PhonesContainer>
        </div>
    );
};

export default HomePage;