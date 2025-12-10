import React, { useEffect, useState } from 'react';
import { getFav } from '../../utils';
import PhoneCard from '../../components/PhoneCard/PhoneCard';

const Favorites = () => {
    const [displayPhones, setDisplayPhones] = useState([]);

    useEffect(() => {

        const favoriteList = getFav();
        console.log(favoriteList);
        setDisplayPhones(favoriteList);
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-3'>
            {
                displayPhones.map((elem) => <PhoneCard key={elem.id} phone={elem} deletable={true}></PhoneCard>)
            }
        </div>
    );
};

export default Favorites;