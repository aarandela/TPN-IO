import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import Tab from '../Tab'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeTab: 0,
      username: '',
      usernameErr: false,
      password: '',
      passwordErr: false,
      email: '',
      emailErr: false,

      userLog: '',
      userLogEr: false,
      passLog: '',
      passLogEr: false
    }

    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleLogUser = this.handleLogUser.bind(this)
    this.handleLogPass = this.handleLogPass.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab (newTab) {
    this.setState({
      activeTab: newTab
    })
  }
  handleUsername (evt) {
    this.setState({ username: evt.target.value, usernameErr: false })
  }
  handlePassword (evt) {
    if (evt.target.value.length < 4) {
      this.setState({ passwordErr: true, password: evt.target.value })
    } else {
      this.setState({ password: evt.target.value, passwordErr: false })
    }
  }

  handleLogUser (evt) {
    this.setState({ userLog: evt.target.value, userLogEr: false })
  }
  handleLogPass (evt) {
    this.setState({ passLog: evt.target.value, passLogEr: false })
  }

  handleEmail (evt) {
    this.setState({ email: evt.target.value, emailErr: false })
  }

  handleUserRegister (evt) {
    evt.preventDefault()
    Axios
      .post('/register', {
        user: { username: this.state.username, password: this.state.password, email: this.state.email }
      })
      .then(res => {
        if (res.data.success) {
          this.setState({ usernameErr: false, passwordErr: false, emailErr: false })
          this.props.updateUser(res.data.user)
          window.location = '/dashboard'
        } else {
          this.setState({ usernameErr: true, emailErr: true })
        }
      })
      .catch(er => {
        console.log(er)
      })
  }

  handleUserLogin (evt) {
    evt.preventDefault()
    Axios
      .get('/login', {
        params: { username: this.state.userLog, password: this.state.passLog }
      })
      .then(res => {
        if (res.data.success) {
          this.setState({ userLogEr: false, passLogEr: false })
          this.props.updateUser(res.data.user)
          window.location = '/dashboard'
        } else {
          this.setState({ userLogEr: true, passLogEr: true })
        }
      })
      .catch(er => {
        console.log(er)
      })
  }

  render () {
    return (

      <div className='card'>
        <header className='card-header tabs is-centered'>
          <ul>
            <Tab label='Login'
              isActive={this.state.activeTab === 0}
              handleClick={() => this.changeTab(0)} />
            <Tab label='Register'
              isActive={this.state.activeTab === 1}
              handleClick={() => this.changeTab(1)} />
          </ul>
        </header>
        <div className='card-content'>
          <div className='content'>
            {this.state.activeTab === 0 ? <LoginForm
              login={this.handleUserLogin}
              username={this.handleLogUser}
              password={this.handleLogPass}
              usernameError={this.state.userLogEr}
              passwordError={this.state.passLogEr} /> : null}
            {this.state.activeTab === 1 ? <RegisterForm
              register={this.handleUserRegister}
              username={this.handleUsername}
              password={this.handlePassword}
              email={this.handleEmail}
              usernameError={this.state.usernameErr}
              passwordError={this.state.passwordErr} /> : null}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => { dispatch({ type: 'UPDATE_USER', value: user }) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
