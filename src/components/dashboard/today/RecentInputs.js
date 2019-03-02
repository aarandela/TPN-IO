import React, { Component } from 'react'
import InputCard from './InputCard'
import { connect } from 'react-redux'

class RecentInputs extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete (evt) {

  }

  render () {
    console.log('in recentInputs.js', this.props.inputValues)
    const { inputValues } = this.props
    return (
      <div>
        <div className='columns'>
          <InputCard inputValues={inputValues} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValues: state.input
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUrine: (input) => dispatch({
    type: 'ADD_URINE',
    value: input.value,
    date: input.date,
    comments: input.comments
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(RecentInputs)
