import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  background: ${(props) => props.theme["gray-50"]};

  font-family: "Roboto", sans-serif;
  height: 100vh;

  h1 {
    font-size: 18px;
    font-family: "Baloo 2", sans-serif;
    margin-bottom: 15px;
  }
`;

export const Address = styled.section`
  width: 640px;
  height: 372px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 40px 32px;
  background: ${(props) => props.theme["gray-100"]};

  input {
    height: 42px;
    border: none;
    border-radius: 4px;
    padding: 12px;
    background: ${(props) => props.theme["gray-300"]};
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["gray-600"]};

  }

  #CEP,
  #number,
  #neighborhood {
    width: 200px;
  }

  #street {
    width: 560px;
  }

  #fullAddress {
    width: 348px;
    margin-left: 12px;
  }
  #fullAddress::placeholder {
  }

  #city {
    width: 276px;
    margin-left: 12px;
  }

  #state {
    width: 60px;
    margin-left: 12px;
  }
`;

export const Header = styled.header`
  display: flex;
  gap: 8px;

  div {
    h1 {
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 2px;
      font-family: "Roboto", sans-serif;
    }

    p {
      font-size: 0.87rem;
    }
  }
`;

export const FullAddress = styled.div`
  span {
    margin-left: -70px;
    font-style: italic;
    font-size: 12px;
  }
`;

export const PaymentMethods = styled.section`
  width: 640px;
  height: 207px;
  padding: 40px;
  margin-top: 12px;
  background: ${(props) => props.theme["gray-100"]};
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 32px;

  input[type="radio"] {
    display: none;
  }


  label {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 12px;
    padding: 16px;
    cursor: pointer;
    width: 178px;
    border-radius: 5px;
    text-transform: uppercase;
    color: ${(props) => props.theme["gray-600"]};
    background:${(props) => props.theme["gray-300"]};


    &:hover {
    background:${(props) => props.theme["gray-400"]};
    }

  }

  /* Estilizando o rótulo quando o botão de rádio está marcado */
  input[type="radio"]:checked + label {
    background: ${(props) => props.theme["purple-100"]};
    border: 1px solid ${(props) => props.theme["purple-200"]};
  }
`;

export const SelectedCoffees = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 448px;
  height: 498px;
  padding: 40px;
  background: ${(props) => props.theme["gray-100"]};
  border-radius: 0 30px 0 30px;

  hr {
    border: 0.5px solid ${(props) => props.theme["gray-300"]};
    margin: 24px 0;
    width: 368px;
  }
`;

export const InfoCoffee = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 8px;

  div {
    display: flex;

    img {
      margin-right: 20px;
      width: 64px;
    }
  }
`;

export const DetailsCoffee = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 16px;
    margin-bottom: 8px;
    font-family: "Roboto", sans-serif;
  }

  div {
    display: flex;
    align-items: center;
    height: 32px;
  }
`;

export const RemoveButton = styled.button`
  width: 91px;
  height: 32px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
  border: none;
  font-size: 12px;
  background: ${(props) => props.theme["gray-300"]};
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: "Roboto", sans-serif;

  strong {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: ${(props) => props.theme["gray-600"]};

    span {
      font-size: 16px;
    }
  }

  h1 {
    color: ${(props) => props.theme["gray-700"]};
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: space-between;
  }

  button {
    padding: 12px 8px;
    font-size: 14px;
    border: 0;
    border-radius: 6px;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme["yellow-300"]};
    font-family: "Roboto", sans-serif;
    font-weight: 700;

    &:hover {
      background: ${(props) => props.theme["yellow-500"]};
    }
  }
`;
