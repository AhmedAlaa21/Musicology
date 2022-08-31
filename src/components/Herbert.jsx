import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('images/f333.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.75);
  background-blend-mode: soft-light;
`;

const Info = styled.p`
  font-weight: 100;
  font-size: 20px;
  color: #fff;
  max-width: 600px;
  text-align: center;
`;

const Name = styled.h1`
    font-size: 50px;
    color: #fff;
`

const Herbert = () => {
  return <Container>
    <Info>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium consectetur, veniam saepe repudiandae accusantium debitis quos repellat rerum asperiores sit error. Possimus laborum neque voluptatem rerum autem molestiae saepe.
    </Info>
    <Name>
        Herbert Simon
    </Name>
  </Container>;
};

export default Herbert;
