import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

// import other component to use
import UserInformation from './Components/Panel/UserInformation/UserInformation';
import UserChangePassword from './Components/Panel/UserChangePassword/UserChangePassword';

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
        <Route path="login" element={<Login />} />
        <Route path="/panel" element={<Panel />}>
          <Route index element={<UserInformation />} />
          <Route path="changePassword" element={<UserChangePassword  />} />
          <Route path="profile" />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App