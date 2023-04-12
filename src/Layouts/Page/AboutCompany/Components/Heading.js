import PrimaryButton from "../../../../Components/PrimaryButton";
function Heading() {
    return (
        <div className='d-flex flex-row justify-content-between mt-5'>
            <h1 className='large-title'>Данные о компании</h1>
            <PrimaryButton>Закрыть запись</PrimaryButton>
        </div>
    );
}

export default Heading;