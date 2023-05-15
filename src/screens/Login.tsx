import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../navigation/paths'
import Container from '../components/Container'
import BlueButton from '../components/BlueButton'
import Form from '../components/Form'

const Login = () => {

  const navigation = useNavigate()

  return (
    <Container>
      <Form />
    </Container>
  )
}

export default Login