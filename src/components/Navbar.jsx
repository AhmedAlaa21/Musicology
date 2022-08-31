import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #2c2c2c;
  height: 65px;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
`;
const Logo = styled.img`
  width: 80px;
`;

const Links = styled.nav`
  display: flex;
  justify-content: space-around;
  flex: 1;
`;

const NavItems = styled.a`
  text-decoration: none;
  margin-right: 15px;
  color: white;
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const Navbar = () => {
  return (
    <Container>
      <ImageContainer>
        <Logo src={"./images/logo.png"} />
      </ImageContainer>
      <Links>
        <NavItems>Home</NavItems>
        <NavItems>product</NavItems>
        <NavItems>promo</NavItems>
        <NavItems>about</NavItems>
        <NavItems>contact</NavItems>
      </Links>
      <SearchContainer>
        <i className="fa fa-search" aria-hidden="true"></i>
      </SearchContainer>
    </Container>
  );
};

export default Navbar;
