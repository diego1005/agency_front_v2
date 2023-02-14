import {useField} from 'formik'
import TextField from '@mui/material/TextField'

const CustomTimePicker = ({name, label, ...otherProps}) => {
  const [field, meta] = useField(name)

  const configDateTimePicker = {
    ...field,
    ...otherProps,
    type: 'date',
    variant: 'outlined',
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  }

  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true
    configDateTimePicker.helperText = meta.error
  }

  return <TextField {...configDateTimePicker} />
}

export default CustomTimePicker
