
import './App.css'
import { Box, Container, Stack, ThemeProvider, createTheme } from '@mui/material'

import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import Add from './components/Add';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light")
const darkTheme = createTheme({
  palette: {
    mode: mode
  }
})
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Container>
      <Stack direction="row" spacing={2} justifyContent="space-between" gap={8}  >
        <Sidebar setMode = {setMode} mode={mode}/>
        <Feed />
        <Rightbar  />
      </Stack>
      </Container>
      <Add />
    </Box>
    </ThemeProvider>
  )
}

export default App

