import { ShoppingCartSimple } from "@phosphor-icons/react";
import {
  Button,
  Buy,
  CoffeeCardContainer,
  Infos,
  Price,
  TypeCoffe,
} from "./styles";
import { QuantityCoffee } from "../../../../components/QuantityCoffee";

type Props = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}
export function CoffeeCard({ coffee }: Props) {
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
          <QuantityCoffee />
        </div>
        <Button>
          <ShoppingCartSimple size={22} color="#ffffff" weight="fill" />
        </Button>
      </Buy>
    </CoffeeCardContainer>
  );
}
