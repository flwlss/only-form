import React from 'react'
import { useNavigate } from 'react-router'
import { styled } from 'styled-components'
import { PATHS } from '../navigation/paths'

const WhiteButton = () => {

  const Button = styled.button`
    width: 200px;
    background-color: #F5F5F5;
    height: 60px;
    border: none;
    border-radius: 8px;
    color: #000;
    font-size: 18px;
    line-height: 22px;
    margin-top: 50px;
    cursor: pointer;
    font-weight: 700;
  `

  const navigation = useNavigate()

  return (
    <Button
      onClick={() => {
        navigation(PATHS.LOGIN)
      }}>
      Выйти
    </Button>
  )
}

export default WhiteButton