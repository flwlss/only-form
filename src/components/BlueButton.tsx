import React from 'react'
import { styled } from "styled-components";

interface IBlueButtonProps {
  disabled: boolean
}

const BlueButton = (props: IBlueButtonProps) => {

  const Button = styled.button`
    width: 100%;
    background-color: ${props.disabled ? '#99A9FF' : '#4A67FF'};
    height: 60px;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 18px;
    line-height: 22px;
    margin-top: 40px;
    cursor: pointer;
    font-weight: 700;
  `

  return (
    <Button disabled={props.disabled}>
      Войти
    </Button>
  )
}

export default BlueButton;