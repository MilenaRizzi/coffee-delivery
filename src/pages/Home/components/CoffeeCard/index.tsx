import { ShoppingCartSimple } from "@phosphor-icons/react";
import {
  Buy,
  CoffeeCardContainer,
  Infos,
  Price,
  TypeCoffe,
} from "./styles";
import { QuantityCoffee } from "../../../../components/QuantityCoffee";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";

type Props = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};

export function CoffeeCard( { coffee }: Props) {
 
  const { quantity , quantityDecrement, quantityIncrement, addItem} = useContext(CartContext)

 
  function handleAddItem() {
    addItem({ id: coffee.id, quantity })
  }
  
  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />

      <TypeCoffe>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TypeCoffe>
      <Infos>
        <h1>{coffee.title}</h1>
        <p>{coffee.description}</p>
      </Infos>
      <Buy>
        <Price>
          <span>R$</span>9,90
        </Price>
        <div>
          <QuantityCoffee
            quantity={quantity}
            quantityIncrement={quantityIncrement}
            quantityDecrement={quantityDecrement}
          />
        </div>
          <button type="submit" onClick={handleAddItem}>
            <ShoppingCartSimple size={22} color="#ffffff" weight="fill" />
          </button>
      </Buy>
    </CoffeeCardContainer>
  );
}
