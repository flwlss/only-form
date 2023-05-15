import React, { useState } from "react";
import { styled } from "styled-components";

interface ICustomInputProps {
  label: string
  options: Object
}

const CustomInput = (props: ICustomInputProps) => {

  const Label = styled.label`
    color: #1F1F1F;
    margin-bottom: 10px;
    display: block;
  `

  const Input = styled.input`
    width: 100%;
    height: 60px;
    background-color: #F5F5F5;
    border: 1px solid transparent;
    border-radius: 8px;
    outline: none;
    padding-left: 20px
  `

  return (
    <>
      <Label>
        {props.label}
      </Label>
      <Input
        {...props.options} />
    </>
  )
}

export default CustomInput