import React from 'react'

const Tab = ({ label, isActive, handleClick, icon }) => {
  return (
    <div>
      <li className={isActive ? 'is-active' : ''}
        onClick={() => handleClick()} >
        <button className='button is-dark'>
          <i className={icon} />
          &nbsp; {label}</button>
      </li>
    </div>
  )
}

export default Tab
