import {Navigate} from 'react-router-dom'
import {useContext} from 'react'

import AppContext from '../context/AppContext'

const PrivateRoutes = ({children}) => {
  const {user} = useContext(AppContext)

  return user?.role?.name === 'super' || user?.role?.name === 'editor' ? (
    children
  ) : (
    <Navigate to="/" />
  )
}

export default PrivateRoutes
