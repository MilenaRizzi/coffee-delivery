import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { IconCart, IconCoffe, IconPackage, IconTimer, ImgContent, Infos, InfosContainer, IntroductionContainer, Title } from "./styles";

export function Introduction() {
  return (
    <IntroductionContainer>
      <div>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </p>
        </Title>
        <InfosContainer>
          <Infos>
            <IconCart>
              <ShoppingCart size={16} color="#fff5f5" />
            </IconCart>
            <p>Compra simples e segura</p>
          </Infos> 
          <Infos>
            <IconPackage>
              <Package  size={16} color="#fff5f5" />
            </IconPackage>
            <p>Embalagem mantém o café intacto</p>
          </Infos>
          <Infos>
            <IconTimer>
              <Timer size={16} color="#fff5f5" />
            </IconTimer>
            <p>Entrega rápida e rastreada</p>
          </Infos>
         
          <Infos>
            <IconCoffe>
              <Coffee  size={16} color="#fff5f5" />
            </IconCoffe>
            <p>O café chega fresquinho até você</p>
          </Infos>
        </InfosContainer>
      </div>
      <ImgContent>
        <img src="src\assets\img-coffe.png" alt="" />
      </ImgContent>
    </IntroductionContainer>
  );
}
