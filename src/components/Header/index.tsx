import { useContext } from "react";
import { CustomMapPin, HeaderContainer, Local, Navigator} from "./styles";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { ShoppingCart } from "@phosphor-icons/react";

export function Header() {

  const { cart } = useContext(CartContext)
  
  let quantity: number = 0;

  cart.forEach(item => {
    quantity += item.quantity;
  });

  return (
    <HeaderContainer>
      <img src="src\assets\logo.png" alt="" />
      <Navigator>
        <Local>
          <CustomMapPin size={22} weight="fill"/>
          <p>Porto Alegre, RS</p>
        </Local>

        <NavLink to="/cart" title="Carrino" >
          <ShoppingCart size={22} weight="fill" />
          <div>
            {cart.length > 0 ? <span>{quantity}</span> : null}
          </div>
        </NavLink>
      </Navigator>
    </HeaderContainer>
  );
}
