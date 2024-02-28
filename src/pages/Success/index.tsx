import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { Info, InfoContent, Element, SuccessContainer } from "./styles";
import { useTheme } from 'styled-components'

export function Success() {
  const theme = useTheme()

  return (
    <SuccessContainer>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>

          <Info>
            <InfoContent>
              <Element>
                <MapPin color={theme.white}
                style={{ backgroundColor: theme["purple-300"] }}
                size={32} />
                <div>
                  <span>Entrega em Rua João Daniel Martinelle, 102</span>
                  <span>Farrapos - Porto Alegre</span>
                </div>
              </Element>

              <Element>
                <Timer color={theme.white}
                style={{ backgroundColor: theme["yellow-300"] }}
                size={32} />
                <div>
                  <span>Previsão de entrega</span>
                  <strong>20 min - 30 min</strong>
                </div>
              </Element>

              <Element>
                <CurrencyDollar color={theme.white}
                style={{ backgroundColor: theme["yellow-500"] }}
                size={32} />
                <div>
                  <span>Pagamento na entrega</span>
                  <strong>Cartão de crédito</strong>
                </div>
              </Element>

            </InfoContent>
          </Info>
        </div>
      <img src="src\assets\delivery.svg" alt="" />
    </SuccessContainer>
  );
}
