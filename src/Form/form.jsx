import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import FormControl from '@material-ui/core/FormControl'
// import FormLabel from '@material-ui/core/FormLabel'
// import RadioGroup from '@material-ui/core/RadioGroup'
// import Radio from '@material-ui/core/Radio'
// import Select from '@material-ui/core/Select'
// import MenuItem from '@material-ui/core/MenuItem'
// import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'

const defaultValues = {
  name: '',
  phone: 0,
  email: '',
}
const Form = () => {
  const [formValues, setFormValues] = useState(defaultValues)
  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formValues)
  }
  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems='center' justify='center' direction='column'>
        <Grid item>
          <TextField
            id='name-input'
            name='name'
            label='Name'
            type='text'
            variant="filled"
            value={formValues.name}
            onChange={handleInputChange}
          />{' '}
        </Grid>{' '}
        <Grid item>
          <TextField
            id='phone-input'
            name='phone'
            label='Phone'
            type='number'
            value={formValues.phone}
            onChange={handleInputChange}
          />{' '}
        </Grid>{ ' ' }
        <Grid item>
          <TextField
            id='email-input'
            name='email'
            label='Email'
            type='text'
            value={formValues.email}
            onChange={handleInputChange}
          />{' '}
        </Grid>
        <Button variant='contained' color='primary' type='submit'>
          Submit{' '}
        </Button>{' '}
      </Grid>{' '}
    </form>
  )
}
export default Form
