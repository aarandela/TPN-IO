import React, { Component } from 'react'
import { connect } from 'react-redux'

class InputCard extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete (evt) {
    console.log('index in delete', evt.target.value)
    console.log(this.props.inputValues)
    this.props.delete(evt.target.value)
  }
  render () {
    const { index,
      type,
      value,
      date,
      comments,
      ostomyChange
    } = this.props

    return (

      <div className='column'>
        <div className='card' key={index} value={index}>
          <header className='card-header has-text-centered'>
            <p className='card-header-title'>
              {type}
            </p>
          </header>

          <div className='card-content'>
            <div className='content'>
              <time>{date.toString()}</time> <br />
              <strong>Value: </strong> {value} <br />
              <strong>Comments: </strong> {comments}
              {ostomyChange != null ? <p>
                <strong>Changed: </strong> {ostomyChange}
              </p> : null}
            </div>
          </div>

          <footer className='card-footer' value={index}>
            <button onClick={this.handleDelete} value={index} className='is-rounded card-footer-item'>Delete</button>
          </footer>
        </div>
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  delete: (index) => dispatch({
    type: 'DELETE',
    index
  })
})

export default connect(null, mapDispatchToProps)(InputCard)
