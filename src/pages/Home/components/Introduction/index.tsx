import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

import {
  HeroContent,
  Infos,
  InfosContainer,
  IntroductionContainer,
  Title,
} from "./styles";

export function Introduction() {
  const theme = useTheme();

  return (
    <IntroductionContainer>
      <HeroContent>
        <div>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Title>
          <InfosContainer>
            <Infos>
              <ShoppingCart
                color={theme.white}
                weight="fill"
                style={{ backgroundColor: theme["yellow-300"] }}
                size={32}
              />
              <p>Compra simples e segura</p>
            </Infos>
            <Infos>
              <Package
                color={theme.white}
                weight="fill"
                style={{ backgroundColor: theme["purple-500"] }}
                size={32}
              />
              <p>Embalagem mantém o café intacto</p>
            </Infos>
            <Infos>
              <Timer
                color={theme.white}
                weight="fill"
                style={{ backgroundColor: theme["yellow-500"] }}
                size={32}
              />
              <p>Entrega rápida e rastreada</p>
            </Infos>
            <Infos>
              <Coffee
                color={theme.white}
                weight="fill"
                style={{ backgroundColor: theme["purple-300"] }}
                size={32}
              />
              <p>O café chega fresquinho até você</p>
            </Infos>
          </InfosContainer>
        </div>
        <img
          src="src\assets\coffe.svg"
          id="coffe"
          alt="Café do Coffee Delivery"
        />
      </HeroContent>
      <img src="src\assets\hero-bg.svg" id="hero-bg" alt="" />
    </IntroductionContainer>
  );
}
