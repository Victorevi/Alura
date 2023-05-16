import styled from 'styled-components';

const MenuOption = styled.ul`
  display: flex;
`;
const Option = styled.li`
  align-items: center;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  margin: 10px;
  height: 100%;
`;
const textOption = ['categorias','favoritos','minha estante'];

function MenuOptions() {
    return (
        <MenuOption>
          {textOption.map((text) => (
            <Option><p>{text}</p></Option>
          ))}
        </MenuOption>
    )
}

export default MenuOptions;