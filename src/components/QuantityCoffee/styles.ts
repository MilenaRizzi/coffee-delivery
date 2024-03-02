import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 72px;
  height: 38px;
  padding: 8px;
  background-color: ${(props) => props.theme["gray-300"]};
  margin-right: 8px;
  

  span {
    font-weight: normal;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;

    &:hover{
      color: ${(props) => props.theme["purple-500"]};

    }
  }
`