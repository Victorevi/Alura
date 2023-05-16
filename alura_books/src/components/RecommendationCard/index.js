import styled from "styled-components";
import { Title } from "../Title";

const Card = styled.div`
    align-items: center;
    background-color: antiquewhite;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`

const Button = styled.button`
    background-color: #EB9B00;
    color: antiquewhite;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`

const Description = styled.p`
    max-width: 300px;
    color: #000;
`

const Subtitle = styled.h4`
    color: #000;
    font-size: 22px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgBook = styled.img`
    width: 150px;
`

function RecommendationCard ({title, subtitle, description, image}) {
    return (
        <Card>
            <div>
                <Title 
                    color="#000"
                    fontSize="20px"
                    textAlign="left"
                >{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Description>{description}</Description>
            </div>
            <div>
                <ImgBook src={image}/>
                <Button>Saiba mais</Button>
            </div>
        </Card>
    )
}

export default RecommendationCard;