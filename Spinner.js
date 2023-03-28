import React, { Component } from 'react'
import loadSpin from '../loadSpin.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
         <img src={loadSpin} alt="loading" />
      </div>
    )
  }
}

export default Spinner
