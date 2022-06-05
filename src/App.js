import { useEffect, useState, useCallback } from 'react';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// import my other component 
import RegisterForm from './Components/Forms/RegisterForm/RegisterForm'
import Panel from './Components/Panel/Panel';
import LoginForm from './Components/Forms/LoginForm/LoginForm';

// import utils
import { getStorage } from './utils/storage';

const App = () => {
  const [toggle, setToggle] = useState('');
    
  const changeToggle = (toggle) => setToggle(toggle)
  
  const checkIsInitStorage = () => getStorage('users') && getStorage('users').length !== 0
  
  const checkUserIsRegister = useCallback(() => {
    if (checkIsInitStorage()) {
      const userId = getStorage('id')
      const users = getStorage('users')
      
      const [userRegistered] = users.filter(user => user.id === userId)
      
      userRegistered.isLogin && changeToggle('panel')
      !userRegistered.isLogin && changeToggle('login')
    } else changeToggle('register')
  }, [])

  useEffect(() => {
    checkUserIsRegister()
  }, [checkUserIsRegister])
  
  
  return (
    <>
      { toggle === 'register' && <RegisterForm onRegister={checkUserIsRegister}  onLogin={changeToggle} /> }
      { toggle === 'login' && <LoginForm onRegister={changeToggle} onLogin={checkUserIsRegister} /> }
      { toggle === 'panel' && <Panel onLogOut={checkUserIsRegister} /> }
    </>
  )
}

export  default App