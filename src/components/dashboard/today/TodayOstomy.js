import React from 'react'

const TodayOstomy = () => {
  return (
    <React.Fragment>
      <div className='tile is-4 is-parent'>
        <article className='tile is-child
                            notification
                            is-primary
                            has-text-centered
                            has-text-grey-darker'>
          <div className='content'>
            <p className='title'>Ostomy</p>
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

export default TodayOstomy
