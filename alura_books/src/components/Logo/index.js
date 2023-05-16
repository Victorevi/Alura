import styled from 'styled-components';
import logo from '../../img/logo.svg';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    margin: 5px;
`;
const ImgLogo = styled.img`
    padding-right: 8px;
`

function Logo() {
    return (
        <LogoContainer>
            <ImgLogo 
            src={logo}
            alt='Logo AluraBooks'/>
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo;