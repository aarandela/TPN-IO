import React from 'react'

const InputCard = () => {
  return (
    <div>
      <div className='column'>
        <div className='card'>
          <header className='card-header has-text-centered'>
            <p className='card-header-title'>
                  Urine
            </p>
          </header>
          <div className='card-content'>
            <div className='content'>
              <time dateTime='2016-1-1'>11:09 PM - 1 Jan 2016</time> <br />
              <strong>Value: </strong> 23 <br />
              <strong>Comments: </strong> yellow
            </div>
          </div>
          <footer className='card-footer'>
            <a href='#' className='card-footer-item'>Delete</a>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default InputCard
