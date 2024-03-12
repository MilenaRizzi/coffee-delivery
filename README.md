# coffee-delivery
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/MilenaRizzi/coffee-delivery/blob/main/LICENSE) 

# Sobre o projeto

Coffee-delivery é uma aplicação front-end desenvolvida para resolução do desafio final do módulo 2 do curso trilha ReactJS da plataforma Rocketseat.

Este é um aplicativo de entrega de café onde os usuários podem fazer pedidos de cafés online de forma conveniente. A aplicação possui três páginas principais: a página inicial, a página do carrinho de compras e a página de confirmação de pedido.

# Funcionalidades
## Página inicial (Home)

A página inicial é a primeira tela que os usuários encontram ao acessar o aplicativo. Nesta página, eles serão recebidos com uma interface intuitiva e amigável, apresentando as seguintes funcionalidades:

- Catálogo de Cafés: Exibição dos diversos tipos de cafés disponíveis para compra, com imagens atrativas, descrições e preços.
- Botão para Adicionar quantidade: Cada itém possui um botão para o usuário gerenciar a quantidade de café a qual deseja
- Botão de Adicionar ao Carrinho: Cada item no catálogo possui um botão de um carrinho que permite ao usuário adicionar o café desejado ao carrinho de compras.

![Coffee Delivery - Home](https://github.com/MilenaRizzi/coffee-delivery/assets/116590085/ee160d04-0e6b-4233-a084-fca2de25dd3f)
**Layout-web - Home**


## Página do Carrinho de Compras
Após adicionar cafés ao carrinho, os usuários podem acessar a página do carrinho de compras para revisar e finalizar seus pedidos. Para isso, basta clicar no botão de carrinho presente no cabeçalho da página home. Na página do carrinho de compras, eles encontrarão:

- Cadastro de endereço para entrega do pedido: usuário irá adicionar o seu endereço 
- Formas de pagamento do pedido: permite ao usuário selecionar a forma de pagamento desejada
- Lista de Itens no Carrinho: Exibição dos cafés selecionados, com informações detalhadas, como nome, quantidade, subtotal e botão que possibilita remover item do carrinho.
- Total do Pedido: Exibição do valor total do pedido, incluindo taxa de entrega padrão de R$3,50.
- Botão de Confirmação:  Um botão de confirmação que processa o pedido e direciona o usuário para uma página de confirmação visual.

**Layout web - Checkout**
![Coffee Delivery - Checkout Filled](https://github.com/MilenaRizzi/coffee-delivery/assets/116590085/c1a7345c-17eb-497b-98c5-1eabbcb55026)

## Página de Confirmação de pedido
- Resumo do Pedido: Detalhes finais do pedido, incluindo confirmação do endereço, previsão de entrega e forma de pagamento selecionada.

**Layout web - Success**
![Coffee Delivery - Success](https://github.com/MilenaRizzi/coffee-delivery/assets/116590085/0408b323-ba9d-420d-849a-f86865e93677)


# Tecnologias Utilizadas
## Front end
- JS / TypeScript
- ReactJS
- Styled Components

**Validação:**
- Zod
- Resolver

# Como executar o projeto
Pré-requisitos: npm 

```bash
# clonar repositório
git clone: [https://github.com/MilenaRizzi/coffee-delivery]

# entrar na pasta coffee-delivey
cd coffee-delivery

# instalar dependências
npm instal

# executar o projeto
npm run dev
```

# Autora
Milena Clara Ribeiro Rizzi

