import {Typography} from '@mui/material'

const Copyright = (props) => (
  <Typography align="center" color="text.secondary" variant="body2" {...props}>
    {'Copyright © '}
    {`Nombre de la empresa de Francisco/Diego - `}
    {new Date().getFullYear()}.
  </Typography>
)

export default Copyright
