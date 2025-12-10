import React, { useState } from 'react';

const Favorites = () => {
    const [displayPhones, setDisplayPhones] = useState([]);

    return (
        <div>
            {
                displayPhones.map((elem) => <PhoneCard key={elem.id} phone={elem} deletable={true}></PhoneCard>)
            }
        </div>
    );
};

export default Favorites;