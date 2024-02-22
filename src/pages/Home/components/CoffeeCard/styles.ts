import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 256px;
  height: 312px;
  padding: 0 24px;
  background-color: ${(props) => props.theme["gray-100"]};
  font-family: "Roboto", sans-serif;
  text-align: center;
  border-radius: 0 20px 0 20px;

  img {
    margin-bottom: 12px;
    width: 120px;
    height: 120px;
    margin-top: -20px;
  }
`;

export const TypeCoffe = styled.div`
  width: 81px;
  margin: auto;
  height: 21px;
  background-color: ${(props) => props.theme["yellow-100"]};
  border-radius: 20px;
  p {
    font-size: 10px;
    color: ${(props) => props.theme["yellow-500"]};
    font-weight: bold;
    padding: 4px 8px;
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
`

export const CartBase = styled.div`
  display: flex;
  border-radius: 6px;
`;

export const Counter = styled(CartBase)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 72px;
  height: 38px;
  padding: 8px;
  background-color: ${(props) => props.theme["gray-300"]};
  margin-right: 8px;

  p {
    font-weight: normal;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
  }
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
