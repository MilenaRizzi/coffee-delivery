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
  FullAddress,
  Header,
  PaymentContainer,
  PaymentOptions,
  PaymentTypeItem,
  RemoveButton,
  SelectedCoffees,
  Total,
} from "./styles";
import { QuantityCoffee } from "../../components/QuantityCoffee";
// import { coffees } from "../../../data.json";
import { Controller, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

const newAddressFormSchema = zod.object({
  cep: zod.number().min(8, "Digite um CEP válido"),
  street: zod.string().min(1, "Informe o nome da Rua"),
  residenceNumber: zod.number().min(1, "Infome o número da residência"),
  fullAddress: zod.string().min(1, "Informe um complemento"),
  neighborhood: zod.string().min(1, "Infome o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  state: zod.string().min(1, "Infome o Estado"),
  paymentMethod: zod.enum(["credit", "debit", "cash"]),
});

export type NewAddressFormData = zod.infer<typeof newAddressFormSchema>;

export function Cart() {
  const [formData, setFormData] = useState<NewAddressFormData | null>(null);
  const { control, register, handleSubmit } = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormSchema),
  });
  // const [cart] = useState<Props[]>([]);

  const { quantity, quantityDecrement, quantityIncrement  } =
    useContext(CartContext);

  function handleAddNewAddress(data: NewAddressFormData) {
    setFormData(data);

    console.log(formData)
  }

  return (
    <CartContainer>
      <div>
        <h1>Complete seu pedido</h1>

        <form id="order" onSubmit={handleSubmit(handleAddNewAddress)}>
          <Address>
            <Header>
              <MapPinLine size={22} color="#c47f17" />
              <div>
                <h1>Endereço de Entrega</h1>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </Header>
            <input
              type="number"
              id="CEP"
              placeholder="CEP"
              {...register("cep", { valueAsNumber: true })}
            />
            <input type="text" name="" id="street" placeholder="Rua" />
            <FullAddress>
              <input
                type="text"
                id="residenceNumber"
                placeholder="Número"
                {...(register("residenceNumber"), { valueAsNumber: true })}
              />
              <input
                type="text"
                id="fullAddress"
                placeholder="Complemento"
                {...register("fullAddress")}
              />
              <span>Optional</span>
            </FullAddress>
            <div>
              <input
                type="text"
                id="neighborhood"
                placeholder="Bairro"
                {...register("neighborhood")}
              />
              <input
                type="text"
                id="city"
                placeholder="Cidade"
                {...register("city")}
              />
              <input
                type="text"
                id="state"
                placeholder="UF"
                {...register("state")}
              />
            </div>
          </Address>
          <PaymentContainer>
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
            <Controller
              control={control}
              name="paymentMethod"
              render={({ field }) => {
                return (
                  <PaymentOptions onValueChange={field.onChange}>
                    <PaymentTypeItem value="credit">
                      <CreditCard size={16} color="#8047f8" />
                      Cartão de Crédito
                    </PaymentTypeItem>
                    <PaymentTypeItem value="debit">
                      <Bank size={16} color="#8047f8" />
                      Cartão de Débito
                    </PaymentTypeItem>
                    <PaymentTypeItem value="cash">
                      <Money size={16} color="#8047f8" />
                      Dinheiro
                    </PaymentTypeItem>
                  </PaymentOptions>
                );
              }}
            />
          </PaymentContainer>
        </form>
      </div>

      <div>
        
        <h1>Cafés selecionados</h1>
        <SelectedCoffees>
          {/* {coffeesInCart.map((coffee) => (
            <InfoCoffee key={coffee.id}>
              <div>
                <img src={coffee.image} alt="" />
                <DetailsCoffee>
                  <h1>{coffee.title}</h1>
                  <div>
                    <QuantityCoffee
                      quantity={quantity}
                      quantityIncrement={quantityIncrement}
                      quantityDecrement={quantityDecrement}
                    />
                    <RemoveButton>
                      <Trash size={16} color="#8047f8" />
                      Remover
                    </RemoveButton>
                  </div>
                </DetailsCoffee>
              </div>
              <strong>R$ 9,90</strong>
            </InfoCoffee>
          ))} */}

          {/* {coffeeSelect.map((coffee) => (
          
          ))} */}
          <div>
                    <QuantityCoffee
                      quantity={quantity}
                      quantityIncrement={quantityIncrement}
                      quantityDecrement={quantityDecrement}
                    />
                    <RemoveButton>
                      <Trash size={16} color="#8047f8" />
                      Remover
                    </RemoveButton>
                  </div>
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

            <NavLink to="/success" title="Sucesso">
              <button type="submit" form="order">
                Confirmar Pedido
              </button>
            </NavLink>
          </Total>
        </SelectedCoffees>

      </div>
    </CartContainer>
  );
}
