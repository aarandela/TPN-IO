import React from 'react'

const RegisterForm = ({ register, username, email, password, passwordError, usernameError }) => {
  return (
    <form onSubmit={register}>
      <div className='field'>
        <p className='control has-icons-left has-icons-right'>
          <input className='input' type='email' placeholder='Email' onChange={email} />
          <span className='icon is-small is-left'>
            <i className='fas fa-envelope' />
          </span>
        </p>
      </div>

      <div className='field'>
        <p className='control has-icons-left has-icons-right'>
          <input className='input' type='username' placeholder='Username' onChange={username} />
          <span className='icon is-small is-left'>
            <i className='fas fa-user' />
          </span>
        </p>
      </div>

      <div className='field'>
        <p className='control has-icons-left'>
          <input className='input' type='password' placeholder='Password' onChange={password} />
          <span className='icon is-small is-left'>
            <i className='fas fa-lock' />
          </span>
        </p>
      </div>
      <div className='field'>
        <p className='control'>
          <button className='button is-success'>
             Register
          </button>
        </p>
      </div>
    </form>
  )
}

export default RegisterForm
