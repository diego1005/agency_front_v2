import {Navigate} from 'react-router-dom'
import {useContext} from 'react'

import AppContext from '../context/AppContext'

const PublicRoutes = ({children}) => {
  const {user} = useContext(AppContext)

  return user?.role?.name === 'super' || user?.role?.name === 'editor' ? (
    <Navigate to="/dashboard" />
  ) : (
    children
  )
}

export default PublicRoutes
