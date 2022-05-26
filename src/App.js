import { Component } from 'react'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// import my other component 
import RegisterForm from './Components/Forms/RegisterForm/RegisterForm'
import Panel from './Components/Panel/Panel';
import LoginForm from './Components/Forms/LoginForm/LoginForm';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      toggle: null
    }

    this.changeToggle = this.changeToggle.bind(this)
    this.checkIsInitStorage = this.checkIsInitStorage.bind(this)
    this.checkUserIsRegister = this.checkUserIsRegister.bind(this)
  }

  changeToggle(toggle) {
    this.setState({ toggle })
  }

  checkUserIsRegister() {
    if (this.checkIsInitStorage()) {
      const userId = localStorage.getItem("id")
      const users = JSON.parse(localStorage.getItem("users"))
      
      const [userRegistered] = users.filter(user => user.id === userId)
      userRegistered.isLogin && this.changeToggle('panel')
      !userRegistered.isLogin && this.changeToggle('login')
    } else this.changeToggle('register')
  }

  checkIsInitStorage() {
    return JSON.parse(localStorage.getItem("users")) && JSON.parse(localStorage.getItem("users")).length !== 0
  }

  componentDidMount() {
    this.checkUserIsRegister()
  }

  render() {
    return (
      <>
        { this.state.toggle === "register" && <RegisterForm onRegister={this.checkUserIsRegister}  onLogin={this.changeToggle} /> }
        { this.state.toggle === 'login' && <LoginForm onRegister={this.changeToggle} onLogin={this.checkUserIsRegister} /> }
        { this.state.toggle === 'panel' && <Panel onLogOut={this.checkUserIsRegister} /> }
      </>
    )
  }
}

export  default App