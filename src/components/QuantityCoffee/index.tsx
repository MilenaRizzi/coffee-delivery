import { Minus, Plus } from "@phosphor-icons/react";
import { Container } from "./styles";

interface QuantityCoffeeProps {
  quantity: number;
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityCoffee({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: QuantityCoffeeProps) {
 
  return (
    <Container>
      <button onClick={decrementQuantity}>
        <Minus size={14} color="#8047f8" />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus size={14} color="#8047f8" />
      </button>
    </Container>
  );
}
