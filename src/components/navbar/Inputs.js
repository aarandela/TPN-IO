import React, { Component } from 'react'
import PickDate from '../dashboard/PickDate'
import { connect } from 'react-redux'

class Inputs extends Component {
  constructor (props) {
    super(props)

    this.state = {
      type: 'urine',
      value: null,
      date: new Date(),
      comments: '',
      ostomyChange: null
    }
    this.handleChangeDate = this.handleChangeDate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputValue = this.handleInputValue.bind(this)
    this.handleType = this.handleType.bind(this)
    this.handleComments = this.handleComments.bind(this)
    this.handleOstomy = this.handleOstomy.bind(this)
  }

  handleType (evt) {
    this.setState({
      type: evt.target.value
    })
  }

  handleChangeDate (date) {
    this.setState({
      date: date
    })
  }

  handleInputValue (evt) {
    this.setState({
      value: evt.target.value
    })
  }
  
  handleComments (evt) {
    this.setState({
      comments: evt.target.value
    })
  }

  handleOstomy (evt) {
    this.setState({
      ostomyChange: evt.target.value
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    evt.target.reset()
    this.setState({
      value: null,
      comments: '',
      ostomyChange: null
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='columns box'>
          <div className='column is-one-fifth is-right'>
            <div className='select is-rounded is-fullwidth'>
              <select value={this.state.type} onChange={this.handleType}>
                <option value='urine'>Urine</option>
                <option value='gtube'>Gtube</option>
                <option value='ostomy'>Ostomy</option>
                <option value='oral'>Oral</option>
              </select>
            </div>
          </div>
          <div className='column'>
            <PickDate
              date={this.state.date}
              handleChange={this.handleChangeDate} />
          </div>
          <div className='column'>
            {this.state.type === 'oral' ? <input className='input is-rounded'
              type='text'
              placeholder='Intake Value'
              onChange={this.handleInputValue} /> : <input className='input is-rounded'
              type='text'
              placeholder='Output Value'
              onChange={this.handleInputValue} />}
          </div>
          {this.state.type === 'ostomy' ?  <div className='column'>
            <input className='input is-rounded' type='text' placeholder='# of times changed' value={this.state.ostomyChange} onChange={this.handleOstomy}/>
          </div> : null}
          <div className='column'>
            <input className='input is-rounded' type='text' placeholder='Comments' value={this.state.comments} onChange={this.handleComments}/>
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

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Inputs)