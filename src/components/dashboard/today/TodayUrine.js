import React from 'react'

const TodayUrine = () => {
  return (
    <React.Fragment>
      <div className='tile is-4 is-parent'>
        <article className='tile is-child
                            notification
                            is-warning
                            has-text-centered'>
          <div className='content'>
            <p className='title'>Urine</p>
            <p className='subtitle has-text-left'>With even more content</p>
            <div className='content has-text-left'>
                  content here
            </div>
          </div>
        </article>
      </div>
    </React.Fragment>
  )
}

export default TodayUrine
