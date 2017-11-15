import React, {Component} from 'react'

const HigherOrderComponent = (WrappedComponent) => {
  return class HigherOrderComponent extends Component {
    isEmpty(prop) {
      return (
        prop === null ||
        prop === undefined ||
        (prop.hasOwnProperty('length') && prop.length === 0)) ||
        (prop.constructor === Object && Object.keys(prop).length === 0
      )
    }
    render() {
      return this.isEmpty(props) ? <div></div> : <WrappedComponent [...props] />
    }

  }
}

export default HigherOrderComponent