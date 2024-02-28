import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 256px;
  height: 332px;
  padding: 0 24px;
  background-color: ${(props) => props.theme["gray-100"]};
  font-family: "Roboto", sans-serif;
  text-align: center;
  border-radius: 6px 36px;


  img {
    margin-bottom: 12px;
    width: 120px;
    height: 120px;
    margin-top: -20px;
  }
`;

export const TypeCoffe = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${(props) => props.theme["yellow-100"]};
    color: ${(props) => props.theme["yellow-500"]};
    text-transform: uppercase;
    font-size: 10px;
  }
`;

export const Infos = styled.div`
  h1 {
    font-size: 20px;
    font-family: "Baloo 2", sans-serif;
    margin-top: 16px;
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme["gray-500"]};
    margin-top: 8px;
  }
`;

export const Buy = styled.div`
  display: flex;
  align-items: center;
  margin-top: 33px;
  padding-bottom: 20px;
`;

export const Price = styled.div`
  font-size: 24px;
  margin-right: 23px;
  font-weight: bold;
  font-family: "Baloo 2", sans-serif;

  span {
    font-size: 14px;
    font-weight: normal;
  }
`;

export const CartBase = styled.div`
  display: flex;
  border-radius: 6px;
`;

export const Button = styled(CartBase)`
  width: 38px;
  height: 38px;
  background-color: ${(props) => props.theme["purple-500"]};
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["purple-300"]};
  }
`;
