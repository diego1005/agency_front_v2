import {Divider, IconButton, List, Toolbar} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import MuiDrawer from '@mui/material/Drawer'
import styled from '@emotion/styled'

import {mainListItems, secondaryListItems} from './List'
import {useContext} from 'react'
import appContext from '../../context/AppContext'

const drawerWidth = 240

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
  ({theme, open}) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  })
)

const Aside = ({open, toggleDrawer}) => {
  const {user} = useContext(appContext)

  return (
    <Drawer open={open} variant="permanent">
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {mainListItems}
        {user.role.name === 'super' && (
          <>
            <Divider sx={{my: 1}} />
            {secondaryListItems}
          </>
        )}
      </List>
    </Drawer>
  )
}

export default Aside
