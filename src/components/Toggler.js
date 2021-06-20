import { func, string } from 'prop-types';
import styled from "styled-components";

const Button = styled.button`
    background: ${({ theme }) => theme.background};
    border:  2px solid ${({ theme}) => theme.toggleBorder};
    color: ${({ theme }) => theme.text};
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0.6rem;
    transition: all 0.50s linear;
`;

const Toggle = ({ theme, toggleTheme }) => {
    return (
        <Button onClick={toggleTheme} >
            {theme === 'light' ? "Dark Mode" : "Light Mode"}
        </Button>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;
export { Button };