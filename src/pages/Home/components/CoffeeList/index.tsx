import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListContainer, List, Title } from "./styles";


export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <Title>
        <h1>Nossos cafés</h1>
      </Title>
      <List>
        <div>
          <CoffeeCard
          enderecoImagem="src\assets\expresso-tradicional.png"
          typeCoffe="TRADICIONAL"
          nameCoffe="Expresso Tradicional"
          descricaoCoffe="O tradicional café feito com água quente e grãos moídos"/>
        </div>
        <div>
          <CoffeeCard
          enderecoImagem="src\assets\expresso-americano.png"
          typeCoffe="TRADICIONAL"
          nameCoffe="Expresso Americano"
          descricaoCoffe="Expresso diluído, menos intenso que o tradicional"/>
        </div>
        <div>
          <CoffeeCard
          enderecoImagem="src\assets\expresso-cremoso.png"
          typeCoffe="TRADICIONAL"
          nameCoffe="Expresso Cremoso"
          descricaoCoffe="Café expresso tradicional com espuma cremosa"/>
        </div>
        <div>
          <CoffeeCard
          enderecoImagem="src\assets\expresso-gelado.png"
          typeCoffe="TRADICIONAL"
          nameCoffe="Expresso Gelado"
          descricaoCoffe="Bebida preparada com café expresso e cubos de gelo"/>
        </div>
        <div>
          <CoffeeCard
          enderecoImagem="src\assets\cafe-com-leite.png"
          typeCoffe="TRADICIONAL"
          nameCoffe="Café com Leite"
          descricaoCoffe="Meio a meio de expresso tradicional com leite vaporizado"/>
        </div>
        <div>
          <CoffeeCard
          enderecoImagem="src\assets\latte.png"
          typeCoffe="TRADICIONAL"
          nameCoffe="Latte"
          descricaoCoffe="Uma dose de café expresso com o dobro de leite e espuma cremosa"/>
        </div>
        <div>
          <CoffeeCard
          enderecoImagem="src\assets\capuccino.png"
          typeCoffe="TRADICIONAL"
          nameCoffe="Capuccino"
          descricaoCoffe="Bebida com canela feita de doses iguais de café, leite e espuma"/>
        </div>
        <div>
          <CoffeeCard
          enderecoImagem="src\assets\macchiato.png"
          typeCoffe="TRADICIONAL"
          nameCoffe="Macchiato"
          descricaoCoffe="Café expresso misturado com um pouco de leite quente e espuma"/>
        </div>
        <div>
          <CoffeeCard
          enderecoImagem="src\assets\mocaccino.png"
          typeCoffe="TRADICIONAL"
          nameCoffe="Mocaccino"
          descricaoCoffe="Café expresso com calda de chocolate, pouco leite e espuma"/>
        </div>
        <div>
          <CoffeeCard
          enderecoImagem="src\assets\chocolate-quente.png"
          typeCoffe="TRADICIONAL"
          nameCoffe="Chocolate Quente"
          descricaoCoffe="Bebida feita com chocolate dissolvido no leite quente e café"/>
        </div>
        <div>
          <CoffeeCard
          enderecoImagem="src\assets\cubano.png"
          typeCoffe="TRADICIONAL"
          nameCoffe="Cubano"
          descricaoCoffe="Drink gelado de café expresso com rum, creme de leite e hortelã"/>
        </div>
        <div>
          <CoffeeCard
          enderecoImagem="src\assets\havaiano.png"
          typeCoffe="TRADICIONAL"
          nameCoffe="Havaiano"
          descricaoCoffe="Bebida adocicada preparada com café e leite de coco"/>
        </div>
        <div>
          <CoffeeCard
          enderecoImagem="src\assets\arabe.png"
          typeCoffe="TRADICIONAL"
          nameCoffe="Árabe"
          descricaoCoffe="Bebida preparada com grãos de café árabe e especiarias"/>
        </div>
        <div>
          <CoffeeCard
          enderecoImagem="src\assets\irlandes.png"
          typeCoffe="TRADICIONAL"
          nameCoffe="Irlandês"
          descricaoCoffe="Bebida a base de café, uísque irlandês, açúcar e chantilly"/>
        </div>
        
      </List>
    </CoffeeListContainer>
  )
}