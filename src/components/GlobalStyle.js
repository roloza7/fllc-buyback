import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

  html, body, #root, .App {
    margin: 0;
    height: 100vh;
    overflow:hidden;
  }

  .App {
    display: flex;
    flex-flow: column;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Helvetica;
    fonts: ["sans-serif", "Roboto"]
    generic-family: sans-serif;
    transition: all 0.50s linear;
  }
  `
