import React, { useState } from "react";
import BlueButton from "./BlueButton";
import { useForm } from "react-hook-form";
import Checkbox from "./Checkbox";
import CustomInput from "./CustomInput";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../navigation/paths";
import ErrorRectangle from "./ErrorRectangle";

const Form = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const navigation = useNavigate()

  const onSubmit = (data: Object) => {
    alert(JSON.stringify(data));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ErrorRectangle />
      <CustomInput error={errors.login} label="Логин" options={{ ...register('login', { required: true }) }} />
      <CustomInput type="password" error={errors.password} label="Пароль" options={{ ...register('password', { required: true }) }} />
      <Checkbox options={{ ...register('checkbox') }} />
      <BlueButton disabled={false} />
    </form>
  )
}

export default Form