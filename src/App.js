import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components"
import { GlobalStyles } from "./components/GlobalStyle"
import { lightTheme, darkTheme } from "./components/Themes"

// --------------- components ---------------
import Toggle from './components/Toggler'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content'
// -------------- scripts -------------------
import { useDarkMode } from './components/scripts/useDarkMode'

const App = () => {

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const altMode = theme === 'light' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
        <div className="App">
          <ThemeProvider theme={altMode}>
            <Navbar>
              <Toggle theme={theme} toggleTheme={themeToggler}/>
            </Navbar>
          </ThemeProvider>
          <Content></Content>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
