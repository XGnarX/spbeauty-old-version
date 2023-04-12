import styled from 'styled-components';
import SearchIcon from '../../../../Icons/SearchIcon';
import IconOnlyButton from '../../../../Components/IconOnlyButton';

const WrapperInput = styled.div`
    position:relative;
    width: 216px;
`;

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    color: #94A3B8;
    width: 100%;
    &:hover {
        background: #F8FAFC;
    }
    &:focus {
        background: #F8FAFC;
    }
`;

const SearchIconWrapper = styled.div`
    background-color: none;
    position: absolute;
    box-sizing:border-box;
    right: 2.5px;  /* Здесь можно добавить отступ от правого края, чтобы сдвинуть иконку левее */
    top:50%;
    transform: translateY(-50%);
`;

function SearchField() {
    return (
        <WrapperInput className='d-inline-flex'>  {/* Устанавливает ширину поля и включает относительное положение */}
            <Input className='px-3 py-2' placeholder='Найти на странице...'/>
            <SearchIconWrapper className='px-3 py-2'>  {/* Устанавливает абсолютное положение внутри поля ввода */}
                <IconOnlyButton icon={<SearchIcon/>}/>
            </SearchIconWrapper>
        </WrapperInput>
    );
}

export default SearchField;