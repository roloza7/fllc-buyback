import styled from "styled-components"
import InputForm from "./InputForm"


const ContentBox = styled.div`
    display: flex;
    flex-grow: 1;
`;




const Content = ({ children }) => {
    return (
        <ContentBox>
            <InputForm/>
        </ContentBox>
    )
}

export default Content