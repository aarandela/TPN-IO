import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecentInputs from './RecentInputs'
import TodayUrine from './TodayUrine'
import TodayGtube from './TodayGtube'
import TodayOstomy from './TodayOstomy'
import Axios from 'axios'

class Today extends Component {
  constructor (props) {
    super(props)

    this.state = {
      getData: false
    }
  }

  componentDidMount () {
    this.set({ getData: false })
    Axios.get('')
  }

  render () {
    return (
      <React.Fragment>
        <section className='section' style={{ padding: '5px 0 30px 0' }}>
          <div className='container'>
            <h1 className='title has-text-centered' style={{ padding: '0' }}>
            Recent Inputs
            </h1>
          </div>
        </section>

        <RecentInputs />

        <div className='tile is-ancestor'>
          <TodayUrine />
          <TodayGtube />
          <TodayOstomy />
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default (mapStateToProps, mapDispatchToProps)(Today)
