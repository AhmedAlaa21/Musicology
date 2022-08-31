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
  font-size: 100px;
  margin: 0;
`;

const Info = styled.p`
  color: #fff;
  font-size: 18px;
`;

const Cards = styled.div`
  margin-top: 20px;
  display: flex;
`;

const Card = styled.div`
  height: 340px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ff6309;
  margin-right: 70px;
  border-radius: 8px;
`;

const CardImage = styled.img`
  height: 120px;
  width: 100px;
  margin-bottom: 20px;
`;

const ServiceName = styled.h1`
  color: #fff;
  margin: 4px 0;
  font-weight: 300;
`;
const CardInfo = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 100;
  margin: 2px 2px 2px 0;
  text-align: center;
`;

const PriceButton = styled.button`
  background-color: #2c2c2c;
  padding: 10px 0px;
  text-align: center;
  font-size: 18px;
  border: 0;
  color: #fff;
  border-radius: 6px;
  width: 70%;
  margin-top: 20px;
  cursor: pointer;
  transition: transform .5s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Pricing = () => {
  return (
    <Container>
      <Title>Pricing</Title>
      <Info>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
        reiciendis itaque voluptatum aspe
      </Info>
      <Cards>
        <Card>
          <CardImage src="images/icon.png" />
          <ServiceName>Basic</ServiceName>
          <CardInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deseru
          </CardInfo>
          <PriceButton>$150</PriceButton>
        </Card>
        <Card>
          <CardImage src="images/icon.png" />
          <ServiceName>Professional</ServiceName>
          <CardInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deseru
          </CardInfo>
          <PriceButton>$200</PriceButton>
        </Card>
        <Card>
          <CardImage src="images/icon.png" />
          <ServiceName>Ultimate</ServiceName>
          <CardInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deseru
          </CardInfo>
          <PriceButton>$250</PriceButton>
        </Card>
      </Cards>
    </Container>
  );
};

export default Pricing;
