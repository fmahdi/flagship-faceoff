import PhoneCard from "../PhoneCard/PhoneCard";

const PhonesContainer = ({phones}) => {
    return (
        <div>
            <h1>This is Phones-Container {phones.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                phones.map((elem)=><PhoneCard key={elem.id} phone={elem}></PhoneCard>)
            }
            </div>
        </div>
    );
};

export default PhonesContainer;