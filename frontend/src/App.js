import { Box, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Compiler from "./components/Compiler";
import GlobalChat from "./components/GlobalChat";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Messages from "./components/Messages";
import Problems from "./components/Problems";
import SignUp from "./components/SignUp";
import TopBar from "./components/TopBar";
import React from "react";
import contacts from "./consts/messages";
import { useState, useEffect } from "react";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import { DarkModeRounded } from "@mui/icons-material";
import { LightModeRounded } from "@mui/icons-material";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkmode') === 'true'
  )

  useEffect(() => {
    localStorage.setItem('darkmode', darkMode);
  }, [darkMode]);

  function ModeToggle() {
    return <Tooltip arrow placement='left' title={darkMode === true ? 'Switch to light mode' : 'Switch to dark mode'}>
      <IconButton  sx={{ mr: '10px' }}  onClick={() => setDarkMode(darkMode === true ? false : true)}>
        {darkMode === true ? <DarkModeRounded/> : <LightModeRounded/>}
      </IconButton>
    </Tooltip>
  }

  // Neshtata dolu oshte sa v razrabotka

  // const lightTheme = createTheme({
  //   palette: {
  //     mode: 'light',
  //     primary: {
  //       main: '#5c6bc0',
  //     },
  //     secondary: {
  //       main: '#bdbdbd',
  //     },
  //     background: {
  //       paper: '#c5cae9',
  //       default: '#e0e0e0',
  //     }
  //   }
  // })

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: 'dark',
  //     primary: {
  //       main: '#14141a',
  //     },
  //     secondary: {
  //       main: '#00ADB5',
  //     },
  //     background: {
  //       default: '#393E46',
  //     },
  //   },
  // })

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light' 
    }
  })

  return <BrowserRouter>
    <ThemeProvider theme={theme}>
      <TopBar darkModeButton={<ModeToggle/>}/>
      <Box sx={{mt: {xs: '56px', sm: '64px'}}}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/global" element={<GlobalChat/>}/>
          <Route path="/dm" element={<Messages />}>
            {contacts.map((contact, index) => (
              <Route path={contact.user} element={<Messages chatId={index}/>}/>
            ))}
          </Route>
          <Route path="/problems" element={<Problems/>} />
          <Route path="/compiler" element={<Compiler/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/log-in" element={<LogIn/>} />
        </Routes>
      </Box>
    </ThemeProvider>
  </BrowserRouter>
}

export default App;
