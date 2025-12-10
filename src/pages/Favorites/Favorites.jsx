import React, { useEffect, useState } from 'react';
import { getFav, removeFavorite } from '../../utils';
import PhoneCard from '../../components/PhoneCard/PhoneCard';

const Favorites = () => {
    const [displayPhones, setDisplayPhones] = useState([]);

    useEffect(() => {

        const favoriteList = getFav();
        // console.log(favoriteList);
        setDisplayPhones(favoriteList);
    }, []);

    const handleDelete = (id) => {
        removeFavorite(id);
        setDisplayPhones(getFav());

    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3'>
            {
                displayPhones.map((elem) => <PhoneCard key={elem.id} phone={elem} deletable={true} handleDelete={handleDelete}></PhoneCard>)
            }
        </div>
    );
};

export default Favorites;