import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'

import { Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap'

import './InputSearchForm.css'

class InputSearchForm extends Component {
  constructor () {
    super()
    this.state = {
      fireRedirect: false,
      job: ''
    }
  }

  handleChange = e => {
    this.setState({
      job: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ fireRedirect: true })
  }
  
  render () {
    const { fireRedirect, job } = this.state
    return (
      <Form className='InputSearchForm-content' onSubmit={this.handleSubmit}>
        <FormGroup controlId='formBasicText' >
          <InputGroup className='inputSearch'>
            <FormControl
              type='text'
              placeholder='Lawyer, Developer, Doctor...'
              name='occupationSearch'
              onChange={this.handleChange}
              value={this.state.occupationSearch}
            />
            <FormControl.Feedback />
            <InputGroup.Button className='ButtonSubmit'>
              <Button bsStyle='primary' type='submit'>Find It!</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        { fireRedirect && job && <Redirect to={`/find/${job}`} push /> }
      </Form>
    )
  }
}

export default InputSearchForm
