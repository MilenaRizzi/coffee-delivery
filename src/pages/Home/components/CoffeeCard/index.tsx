import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import {
  Button,
  Buy,
  CoffeeCardContainer,
  Counter,
  Infos,
  Price,
  TypeCoffe,
} from "./styles";

interface CoffeeCardProps{
  enderecoImagem: string
  typeCoffe: string
  nameCoffe: string
  descricaoCoffe: string
}

export function CoffeeCard( { enderecoImagem, typeCoffe, nameCoffe, descricaoCoffe } : CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={enderecoImagem} alt="" />
      <TypeCoffe>
        <p>{typeCoffe}</p>
      </TypeCoffe>
      <Infos>
        <h1>{nameCoffe}</h1>
        <p>{descricaoCoffe}</p>
      </Infos>
      <Buy>
        <Price>
          <span>R$</span>9,90
        </Price>
        <Counter>
          <Minus size={14} color="#8047f8" />
          <p>1</p>
          <Plus size={14} color="#8047f8" />
        </Counter>
        <Button>
        <ShoppingCartSimple size={22} color="#ffffff" weight="fill" />
        </Button>
      </Buy>
    </CoffeeCardContainer>
  );
}
