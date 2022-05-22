import { Component } from 'react'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
// import my other component 
import RegisterForm from './Components/Forms/RegisterForm/RegisterForm'
import Panel from './Components/Panel/Panel';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      toggle: null
    }

    this.changePageToPanel = this.changeToggle.bind(this)
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
      userRegistered.isLogin === false && this.changeToggle('register')
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
        {this.state.toggle === "register" && (
          <Container className='d-flex justify-content-center align-items-center vh-100 px-5'>
            <RegisterForm onRegister={this.checkUserIsRegister} />
          </Container>
        )}
        { this.state.toggle === 'panel' && <Panel onLogOut={this.checkUserIsRegister} /> }
      </>
    )
  }
}

export  default App