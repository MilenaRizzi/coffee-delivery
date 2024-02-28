import styled from "styled-components";

export const SuccessContainer = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 40px 160px 32px;
  font-family: "Roboto", sans-serif;

  h1 {
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme["yellow-500"]};
  }

  p {
    font-size: 20px;
    margin-bottom: 32px;
  }

`

export const Info = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme["yellow-300"]}, ${theme["purple-500"]})`};
`

export const InfoContent = styled.div`
  padding: 40px;
  background-color: ${props => props.theme["gray-50"]};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 32px;

`

export const Element = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    > svg {
      padding: 8px;
      border-radius: 999px;
    }

    > div {
    display: flex;
    flex-direction: column;
  }
`