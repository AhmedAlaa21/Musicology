import React from "react";
import styled from "styled-components";

const Container = styled.section`
  height: 70vh;
  width: 100%;
  display: flex;
`;

const FirstPart = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-image: url("images/model.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const SecondPart = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: var(--primaryColor);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SecondPartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin: 0 60px;
`;

const Title = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 70px;
  margin: 0;
`;

const Info = styled.p`
  color: #fff;
  font-size: 18px;
  max-width: 300px;
`;

const Button = styled.button`
  background-color: #2c2c2c;
  padding: 10px 0px;
  text-align: center;
  font-size: 18px;
  border: 0;
  color: #fff;
  border-radius: 6px;
  width: 300px;
  margin-top: 40px;
  cursor: pointer;
  text-transform: uppercase;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const BestDance = () => {
  return (
    <Container>
      <SecondPart>
        <SecondPartContainer>
          <Title>Amazing Dance</Title>
          <Info>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            reiciendis itaque voluptatum aspe
          </Info>
          <Button>Read More</Button>
        </SecondPartContainer>
      </SecondPart>
      <FirstPart />
    </Container>
  );
};

export default BestDance;
