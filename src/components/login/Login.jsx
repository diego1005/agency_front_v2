import {Button, Stack, Grid, Box, Typography, Container} from '@mui/material'
import {Formik, Form, ErrorMessage} from 'formik'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {useSnackbar} from 'notistack'

import {loginAction} from '../../context/actions/auth'
import {postRequest} from '../../services/httpRequest'
import appContext from '../../context/AppContext'
import CustomTextField from '../form/CustomTextField'
import FormError from '../form/FormError'
import localStorage from '../../utils/localStorage'

import validationSchemaLogin from './validationSchema'

const SignIn = () => {
  const {dispatch} = useContext(appContext)

  const {enqueueSnackbar} = useSnackbar()

  const login = async (body) => {
    try {
      const {msg, user} = await postRequest('/auth/login', body)

      localStorage.write('user', {...user, logged: true})

      dispatch(loginAction(user))
      enqueueSnackbar('Login exitoso', {
        variant: 'success',
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
      })
    } catch (error) {
      enqueueSnackbar(error.response.data.msg, {
        variant: 'error',
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
      })

      throw new Error(error)
    }
  }

  return (
    <Formik
      initialValues={{username: '', password: ''}}
      validationSchema={validationSchemaLogin}
      onSubmit={(body) => login(body)}
    >
      <Container
        maxWidth="sm"
        sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography color="primary" component="h1" variant="h2">
            Tourism Agency
          </Typography>
          <Typography component="h1" variant="h6">
            Ingresar
          </Typography>
          <Box sx={{mt: 1}}>
            <Form style={{width: '100%'}}>
              <Stack p={1} spacing={1}>
                <CustomTextField label="Email" name="username" style={{width: 360}} />
                <ErrorMessage component={FormError} name="username" />
                <CustomTextField
                  fullWidth
                  label="Contraseña"
                  name="password"
                  style={{width: 360}}
                  type="password"
                />
                <ErrorMessage component={FormError} name="password" />
                <Button /* disabled={} */ type="submit" variant="contained">
                  Ingresar
                </Button>
              </Stack>
            </Form>
            <Grid container justifyContent="center">
              <Grid item>
                {/* <Link style={{textDecoration: 'none'}} to="/register" variant="body2">
                  ¿No tiene cuenta? Regístrate
                </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Formik>
  )
}

export default SignIn
