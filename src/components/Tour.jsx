import React from "react";
import styled from "styled-components";

const Container = styled.section`
  height: 70vh;
  width: 100%;
  background-color: var(--primaryColor);
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
  height: 380px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2c2c2c;
  margin-right: 70px;
`;

const CardImage = styled.img`
  height: 70%;
  width: 100%;
`;

const CountryName = styled.h3`
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

const Tour = () => {
  return (
    <Container>
      <Title>Dance Tour</Title>
      <Info>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facere
        cupiditate numquam voluptas iste aliquid debitis vitae sapiente alias
        hic,
      </Info>
      <Cards>
        <Card>
          <CardImage src="../images/card1.png" />
          <CountryName>America</CountryName>
          <CardInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deseru
          </CardInfo>
        </Card>
        <Card>
          <CardImage src="../images/card2.png" />
          <CountryName>Asia</CountryName>
          <CardInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deseru
          </CardInfo>
        </Card>
        <Card>
          <CardImage src="../images/card3.png" />
          <CountryName>Asia</CountryName>
          <CardInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deseru
          </CardInfo>
        </Card>
      </Cards>
    </Container>
  );
};

export default Tour;
