import styled from "styled-components"
import InfoBar from "./InfoBar";
import SettingsBar from "./SettingsBar"

const TopNavbar = styled.header`
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-grow: 0;
    justify-content: space-between;
    z-index: 10;
    transition: all 0.50s linear;
    padding: 2px 5px;
`;

const Navbar = ({ children }) => {
    return (
        <TopNavbar>
            <InfoBar></InfoBar>
            <SettingsBar> { children }</SettingsBar>
        </TopNavbar>
    )
};

export default Navbar