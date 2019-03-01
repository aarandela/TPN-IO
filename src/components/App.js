import React, { Component } from 'react'
import '../styles/App.css'
import Tabs from './dashboard/Tabs'
import Inputs from './navbar/Inputs'
import Today from './dashboard/today/Today'
import Urine from './dashboard/urine/Urine'
import Gtube from './dashboard/gtube/Gtube'
import Ostomy from './dashboard/ostomy/Ostomy'
import Summary from './dashboard/summary/Summary'
import Labs from './dashboard/labs/Labs'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeTab: 0
    }
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab (newTab) {
    this.setState({
      activeTab: newTab
    })
  }

  render () {
    return (
      <section className='section'>
        <div className='container'>
          <Inputs />
          <br />
          <Tabs
            activeTab={this.state.activeTab}
            changeTab={this.changeTab} />

          {this.state.activeTab === 0 ? <Today /> : null}
          {this.state.activeTab === 1 ? <Summary /> : null}
          {this.state.activeTab === 2 ? <Urine /> : null}
          {this.state.activeTab === 3 ? <Gtube /> : null}
          {this.state.activeTab === 4 ? <Ostomy /> : null}
        </div>
      </section>
    )
  }
}

export default App
