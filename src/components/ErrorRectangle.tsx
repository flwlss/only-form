import React from 'react'
import { styled } from 'styled-components'
import userStore from '../store/userStore'

const ErrorRectangle = () => {

  const Rectangle = styled.div`
    width:100%;
    height:60px;
    background-color:#F5E9E9;
    border-radius: 8px;
    margin-bottom:27px;
    border: 1px solid #E26F6F;
    display: flex;
    align-items: center;
    padding-left: 20px;
  `

  const Sign = styled.div`
    width:20px;
    height:20px;
    background-color: #FFC8C8;
    border-radius: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#EE6565;
    font-size:14px;
    margin-right: 14px;
  `

  return (
    <Rectangle>
      <Sign>!</Sign>
      <p>Пользователя {userStore.login} не существует</p>
    </Rectangle>
  )
}

export default ErrorRectangle