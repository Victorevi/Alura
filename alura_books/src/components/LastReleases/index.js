import styled from "styled-components";
import { books } from "./dataLastReleases";
import { Title } from "../Title";

const LastReleasesContainer = styled.section`
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;


const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastReleases () {
    return (
        <LastReleasesContainer>
            <Title color="#ffa125">Últimos Lançamentos</Title>
            <NewBooksContainer>
                {books.map( book => (
                <img src={book.src}/>
                ))}
            </NewBooksContainer>
        </LastReleasesContainer>
    )
};

export default LastReleases;