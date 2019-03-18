import React, { Component } from 'react'
import InputCard from './InputCard'
import { connect } from 'react-redux'

class RecentInputs extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    console.log('in recentInputs.js', this.props)
    return (
      <div className='columns'>
        {this.props.inputValues.map((value, index) =>
          <InputCard
            index={index}
            type={value.type}
            value={value.value}
            date={value.date}
            comments={value.comments}
            ostomyChange={value.ostomyChange}
          />)}
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
  delete: (index) => dispatch({
    type: 'DELETE',
    index
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(RecentInputs)
