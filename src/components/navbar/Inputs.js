import React, { Component } from 'react'
import PickDate from '../PickDate'
import { connect } from 'react-redux'

class Inputs extends Component {
  constructor (props) {
    super(props)

    this.state = {
      category: 'URINE',
      value: '',
      date: new Date(),
      comments: '',
      ostomyChange: ''
    }
    this.handleChangeDate = this.handleChangeDate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputValue = this.handleInputValue.bind(this)
    this.handleCategory = this.handleCategory.bind(this)
    this.handleComments = this.handleComments.bind(this)
    this.handleOstomy = this.handleOstomy.bind(this)
  }

  handleCategory (evt) {
    this.setState({
      category: evt.target.value
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
    this.props.add(
      this.state.category,
      this.state.value,
      this.state.date,
      this.state.comments,
      this.state.ostomyChange)
    evt.target.reset()
    this.setState({
      value: '',
      comments: '',
      ostomyChange: ''
    })
    console.log('store is: ', this.props.input)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='columns box'>

          {/* value */}
          <div className='column is-one-fifth is-right'>
            <div className='select is-rounded is-fullwidth'>
              <select value={this.state.category} onChange={this.handleCategory}>
                <option value='URINE'>Urine</option>
                <option value='GTUBE'>Gtube</option>
                <option value='OSTOMY'>Ostomy</option>
                <option value='ORAL'>Oral</option>
              </select>
            </div>
          </div>

          {/* date */}
          <div className='column'>
            <PickDate
              date={this.state.date}
              handleChange={this.handleChangeDate} />
          </div>

          {/* ternary for oral/ostomy category */}
          <div className='column'>
            {this.state.category === 'ORAL'
              ? <input className='input is-rounded'
                type='text'
                placeholder='Intake Value'
                onChange={this.handleInputValue} />
              : <input className='input is-rounded'
                type='text'
                placeholder='Output Value'
                onChange={this.handleInputValue} />}
          </div>
          {this.state.category === 'OSTOMY' ? <div className='column'>
            <input className='input is-rounded' type='text' placeholder='# of times changed' value={this.state.ostomyChange} onChange={this.handleOstomy} />
          </div> : null}

          {/* comments */}
          <div className='column'>
            <input className='input is-rounded' type='text' placeholder='Comments' value={this.state.comments} onChange={this.handleComments} />
          </div>

          {/* button */}
          <div className='column'>
            {this.state.value ? <div className='control'>
              <button className='button is-primary is-rounded'>Submit</button>
            </div> : <div className='control'>
              <button className='button is-primary is-rounded' disabled>Submit</button>
            </div>}

          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  input: state
})

const mapDispatchToProps = (dispatch) => ({
  add: (category, value, date, comments, change) => dispatch({
    type: `ADD_${category}`,
    payload: { value, date, comments, change }
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Inputs)
