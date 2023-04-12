import styled from "styled-components";
import Avatar from "./Avatar";

const MText = styled.text`
color: #64748B;
`
;

function Profile() {
    return (
        <div className='d-inline-flex flex-row'>
            <Avatar/>
            <div className='ms-3 d-inline-flex flex-column justify-content-center'>
                <div className='title mb-2'>SPBEAUTY</div>
                <MText className="mb-1">Салон красоты</MText>
                <MText>Санкт-Петербург, Невский пр-т. 28</MText>
            </div>                  
        </div>
    );
}

export default Profile;