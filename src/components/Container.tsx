import React from "react";
import { styled } from "styled-components";

interface IContainerProps {
  children: JSX.Element
}

const Container = (props: IContainerProps) => {

  const Container = styled.div`
    height: 100vh;
    max-width: 33.33%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: relative;
  `

  const Title = styled.p`
    text-transform: uppercase;
    text-align: center;
    font-size: 64px;
    line-height: 78px;
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translate(-50%);
    font-weight: 700;
  `

  return (
    <Container>
      <Title>
        only.
      </Title>
      {props.children}
    </Container>
  )
}

export default Container