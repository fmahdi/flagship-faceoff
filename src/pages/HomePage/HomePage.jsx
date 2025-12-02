import Banner from '../../components/Banner/Banner';
import PhonesContainer from '../../components/PhonesContainer/PhonesContainer';
import { useLoaderData } from 'react-router';

const HomePage = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <PhonesContainer phones={data}></PhonesContainer>
        </div>
    );
};

export default HomePage;