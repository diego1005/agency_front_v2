const style = {
  color: '#d32f2f',
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontSize: '0.75rem',
  fontWeight: '400',
  letterSpacing: '0.03333em',
  lineHeight: '1.66',
  marginBottom: '0',
  marginLeft: '0',
  marginRight: '0',
  marginTop: '3px',
  texAlign: 'left',
}

const FormError = ({error}) => <p style={style}>{error}</p>

FormError.defaultProps = {
  error: '',
}

export default FormError
