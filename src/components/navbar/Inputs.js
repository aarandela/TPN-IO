import React, { Component } from 'react'
import PickDate from '../dashboard/PickDate'

export default class Inputs extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: null,
      date: new Date(),
      comments: ''
    }
    this.handleChangeDate = this.handleChangeDate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  handleChangeDate (date) {
    this.setState({
      date: date
    })
  }

  handleInput (evt) {
    this.setState({
      value: evt.target.value
    })
  }

  clearForm (evt) {
    this.setState({
      value: null,
      comments: ''
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='columns box'>
          <div className='column is-one-fifth is-right'>
            <div className='select is-rounded'>
              <select>
                <option>Urine</option>
                <option>Gtube</option>
                <option>Ostomy</option>
              </select>
            </div>
          </div>
          <div className='column'>
            <input className='input is-rounded'
              type='text'
              placeholder='Input Value'

              onChange={this.handleInput} />
          </div>
          <div className='column'>
            <PickDate
              date={this.state.date}
              handleChange={this.handleChangeDate} />
          </div>
          <div className='column'>
            <input className='input is-rounded' type='text' placeholder='Comments' />
          </div>
          <div className='column'>
            <div className='control'>
              <button className='button is-primary is-rounded'>Submit</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}
