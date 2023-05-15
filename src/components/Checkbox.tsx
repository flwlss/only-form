import React from "react";
import { styled } from "styled-components";

const Checkbox = () => {

  const Checkbox = styled.input`
  
  `

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
      <Checkbox type="checkbox" />
      <p>Запомнить пароль</p>
    </div>
  )
}

export default Checkbox