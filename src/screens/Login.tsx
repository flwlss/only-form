import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../navigation/paths'

const Login = () => {

  const navigation = useNavigate()

  return (
    <div onClick={() => {
      navigation(PATHS.PROFILE)
    }}>
      login
    </div>
  )
}

export default Login