import React from 'react';
import { useLoaderData } from 'react-router';

const PhonesContainer = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>This is Phones-Container</h1>
        </div>
    );
};

export default PhonesContainer;