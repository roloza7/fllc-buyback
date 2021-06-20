import styled from "styled-components"

const SettingsDiv = styled.div`



`;

const SettingsBar = ({ children }) => {
    return (
        <SettingsDiv> { children } </SettingsDiv>
    )
}

export default SettingsBar;