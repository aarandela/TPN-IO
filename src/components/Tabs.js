import React, { Component } from 'react'
import Tab from './Tab'

export default class Tabs extends Component {
  render () {
    let { activeTab, changeTab } = this.props
    return (
      <div className='columns'>
        <div className='column'>
          <div className='breadcrumb is-centered is-large' aria-label='breadcrumbs'>
            <ul>
              <Tab label='Today'
                isActive={activeTab === 0}
                handleClick={() => changeTab(0)}
                icon='fas fa-calendar-day has-text-link' />|&nbsp;&nbsp;&nbsp;
              <Tab label='Summary'
                isActive={activeTab === 1}
                handleClick={() => changeTab(1)}
                icon='far fa-calendar-alt has-text-grey-light' />|&nbsp;&nbsp;&nbsp;
              <Tab label='Urine'
                isActive={activeTab === 2}
                handleClick={() => changeTab(2)}
                icon='fas fa-toilet has-text-warning' />|&nbsp;&nbsp;&nbsp;
              <Tab label='G-tube'
                isActive={activeTab === 3}
                handleClick={() => changeTab(3)}
                icon='fas fa-plus has-text-success' />|&nbsp;&nbsp;&nbsp;
              <Tab label='Ostomy'
                isActive={activeTab === 4}
                handleClick={() => changeTab(4)}
                icon='fas fa-poo has-text-black' />|&nbsp;&nbsp;&nbsp;
              <Tab label='Labs'
                isActive={activeTab === 5}
                handleClick={() => changeTab(5)}
                icon='fas fa-flask has-text-danger' />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
