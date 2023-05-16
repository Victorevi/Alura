import styled from 'styled-components';
import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import pesquisa from '../../img/pesquisa.svg';

const MenuIcon = styled.ul`
  display: flex;
  align-items: center;
`;
const Icon = styled.li`
  margin: 14px;
`;
const icon = [perfil,sacola,pesquisa];

function MenuIcons() {
    return (
        <MenuIcon>
          {icon.map((icon) =>(
            <Icon><img src={icon}></img></Icon>
          ))}    
        </MenuIcon>
    )
}

export default MenuIcons;