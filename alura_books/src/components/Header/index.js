import styled from 'styled-components';
import Logo from '../Logo';
import MenuOptions from '../MenuOptions';
import MenuIcons from '../MenuIcons';

const AppHeader = styled.header`
    background-color: #2D323B;
    display: flex;
    padding: 0 15px;
    justify-content:space-between;
`;
 
function Header() {
    return (
      <AppHeader>
        <Logo/>
        <MenuOptions/>
        <MenuIcons/>
      </AppHeader>
    )
}

export default Header;