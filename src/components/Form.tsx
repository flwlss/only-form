import React from "react";
import BlueButton from "./BlueButton";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import Checkbox from "./Checkbox";

const Form = () => {

  const { register, handleSubmit } = useForm()

  const onSubmit = (d: any) => {
    alert(JSON.stringify(d))
  }

  const Label = styled.label`
    color: #1F1F1F;
    margin-bottom: 10px;
    display: block;
  `

  const Input = styled.input`
    width: 100%;
    height: 60px;
    background-color: #F5F5F5;
    border: none;
    border-radius: 8px;
    outline: none;
    padding-left: 20px
  `

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ marginBottom: 20 }}>
        <Label>
          Логин
        </Label>
        <Input {...register("Login")} />
      </div>
      <Label>
        Пароль
      </Label>
      <Input {...register("Password")} />
      <Checkbox />
      <BlueButton />
    </form>
  )
}

export default Form