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
        <section class='section' style={{ padding: '20px 0 10px 0' }}>
          <div class='container'>
            <h1 class='title has-text-centered' style={{ padding: '0' }}
            >Recent Inputs
            </h1>
          </div>
        </section>

        <div class='columns'>
          <RecentInputs />
        </div>

        <div class='tile is-ancestor'>
          <TodayUrine />
          <TodayGtube />
          <TodayOstomy />
        </div>
      </React.Fragment>
    )
  }
}
