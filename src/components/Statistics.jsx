import React from "react";
import styled from "styled-components";

const Container = styled.section`
  height: 70vh;
  width: 100%;
  background-color: var(--secondaryColor);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 70px;
  margin: 0;
  text-transform: uppercase;
`;

const Info = styled.p`
  color: #fff;
  font-size: 18px;
  max-width: 600px;
`;
const NumbersContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`;

const NumberAndName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Number = styled.h1`
  color: #fff;
  margin: 0;
`;

const Name = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
`;

const Statistics = () => {
  return (
    <Container>
      <Title>our statistics</Title>
      <Info>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, iure!
        Autem doloribus eveniet voluptas quo quaerat? Veritatis magni placeat
        suscipit, est delectus totam distinctio neque dolorum, recusandae esse
        laudantium quo!
      </Info>
      <NumbersContainer>
        <NumberAndName>
          <Number>1240+</Number>
          <Name>Club</Name>
        </NumberAndName>
        <NumberAndName>
          <Number>2000+</Number>
          <Name>Active Member</Name>
        </NumberAndName>
        <NumberAndName>
          <Number>1.000+</Number>
          <Name>Community</Name>
        </NumberAndName>
      </NumbersContainer>
    </Container>
  );
};

export default Statistics;
