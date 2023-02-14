import {Button, IconButton, Toolbar, Typography} from '@mui/material'
import {useContext} from 'react'
import {useSnackbar} from 'notistack'
import MenuIcon from '@mui/icons-material/Menu'
import MuiAppBar from '@mui/material/AppBar'
import styled from '@emotion/styled'

import {logoutAction} from '../context/actions/auth'
import appContext from '../context/AppContext'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Navbar = ({open, toggleDrawer}) => {
  const {user, dispatch} = useContext(appContext)

  const {enqueueSnackbar} = useSnackbar()

  const logout = () => {
    dispatch(logoutAction())

    enqueueSnackbar('Sesión cerrada', {
      variant: 'warning',
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
      },
    })
  }

  return (
    <AppBar color="primary" open={open} position="absolute">
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        <IconButton
          aria-label="open drawer"
          color="inherit"
          edge="start"
          sx={{
            marginRight: '36px',
            ...(open && {display: 'none'}),
          }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography noWrap color="inherit" component="h1" sx={{flexGrow: 1}} variant="h5">
          Dashboard
        </Typography>
        <Typography
          marginRight={4}
          variant="body2"
        >{`Hola, ${user.firstname} ${user.lastname}`}</Typography>
        <Button color="inherit" onClick={logout}>
          Salir
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
