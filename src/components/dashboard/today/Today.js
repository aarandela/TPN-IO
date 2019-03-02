import React, { Component } from 'react'
import RecentInputs from './RecentInputs'
import TodayUrine from './TodayUrine'
import TodayGtube from './TodayGtube'
import TodayOstomy from './TodayOstomy'

export default class Today extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    return (
      <React.Fragment>
        <section className='section' style={{ padding: '20px 0 10px 0' }}>
          <div className='container'>
            <h1 className='title has-text-centered' style={{ padding: '0' }}
            >Recent Inputs
            </h1>
          </div>
        </section>

        <div className='columns'>
          <RecentInputs />
        </div>

        <div className='tile is-ancestor'>
          <TodayUrine />
          <TodayGtube />
          <TodayOstomy />
        </div>
      </React.Fragment>
    )
  }
}
