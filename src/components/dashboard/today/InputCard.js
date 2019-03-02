import React from 'react'

const InputCard = ({ key,
  index,
  type,
  value,
  date,
  comments,
  ostomyChange,
  handleDelete }) => {
  return (
    <div>
      <div className='column'>
        <div className='card'>
          <header className='card-header has-text-centered'>
            <p className='card-header-title'>
              {type}
            </p>
          </header>
          <div className='card-content'>
            <div className='content'>
              <time dateTime='2016-1-1'>{date}</time> <br />
              <strong>Value: </strong> {value} <br />
              <strong>Comments: </strong> {comments}
              {ostomyChange != null ? <p>
                <strong>Changed: </strong> {ostomyChange}
              </p> : null}
            </div>
          </div>
          <footer className='card-footer'>
            <a onClick={handleDelete} className='card-footer-item'>Delete</a>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default InputCard
