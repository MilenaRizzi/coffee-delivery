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
  PaymentContainer,
  PaymentOptions,
  PaymentTypeItem,
  RemoveButton,
  SelectedCoffees,
  Total,
} from "./styles";
import { QuantityCoffee } from "../../components/QuantityCoffee";
import { coffees } from "../../../data.json";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const newAddressFormSchema = zod.object({
  cep: zod.number({ invalid_type_error: "Informe o CEP" }),
  street: zod.string().min(1, "Informe o nome da Rua"),
  residenceNumber: zod.string().min(1, "Infome o número da residência"),
  fullAddress: zod.string().min(1, "Informe um complemento"),
  neighborhood: zod.string().min(1, "Infome o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  state: zod.string().min(1, "Infome o Estado"),
  paymentMethod: zod.enum(["credit", "debit", "cash"]),
});

export type NewAddressFormData = zod.infer<typeof newAddressFormSchema>;

const shippingPrice = 3.5;

export function Cart() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormSchema),
  });
  const { cart, incrementItemQuantity, decrementItemQuantity, checkout, removeItem } =
    useContext(CartContext);

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error("Invalid coffee.");
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    };
  });

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity);
  }, 0);

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId);
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId);
  }

  function handleItemRemove(itemId: string) {
    removeItem(itemId)
  }

  const handleOrderCheckout: SubmitHandler<NewAddressFormData> = (data) => {
    if (cart.length === 0) {
      return alert("É preciso ter pelo menos um item no carrinho");
    }
    console.log(data);
    checkout(data);
  };

  return (
    <CartContainer>
      <div>
        <h1>Complete seu pedido</h1>

        <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
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
            {errors.cep && <p>{errors.cep.message}</p>}

            <input
              type="text"
              id="street"
              placeholder="Rua"
              {...register("street")}
            />
            {errors.street && <p>{errors.street.message}</p>}

            <FullAddress>
              <input
                type="text"
                id="residenceNumber"
                placeholder="Número"
                {...register("residenceNumber")}
              />
              {errors.residenceNumber && (
                <p>{errors.residenceNumber.message}</p>
              )}

              <input
                type="text"
                id="fullAddress"
                placeholder="Complemento"
                {...register("fullAddress")}
              />
              {errors.fullAddress && <p>{errors.fullAddress.message}</p>}

              <span>Optional</span>
            </FullAddress>
            <div>
              <input
                type="text"
                id="neighborhood"
                placeholder="Bairro"
                {...register("neighborhood")}
              />
              {errors.neighborhood && <p>{errors.neighborhood.message}</p>}

              <input
                type="text"
                id="city"
                placeholder="Cidade"
                {...register("city")}
              />
              {errors.city && <p>{errors.city.message}</p>}

              <input
                type="text"
                id="state"
                placeholder="UF"
                {...register("state")}
              />
              {errors.state && <p>{errors.state.message}</p>}
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
          {coffeesInCart.map((coffee) => (
            <InfoCoffee key={coffee.id}>
              <div>
                <img src={coffee.image} alt="" />
                <DetailsCoffee>
                  <h1>{coffee.title}</h1>
                  <div>
                    <QuantityCoffee
                      quantity={coffee.quantity}
                      incrementQuantity={() => handleItemIncrement(coffee.id)}
                      decrementQuantity={() => handleItemDecrement(coffee.id)}
                    />
                    <RemoveButton onClick={() => handleItemRemove(coffee.id)}>
                      <Trash size={16} color="#8047f8" />
                      Remover
                    </RemoveButton>
                  </div>
                </DetailsCoffee>
                 <strong>
                 R$ {coffee.price && coffee.quantity ? (coffee.price * coffee.quantity).toFixed(2): 'N/A'}
              </strong>
              </div>

             
                <hr />
            </InfoCoffee>
            
          ))}
          <Total>
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  style: "currency",
                }).format(totalItemsPrice)}
              </span>
            </div>

            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  style: "currency",
                }).format(shippingPrice)}
              </span>
            </div>

            <div>
              <h1>Total</h1>
              <span>
                {new Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  style: "currency",
                }).format(totalItemsPrice + shippingPrice)}
              </span>
            </div>

            <button type="submit" form="order">
              Confirmar Pedido
            </button>
          </Total>
        </SelectedCoffees>
      </div>
    </CartContainer>
  );
}
