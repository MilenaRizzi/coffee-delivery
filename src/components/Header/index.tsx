import { CustomMapPin, CustomShoppingCart, HeaderContainer, Local, ShoppingCartContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src="src\assets\logo.png" alt="" />
      <nav>
        <Local>
          <CustomMapPin size={22} weight="fill"/>
          <p>Porto Alegre, RS</p>
        </Local>
        <ShoppingCartContainer>
          <CustomShoppingCart size={22} weight="fill" />
        </ShoppingCartContainer>
      </nav>
    </HeaderContainer>
  );
}
