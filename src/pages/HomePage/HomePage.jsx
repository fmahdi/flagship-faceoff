import Banner from '../../components/Banner/Banner';
import PhonesContainer from '../../components/PhonesContainer/PhonesContainer';
import { useLoaderData } from 'react-router';

const HomePage = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <PhonesContainer></PhonesContainer>
        </div>
    );
};

export default HomePage;