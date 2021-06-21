import styled from "styled-components"

const InfoDiv = styled.div`
    flex-grow: 1;
    justify-content: space-between;
    display: table-cell;
    margin: 0;
    padding: 0;
`;

const Titles = styled.h1`
    display: inline-block;
    margin: 0;
    padding: 0;
    margin-top: auto;
    margin-right: 10px;

`;

const Descriptions = styled.h2`
    display: inline-block;
    margin: 0;
    padding: 0;
    margin-top: auto;
    margin-right: 10px

`;

const InfoBar = () => {
    return (
        <InfoDiv>
            <Titles> No Visual </Titles>
            <Descriptions> Buyback </Descriptions>
        </InfoDiv>
    )
}

export default InfoBar;