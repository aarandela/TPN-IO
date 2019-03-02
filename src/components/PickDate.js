import React from 'react'
import DatePicker from 'react-datepicker'

const PickDate = ({ date, handleChange }) => {
  return (
    <div>

      <DatePicker
        className='input is-rounded'
        selected={date}
        onChange={handleChange}
        shouldCloseOnSelect={false}
        showTimeSelect
        timeFormat='HH:mm'
        timeIntervals={15}
        dateFormat='MMMM d, yyyy h:mm aa'
        timeCaption='time'
      />

    </div>
  )
}

export default PickDate
