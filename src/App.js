import { Routes, Route, Navigate } from 'react-router-dom'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// routes
import Login from './routes/Login';
import Panel from './routes/Panel';
import Register from './routes/Register';

// import utils
import { getStorage } from './utils/storage';

const App = () => {  
  const checkIsInitStorage = () => getStorage('users') && getStorage('users').length !== 0
  
  const authorization = () => {
    if (checkIsInitStorage()) {
      const userId = getStorage('id')
      const users = getStorage('users')

      const [userRegistered] = users.filter(user => user.id === userId)

      return userRegistered.isLogin ? "/panel" : "/login"
    } else
      return "/register"
  }
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={authorization()} />} />
        <Route path='/redirect' element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App