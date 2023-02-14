import {Divider} from '@mui/material'
import {NavLink} from 'react-router-dom'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AttachmentIcon from '@mui/icons-material/Attachment'
import BadgeIcon from '@mui/icons-material/Badge'
import DashboardIcon from '@mui/icons-material/Dashboard'
import EventNoteIcon from '@mui/icons-material/EventNote'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import PersonIcon from '@mui/icons-material/Person'
import WatchLaterIcon from '@mui/icons-material/WatchLater'

const styles = {
  active: {
    backgroundColor: '#F5F5F5',
    color: '#1976D2',
    display: 'flex',
    textDecoration: 'none',
  },
  inactive: {color: 'unset', display: 'flex', textDecoration: 'none'},
}

export const mainListItems = (
  <>
    <NavLink style={({isActive}) => (isActive ? styles.active : styles.inactive)} to="/dashboard/">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </NavLink>
    <Divider sx={{my: 1}} />
    <NavLink style={({isActive}) => (isActive ? styles.active : styles.inactive)} to="/dashboard/a">
      <ListItemButton>
        <ListItemIcon>
          <AccessTimeIcon />
        </ListItemIcon>
        <ListItemText primary="EJEMPLO" />
      </ListItemButton>
    </NavLink>
    <NavLink style={({isActive}) => (isActive ? styles.active : styles.inactive)} to="/dashboard/b">
      <ListItemButton>
        <ListItemIcon>
          <WatchLaterIcon />
        </ListItemIcon>
        <ListItemText primary="EJEMPLO" />
      </ListItemButton>
    </NavLink>
    <Divider sx={{my: 1}} />
    <NavLink style={({isActive}) => (isActive ? styles.active : styles.inactive)} to="/dashboard/c">
      <ListItemButton>
        <ListItemIcon>
          <EventNoteIcon />
        </ListItemIcon>
        <ListItemText primary="EJEMPLO" />
      </ListItemButton>
    </NavLink>
    <NavLink style={({isActive}) => (isActive ? styles.active : styles.inactive)} to="/dashboard/d">
      <ListItemButton>
        <ListItemIcon>
          <AttachmentIcon />
        </ListItemIcon>
        <ListItemText primary="EJEMPLO" />
      </ListItemButton>
    </NavLink>
    <Divider sx={{my: 1}} />
    <NavLink style={({isActive}) => (isActive ? styles.active : styles.inactive)} to="/dashboard/e">
      <ListItemButton>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="EJEMPLO" />
      </ListItemButton>
    </NavLink>
    <NavLink style={({isActive}) => (isActive ? styles.active : styles.inactive)} to="/dashboard/f">
      <ListItemButton>
        <ListItemIcon>
          <LocalHospitalIcon />
        </ListItemIcon>
        <ListItemText primary="EJEMPLO" />
      </ListItemButton>
    </NavLink>
    <NavLink style={({isActive}) => (isActive ? styles.active : styles.inactive)} to="/dashboard/g">
      <ListItemButton>
        <ListItemIcon>
          <BadgeIcon />
        </ListItemIcon>
        <ListItemText primary="EJEMPLO" />
      </ListItemButton>
    </NavLink>
  </>
)

export const secondaryListItems = (
  <>
    <ListSubheader inset component="div">
      Sólo Super Admin
    </ListSubheader>
    <NavLink style={({isActive}) => (isActive ? styles.active : styles.inactive)} to="/dashboard/h">
      <ListItemButton>
        <ListItemIcon>
          <EventNoteIcon />
        </ListItemIcon>
        <ListItemText primary="EJEMPLO" />
      </ListItemButton>
    </NavLink>
  </>
)
