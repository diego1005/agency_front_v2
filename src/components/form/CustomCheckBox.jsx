import {useField, useFormikContext} from 'formik'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'

const CustomCheckBox = ({name, label, legend}) => {
  const {setFieldValue} = useFormikContext()
  const [field, meta] = useField(name)

  const handleChange = (evt) => {
    const {checked} = evt.target

    setFieldValue(name, checked)
  }

  const configCheckbox = {
    ...field,
    onChange: handleChange,
  }

  const configFormControl = {}

  if (meta && meta.touched && meta.error) {
    configFormControl.error = true
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckbox} checked={configCheckbox.value} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  )
}

export default CustomCheckBox
