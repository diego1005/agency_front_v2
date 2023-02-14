import {createTheme, ThemeProvider} from '@mui/material/styles'
import {useContext} from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar'

import appContext from '../context/AppContext'

import Aside from './aside/Aside'
import Copyright from './footer/Copyright'
import Navbar from './Navbar'

const mdTheme = createTheme()

const Dashboard = ({children}) => {
  const {open, toggleDrawer} = useContext(appContext)

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{display: 'flex'}}>
        <CssBaseline />
        <Navbar open={open} toggleDrawer={toggleDrawer} />
        <Aside open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Grid container spacing={3}>
              {children}
            </Grid>
            <Copyright sx={{pt: 4}} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Dashboard
