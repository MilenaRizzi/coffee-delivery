import styled from "styled-components";

export const CoffeeList = styled.section`
  max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;
  font-family: "Baloo 2", sans-serif;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    color: ${(props) => props.theme["gray-700"]};
    font-weight: 800;
  }

`;
