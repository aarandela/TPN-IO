import React from 'react'

const InputCard = () => {
  return (
    <div>
      <div class='column'>
        <div class='card'>
          <header class='card-header has-text-centered'>
            <p class='card-header-title'>
                  Urine
            </p>
          </header>
          <div class='card-content'>
            <div class='content'>
              <time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time> <br />
              <strong>Value: </strong> 23 <br />
              <strong>Comments: </strong> yellow
            </div>
          </div>
          <footer class='card-footer'>
            <a href='#' class='card-footer-item'>Delete</a>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default InputCard
