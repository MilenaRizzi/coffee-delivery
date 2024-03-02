import { Minus, Plus } from "@phosphor-icons/react";
import { Container } from "./styles";

interface QuantityCoffeeProps {
  quantity: number;
  quantityIncrement: () => void;
  quantityDecrement: () => void;
}

export function QuantityCoffee({
  quantity,
  quantityIncrement,
  quantityDecrement,
}: QuantityCoffeeProps) {
 
  return (
    <Container>
      <button onClick={quantityDecrement}>
        <Minus size={14} color="#8047f8" />
      </button>
      <span>{quantity}</span>
      <button onClick={quantityIncrement}>
        <Plus size={14} color="#8047f8" />
      </button>
    </Container>
  );
}
