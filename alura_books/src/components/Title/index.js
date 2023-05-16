import styled from "styled-components";

export const Title = styled.h2`
    color: ${props => props.color || 'inherit'};
    width: 100%;
    padding: ${props => props.padding || '30px 0'};
    font-size: ${props => props.fontSize || '36px'};
    text-align: ${props => props.textAlign || 'center'};
    margin: 0;
`;