import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

const initialFormValues = { petName: '', petType: '' }

function SimpleForm() {
  const [pets, setPets] = useState(petsList)
  const [formValues, setFormValues] = useState(initialFormValues)
  console.log(formValues)

  const change = (event) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
    // const currentFormValues = {...formValues}
    // const newObj = {}
    // newObj[name] = value
    // const final = {...currentFormValues, newObj}
    // setFormValues(final)
  }

  return (
    <div className='container'>
      <h1>Simple Form App</h1>
      {pets.map((pet, idx) => {
        return (
          <div key={idx}>
            {pet.petName} is a {pet.petType}
          </div>
        )
      })}
      <form>
        <input
          type='text'
          name='petName'
          onChange={change}
          value={formValues.petName}
        />
        <input 
          type='text' 
          name='petType' 
          onChange={change} 
          value={formValues.petType}
        />
      </form>
    </div>
  )
}

render(
  <>
    <SimpleForm />
    {/* <App /> */}
  </>
  , document.querySelector('#root')
)
