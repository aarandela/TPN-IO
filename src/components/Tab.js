import React from 'react'

const Tab = ({ label, isActive, handleClick, icon }) => {
  return (
    <div>
      <li className={isActive ? `is-active 
                                 
                                 has-text-weight-semibold
                                 is-family-secondary`
        : ''} onClick={() => handleClick()} >
        <a className='is-small'>
        &nbsp; &nbsp;
          <i className={icon} />
          &nbsp; {label}</a>
      </li>
    </div>
  )
}

export default Tab
