import { Minus, Plus } from "@phosphor-icons/react";
import { Container } from "./styles";

export function QuantityCoffee() {
  return (
    <Container>
      <button>
        <Minus size={14} color="#8047f8" />
      </button>
      <span>1</span>
      <button>
        <Plus size={14} color="#8047f8" />
      </button>
    </Container>
  );
}
