import React, { useState } from "react";
import BlueButton from "./BlueButton";
import { useForm } from "react-hook-form";
import Checkbox from "./Checkbox";
import CustomInput from "./CustomInput";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../navigation/paths";
import ErrorRectangle from "./ErrorRectangle";
import index from '../store/index'

interface data {
  login: string
  password: string
}

const Form = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const navigation = useNavigate()

  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState(false)

  const onSubmit = (userData: any) => new Promise<any>(resolve => {
    setLoading(true)
    setServerError(false)
    setTimeout(() => resolve({ login: 'steve.jobs@example.com', password: 'password' }), 1000)
  }).then((data: data) => {
    setLoading(false)
    index.newLogin(userData.login)
    if (data.login === userData.login && data.password === userData.password) {
      navigation(PATHS.PROFILE)
    } else {
      setServerError(true)
    }
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {serverError && <ErrorRectangle />}
      <CustomInput
        type="email"
        error={errors.login}
        label="Логин"
        options={{ ...register('login', { required: true }) }} />
      <CustomInput
        type="password"
        error={errors.password}
        label="Пароль"
        options={{ ...register('password', { required: true }) }} />
      <Checkbox options={{ ...register('checkbox') }} />
      <BlueButton disabled={loading} />
    </form>
  )
}

export default Form