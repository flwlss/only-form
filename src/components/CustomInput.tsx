import React from "react";
import { styled } from "styled-components";

interface ICustomInputProps {
  label: string
  options: object
  error: any
  type?: string
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
    border: 1px solid ${props.error ? '#E26F6F' : 'transparent'};
    border-radius: 8px;
    outline: none;
    padding-left: 20px;
    caret-color: ${props.error ? '#E26F6F' : ''};
  `

  return (
    <div style={{ marginBottom: 20 }}>
      <Label>{props.label}</Label>
      <Input type={props.type || 'text'} {...props.options} />
      {props.error && <p style={{ fontSize: 14, marginTop: 8, color: '#E26F6F' }}>Обязательное поле</p>}
    </div>
  )
}

export default CustomInput