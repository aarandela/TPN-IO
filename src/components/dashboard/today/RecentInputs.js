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

  handleDelete (index) {
    console.log(this.props.inputValues)
    this.props.delete(index)
  }

  render () {
    console.log('in recentInputs.js', this.props)
    const { inputValues } = this.props
    return (
      <div>
        <div className='columns'>
          {this.props.inputValues.map((value, index) =>
            <InputCard key={index}
              index={index}
              type={value.type}
              value={value.value}
              date={value.date}
              comments={value.comments}
              ostomyChange={value.ostomyChange}
              handleDelete={this.handleDelete}
            />)}
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
  delete: (index) => dispatch({
    type: 'DELETE',
    value: null,
    date: null,
    comments: null,
    ostomyChange: null
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(RecentInputs)
