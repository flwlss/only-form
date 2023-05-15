import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PATHS } from './paths'
import Login from '../screens/Login'
import Profile from '../screens/Profile'

const Router = () => {

  return (
    <Routes>
      <Route path={PATHS.LOGIN} element={<Login />} />
      <Route path={PATHS.PROFILE} element={<Profile />} />
    </Routes>
  )
}

export default Router