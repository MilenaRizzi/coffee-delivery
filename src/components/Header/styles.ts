import { styled } from "styled-components";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;
`;

export const Navigator = styled.nav`
  display: flex;
  gap: 12px;

  a {
    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme["yellow-100"]};
    color: ${(props) => props.theme["yellow-500"]};

    padding: 8px;
    border-radius: 6px;

    position: relative;

    &[aria-disabled="true"] {
      pointer-events: none;
    }

    div {
     span {
        font-weight: bold;
        font-family: "Roboto", sans-serif;
        font-size: 12px;
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme["yellow-500"]};
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
  
        position: absolute;
        top: 0px;
        right: 0px;
        transform: translate(50%, -50%);
      }
    }
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


export const CustomMapPin = styled(MapPin)`
  color: ${(props) => props.theme["purple-300"]};
`;

export const CustomShoppingCart = styled(ShoppingCart)`
  color: ${(props) => props.theme["yellow-500"]};
`;
