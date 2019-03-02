import React from 'react'

const Tab = ({ label, isActive, handleClick, icon }) => {
  return (
    <div>
      <li className={isActive ? 'is-active' : ''}
        onClick={() => handleClick()} >
        <a> 
          <i className={icon} /> 
          &nbsp; {label}</a>
      </li>
    </div>
  )
}

export default Tab
