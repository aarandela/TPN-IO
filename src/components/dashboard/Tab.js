import React from 'react'

const Tab = ({ label, isActive, handleClick, icon }) => {
  return (
    <div>
      <li className={isActive ? 'is-active' : ''}
        onClick={() => handleClick()} >
        <i className={icon} />
        &nbsp;<a>{label}</a>
      </li>
    </div>
  )
}

export default Tab
