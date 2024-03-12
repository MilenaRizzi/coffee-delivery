import { Introduction } from "./components/Introduction";
import { coffees } from '../../../data.json'
import { CoffeeCard } from "./components/CoffeeCard";
import { CoffeeList } from "./styles";

export function Home() {
  return (
    <div>
      <Introduction/>
      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>

      </CoffeeList>
    </div>
  )
}