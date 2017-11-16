import React, {Component} from 'react'

import {Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button, InputGroup} from 'react-bootstrap'

import './InputSearchForm.css'

class InputSearchForm extends Component {
  constructor () {
    super()
    this.state = {
      occupationSearch: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    this.setState({
      occupationSearch: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
  }
  render () {
    return (
      <Form className='InputSearchForm-content' onSubmit={this.handleSubmit}>
        <h3>Do you need someone? a friend can help you!</h3>
        <FormGroup controlId='formBasicText' >
          <ControlLabel>Do you need a lawyer? or a teacher? or do you need a nurse? Find it among yours friends!</ControlLabel>
          <InputGroup bsSize='large' className='inputSearch'>
            <FormControl
              type='text'
              autoFocus
              placeholder='Describe what you are looking for...'
              name='occupationSearch'
              onChange={this.handleChange}
              value={this.state.occupationSearch}
            />
            <FormControl.Feedback/>
            <HelpBlock >example: Lawyer, Developer, Doctor...</HelpBlock>
            <InputGroup.Button className='ButtonSubmit'>
              <Button bsStyle='default' type='submit'>Find It!</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </Form>
    )
  }
}

export default InputSearchForm
