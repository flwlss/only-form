import React from "react";
import BlueButton from "./BlueButton";
import { useForm } from "react-hook-form";
import Checkbox from "./Checkbox";
import CustomInput from "./CustomInput";

const Form = () => {

  const { register, handleSubmit } = useForm()

  const onSubmit = (data: Object) => {
    alert(JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ marginBottom: 20 }}>
        <CustomInput
          label="Логин"
          options={{ ...register("login") }} />
      </div>
      <CustomInput
        label="Пароль"
        options={{ ...register("password") }} />
      <Checkbox
        options={{ ...register("checkbox") }} />
      <BlueButton />
    </form>
  )
}

export default Form