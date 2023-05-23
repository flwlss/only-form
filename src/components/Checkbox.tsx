import React from "react";
import { styled } from "styled-components";

interface ICheckboxProps {
  options: object
}

const Checkbox = (props: ICheckboxProps) => {

  const Checkbox = styled.input`
  
  `

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
      <Checkbox {...props.options} type="checkbox" />
      <p>Запомнить пароль</p>
    </div>
  )
}

export default Checkbox