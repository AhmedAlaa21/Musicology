import React from "react";
import styled from "styled-components";

const Container = styled.section`
  height: 95vh;
  width: 100%;
  background-image: url("../images/modelA.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const MainInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 50px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 100px;
  margin: 90px 0 0 0;
`;

const Description = styled.p`
  color: #fff;
  font-size: 22px;
  max-width: 400px;
  font-weight: 300;
`;

const RegisterButton = styled.button`
background-color: #FF6309;
padding: 10px 25px;
color: #fff;
text-transform: uppercase;
border: 0;
font-size: 24px;
border-radius: 8px;
font-weight: bold;
`;
const MainSec = () => {
  return (
    <Container>
      <MainInfo>
        <Title>Musicology is Here</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, alias
          blanditiis quod est soluta aliquam ut veritatis quisquam dignissimos
          reprehenderit deleniti
        </Description>
        <RegisterButton>Register Now</RegisterButton>
      </MainInfo>
    </Container>
  );
};

export default MainSec;
