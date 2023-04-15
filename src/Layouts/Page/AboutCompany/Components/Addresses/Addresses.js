import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";

import styled from "styled-components";

const Address = styled.div`
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    padding: 24px;
`;

function Addresses() {
    return (
        <Address className='d-inline-flex flex-column gap-2 col justify-content-between me-5'>
            <div className='d-flex flex-column gap-3'>
            <div className='title'>Адреса заведений</div>
            <div className='d-flex flex-column gap-4 mt-4'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </div>
            </div>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            
        </Address>
    );
}

export default Addresses;