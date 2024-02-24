import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "@phosphor-icons/react";
import {
  Address,
  CartContainer,
  DetailsCoffee,
  FullAddress,
  Header,
  InfoCoffee,
  PaymentMethods,
  PaymentOptions,
  RemoveButton,
  SelectedCoffees,
  Total,
} from "./styles";
import { QuantityCoffee } from "../../components/QuantityCoffee";
import { coffees } from "../../../data.json";
export function Cart() {
  return (
    <CartContainer>
      <div>
        <h1>Complete seu pedido</h1>

        <form action="">
          <Address>
            <Header>
              <MapPinLine size={22} color="#c47f17" />
              <div>
                <h1>Endereço de Entrega</h1>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </Header>
            <input type="number" id="CEP" placeholder="CEP" />
            <input type="text" name="" id="street" placeholder="Rua" />
            <FullAddress>
              <input type="text" name="" id="number" placeholder="Número" />
              <input
                type="text"
                name=""
                id="fullAddress"
                placeholder="Complemento"
              />
              <span>Optional</span>
            </FullAddress>
            <div>
              <input
                type="text"
                name=""
                id="neighborhood"
                placeholder="Bairro"
              />
              <input type="text" name="" id="city" placeholder="Cidade" />
              <input type="text" name="" id="state" placeholder="UF" />
            </div>
          </Address>
          <PaymentMethods>
            <Header>
              <CurrencyDollar size={22} color="#8047f8" />
              <div>
                <h1>Pagamento</h1>
                <p>
                  O pagamento será feito na entrega. Escolha a forma que deseja
                  pagar.
                </p>
              </div>
            </Header>
            <PaymentOptions>
              <input type="radio" id="opcao1" name="opcao" />
              <label htmlFor="opcao1">
                <CreditCard size={16} color="#8047f8" />
                Cartão de Crédito
              </label>
              <input type="radio" id="opcao2" name="opcao" />
              <label htmlFor="opcao2">
                <Bank size={16} color="#8047f8" />
                Cartão de Débito
              </label>
              <input type="radio" id="opcao3" name="opcao" />
              <label htmlFor="opcao3">
                <Money size={16} color="#8047f8" />
                Dinheiro
              </label>
            </PaymentOptions>
          </PaymentMethods>
        </form>
      </div>

      <div>
        <h1>Cafés selecionados</h1>
        <SelectedCoffees>
          <InfoCoffee>
            <div>
              <img src={coffees[0].image} alt="" />
              <DetailsCoffee>
                <h1>Expresso Tradicional</h1>
                <div>
                  <QuantityCoffee />
                  <RemoveButton>
                    <Trash size={16} color="#8047f8" />
                    Remover
                  </RemoveButton>
                </div>
              </DetailsCoffee>
            </div>
            <strong>R$ 9,90</strong>
          </InfoCoffee>
          <hr />
          <InfoCoffee>
            <div>
              <img src={coffees[5].image} alt="" />
              <DetailsCoffee>
                <h1>Latte</h1>
                <div>
                  <QuantityCoffee />
                  <RemoveButton>
                    <Trash size={16} color="#8047f8" />
                    Remover
                  </RemoveButton>
                </div>
              </DetailsCoffee>
            </div>
            <strong>R$ 19,80</strong>
          </InfoCoffee>
          <hr />
          <Total>
            <strong>
              Total de Itens
              <span>R$ 29,70</span>
            </strong>
            <strong>
              Entrega
              <span>R$ 3,50</span>
            </strong>
            <h1>
              Total <span>R$ 33,20</span>
            </h1>
            <button>Confirmar Pedido</button>
          </Total>
        </SelectedCoffees>
      </div>
    </CartContainer>
  );
}
