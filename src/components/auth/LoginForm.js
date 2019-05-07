import React from 'react'

const LoginForm = ({ login, username, password, usernameError, passwordError }) => {
  return (
    <form onSubmit={login}>
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
          <input className='input' type='password' placeholder='Password' onChange={username} />
          <span className='icon is-small is-left'>
            <i className='fas fa-lock' />
          </span>
        </p>
      </div>
      <div className='field'>
        <p className='control'>
          <button className='button is-success'>
              Login
          </button>
        </p>
      </div>
    </form>
  )
}

export default LoginForm
