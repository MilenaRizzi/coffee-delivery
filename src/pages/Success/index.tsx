import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import {
  Info,
  InfoContent,
  Element,
  SuccessContainer,
  SuccessContent,
} from "./styles";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useParams } from "react-router-dom";
import deliveryImage from "../../assets/delivery.svg";


export function Success() {
  const { orders } = useContext(CartContext);
  const { orderId } = useParams();
  const orderInfo = orders.find((order) => order.id === Number(orderId));
  const paymentMethod = {
    credit: "Cartão de crédito",
    debit: "Cartão de débito",
    cash: "Dinheiro",
  };
  const theme = useTheme();

  if (!orderInfo?.id) {
    return null;
  }

  return (
    <SuccessContainer>
      <SuccessContent>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
          <Info>
            <InfoContent>
              <Element>
                <MapPin
                  color={theme.white}
                  style={{ backgroundColor: theme["purple-300"] }}
                  size={32}
                />
                <div>
                  <span>
                    Entrega em{" "}
                    <strong>
                      {orderInfo.street}, {orderInfo.residenceNumber}
                    </strong>
                  </span>
                  <span>
                    {orderInfo.neighborhood} - {orderInfo.city},
                    {orderInfo.state}
                  </span>
                </div>
              </Element>
              <Element>
                <Timer
                  color={theme.white}
                  style={{ backgroundColor: theme["yellow-300"] }}
                  size={32}
                />
                <div>
                  <span>Previsão de entrega</span>
                  <img src="src\assets\img-coffe.png" alt="" />
                  <strong>20 min - 30 min</strong>
                </div>
              </Element>
              <Element>
                <CurrencyDollar
                  color={theme.white}
                  style={{ backgroundColor: theme["yellow-500"] }}
                  size={32}
                />
                <div>
                  <span>Pagamento na entrega</span>
                  <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
                </div>
              </Element>
            </InfoContent>
          </Info>
        </div>
      </SuccessContent>
        <div id="delivery"><img src={deliveryImage} alt="" /></div>
    </SuccessContainer>
  );
}
