import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primaryColor);
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
  font-weight: 100;
  max-width: 700px;
  text-align: center;
`;

const EmailContainer = styled.div`
  display: flex;
  background-color: white;
  margin-top: 30px;
`;

const Form = styled.form`
  display: flex;
  height: 45px;
  width: 400px;
`;
const Input = styled.input`
flex: 1;
border: 0;
font-size: 16px;
padding: 8px;
&:focus{
    outline: 0;
}
`;

const Button = styled.button`
  color: #fff;
  background-color: var(--secondaryColor);
  text-transform: uppercase;
  padding: 0 15px;
  cursor: pointer;
`;
const Subscribe = () => {
  return (
    <Container>
      <Title>Subscribe</Title>
      <Info>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio hic illo
        nulla adipisci numquam eos temporibus facilis, praesentium eligendi
        libero expedita magnam, porro est architecto voluptatibus ipsum id
        consequuntur dolorem!
      </Info>
      <EmailContainer>
        <Form>
          <Input type="email" placeholder="Your Email"/>
          <Button type="submit">Subscribe</Button>
        </Form>
      </EmailContainer>
    </Container>
  );
};

export default Subscribe;
