import styled from "styled-components";

export const CoffeeList = styled.section`
  max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;
  font-family: "Baloo 2", sans-serif;


  > h2 {
    color: ${(props) => props.theme["gray-700"]};
    font-weight: 800;
    margin-bottom: 54px;
  }


  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }

`;
