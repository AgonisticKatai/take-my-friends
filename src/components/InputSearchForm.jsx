import React from 'react'

import {Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button, InputGroup} from 'react-bootstrap'

import './InputSearchForm.css'

const InputSearchForm = () => {
  return (
    <Form className='InputSearchForm-content'>
      <h3>Do you need someone? a friend can help you!</h3>
      <FormGroup
        controlId='formBasicText'
      >
        <ControlLabel>Do you need a lawyer? or a teacher? or do you need a nurse? Find it among yours friends!</ControlLabel>
        <InputGroup bsSize='large'>
          <FormControl
            type='text'
            value=''
            autoFocus
            placeholder='Describe what you are looking for...'
          />
          <FormControl.Feedback />
          <HelpBlock>example: Lawyer, Developer, Doctor...</HelpBlock>
          <InputGroup.Button className='ButtonSubmit'>
            <Button type='submit'>Find It!</Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    </Form>
  )
}

export default InputSearchForm
