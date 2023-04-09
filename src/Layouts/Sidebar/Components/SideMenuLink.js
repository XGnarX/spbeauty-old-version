import ArrowExpandIcon from '../../../Icons/ArrowExpandIcon';
import Clickable from '../../../Components/Clickable';
import styled from 'styled-components';

function SideMenuLink({name, isActive, icon}) {
    const Container = styled.div`
        background-color: ${isActive ? 'rgba(100, 116, 139, 0.12);' : '#F8FAFC'};
        padding-top: 12px;
        padding-bottom: 12px;
        border-radius: 20px;
        &:hover {
            opacity: 0.8;
        }
    `;

    const TextContainer = styled.div`
        margin-left: 12px;
    `;

    if (icon === undefined) {
        icon = <ArrowExpandIcon/>;
    }
    
    return (
        <Clickable fillWidth={true}>
            <Container className="d-flex align-self-center align-items-center justify-content-start px-3">
                {icon}
                <TextContainer>{name}</TextContainer>
            </Container>
        </Clickable>
    );
}
  
export default SideMenuLink;