import React from 'react'
import DatePicker from 'react-datepicker'

class DateRange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null
    }
    this.handleChangeStart = this.handleChangeStart.bind(this)
    this.handleChangeEnd = this.handleChangeEnd.bind(this)
  }

  handleChangeStart (date) {
    this.setState({
      startDate: date
    })
  }

  handleChangeEnd (date) {
    this.setState({
      endDate: date
    })
  }

  render () {
    return (
      <React.Fragment>
        <div style={{ padding: '0 0 70px 0' }} />
        <div className='columns'>
          <div className='column' />
          <div className='column'>
            <DatePicker
              className='input'
              placeholderText='Start Date'
              selected={this.state.startDate}
              selectsStart
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleChangeStart}
              shouldCloseOnSelect={false}
              showTimeSelect
              timeFormat='HH:mm'
              timeIntervals={15}
              dateFormat='MMMM d, yyyy h:mm aa'
              timeCaption='time'
            />
          </div>

          <div className='column'>
            <DatePicker
              className='input'
              placeholderText='End Date'
              selected={this.state.endDate}
              selectsEnd
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleChangeEnd}
              shouldCloseOnSelect={false}
              showTimeSelect
              timeFormat='HH:mm'
              timeIntervals={15}
              dateFormat='MMMM d, yyyy h:mm aa'
              timeCaption='time'
            />
          </div>
          <div className='column'>
            <div className='control'>
              <button className='button is-info'>Search</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default DateRange
