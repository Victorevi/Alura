import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { books } from "./dataSearch";
import { Title } from "../Title";

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #2a2c34 35%, #1c1f25 165%);
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`;

const Subtitle = styled.h3`
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 40px;
`;

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`;

function Search() {
    const [typedBook, setTypedBook] = useState([]);

    return (
        <SearchContainer>
            <Title padding="10px 0px">Já sabe por onde começar?</Title>
            <Subtitle>Entre seu livro em nossa estrante!</Subtitle>
            <Input
                placeholder="Escreva sua proxima leitura!"
                onBlur={event => {
                    const typedText = event.target.value;
                    const resultSearch = books.filter( book => book.name.includes(typedText) )
                    setTypedBook(resultSearch)
                }}
            />
            { typedBook.map( book => (
                <Result>
                    <p>{book.name}</p>
                    <img src={book.src}/>
                </Result>
            ))}
        </SearchContainer>
    )
}

export default Search;