import { styled } from "styled-components";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;

  nav {
    display: flex;
    gap: 12px;
  }
`;

export const Local = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 143px;
  height: 38px;
  padding: 8px;
  font-size: 14px;
  background-color: ${(props) => props.theme["purple-100"]};
  border-radius: 6px;

  p {
    color: ${(props) => props.theme["purple-500"]};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;

export const ShoppingCartContainer = styled.button`
  width: 38px;
  height: 38px;
  background-color: ${(props) => props.theme["yellow-100"]};
  border:none;
  border-radius: 6px;
  padding: 8px;
  
  &:hover{
    background-color: ${(props) => props.theme["yellow-300"]};
  }
`;

export const CustomMapPin = styled(MapPin)`
  color: ${(props) => props.theme["purple-300"]};
`;

export const CustomShoppingCart = styled(ShoppingCart)`
  color: ${(props) => props.theme["yellow-500"]};
`;
