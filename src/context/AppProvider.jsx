import {useEffect, useMemo, useReducer, useState} from 'react'

import localStorage from '../utils/localStorage'

import appContext from './AppContext'
import authReducer from './reducers/authReducer'

const init = () => localStorage.read('user') || {logged: false}

const AppProvider = ({children}) => {
  const [user, dispatch] = useReducer(authReducer, {}, init)
  const [open, setOpen] = useState(true)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if (!user) return
    localStorage.write('user', user)
  }, [user])

  const value = useMemo(
    () => ({
      user,
      dispatch,
      open,
      toggleDrawer,
    }),
    [user, open]
  )

  return <appContext.Provider value={value}>{children}</appContext.Provider>
}

export default AppProvider
