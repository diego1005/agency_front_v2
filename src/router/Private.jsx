import {Routes, Route} from 'react-router-dom'

import Home from '../pages/Home'

const Private = () => (
  <Routes>
    <Route element={<Home />} path="/" />
  </Routes>
)

export default Private
