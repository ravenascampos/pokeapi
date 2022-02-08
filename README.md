<p align="center">
  <img alt="Favicon" src="https://raw.githubusercontent.com/ravenascampos/pokeapi/Developer/public/favicon.ico"  />
</p>

 <a href="https://pokeplace.vercel.app/"><p align="center" fontSize="60px">
  Marketplace de Pokemon </p> </a>


<p align="center">
  <img alt="Logo" src="https://github.com/ravenascampos/pokeapi/blob/Developer/src/assets/images/logo.png?raw=true" width="200px" />
</p>


## 💻 Projeto

Projeto desenvolvido como conclusão de curso da Accenture Academy Front-end. 
Todos os dados sobre os pokémon como nome, número, tipo, imagem e entre outras coisas, foram disponilizadas com o uso da API REST [PokéApi](https://pokeapi.co/).

### Funcionalidades

- [x] **Página de login**: A página inicial é a de login, que pede o nome do usuário, e-mail e senha. Quando falta alguma informação, exibe mensagem de informações faltantes. Ao logar, o usuário é redirecionado para o catálogo de produtos.

- [x] **Catálogo de produtos**: Listar os pokémon com o uso da API REST, de acordo com a paginação, retornando 20 pokemons por página.

- [x] **Tela de carrinho**: Listar os produtos selecionados em um carrinho de compras. No carrinho é possível atualizar a quantidade, excluir e finalizar a compra.

- [x] **Modal de compra efetuada**: Ao finalizar a compra, um modal é aberto com um botão que redireciona para a página de compras e esvazia o carrinho.

- [x] **Tela de listagem de pokemons**: Tela de listagem de pokemons que apresenta 20 pokemons por pagina, tendo botão de paginação e header.

- [x] **Modal com detalhes dos pokemons**: Apresenta informações como nome, tipo, foto, hp, ataque, defesa, ataque especial, defesa especial, peso e altura, bem como o valor que foi feito com base no peso do pokemon, multiplicado por 10.

- [x] **Header**: Navegação com icones de perfil, carrinho de compras e logout, além da Logo da aplicação.



### Funcionalidades Extras

Além das funcionalidades principais foram adicionadas outras ao projeto:

- [x] **Salvar Dados de compra localmente**: Os dados do carrinho de compras são salvos no localStorage. Cada loja armazena seus dados individualmente. Assim, mesmo atualizando a página ou navengando entre as lojas, os dados não se perdem até finalizar a compra.

- [x] **Seção detalhes**: Foi adotado o uso de um modal para apresentar os dados de informações sobre o produto, como tipos, habilidades, altura e peso. Basta clicar no ícone de info, presente em cada card de pokémon.

- [x] **Notificação por toast**: Para interagir e guiar o usuário, foram utilizados Toasts de notificação para apresentar algum aviso( por exemplo, quando tentar finalizar a compra com o carrinho vazio) ou de erro.

- [x] **Gerenciamento de estoque**: Como a API não disponibiliza "estoque de pokémon", foi definido um padrão de no máximo 3 itens de cada no carrinho. A aplicação consegue incrementar e decrementar itens, e retorna um aviso caso a quantidade selecionada seja maior que o estoque definido.

### Conceitos abordados

- Uso de css-in-js e criação de Tema global com o `ThemeProvider` do [styled-components](https://www.styled-components.com/)

- Consumo da api do pokemon em [Pokeapi](https://pokeapi.co/).


## :rocket: Tecnologias

- [React](https://pt-br.reactjs.org/)
- [React-Icons](https://react-icons.netlify.com/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Styled-components](https://www.styled-components.com/)
- [React-Modal](github.com/reactjs/react-modal)
- [React-MUI](https://mui.com/)
- [Redux](https://react-redux.js.org/)
- [Create React App](https://github.com/facebook/create-react-app).


## 📥 Instalação e execução

Faça um clone desse repositório e acesse o diretório.

```bash
$ git clone https://github.com/lucascmreis/pokeplace.git && cd pokeplace
```

```bash
# Instalando as dependências
$ yarn

# Executanto aplicação
$ yarn start

```

## :muscle: Contribuir

Faça o `fork` e clone o projeto a partir do seu usuário.

```bash
# Clonando projeto
$ git clone https://github.com/SEU-NOME-DE-USUARIO/pokeplace.git

# Criando um branch
$ git branch minha-alteracao

# Acessando o novo branch
$ git checkout -b minha-alteracao

# Adicionando os arquivos alterados
$ git add .

# Criando commit e a mensagem
$ git commit -m "Corrigindo...."

# Enviando alterações para o brach
$ git push origin minha-alteracao
```

Você deve navegar até o seu repositório onde fez o fork e clicar no botão _New pull request_ no lado esquerdo da página.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

## Imagens da aplicação

<img alt="login" src="https://github.com/ravenascampos/pokeapi/blob/master/screenshoots/tela%20de%20login.png?raw=true" />
<img alt="perfil" src="https://github.com/ravenascampos/pokeapi/blob/master/screenshoots/perfil.png?raw=true"  />
<img alt="Listagem de pokemons 1" src="https://github.com/ravenascampos/pokeapi/blob/master/screenshoots/listagem%20de%20pokemons%201.png?raw=true"  />
<img alt="Listagem de pokemons 2" src="https://github.com/ravenascampos/pokeapi/blob/master/screenshoots/listagem%20de%20pokemons%202.png?raw=true"  />
<img alt="Modal detalhes pokemons" src="https://github.com/ravenascampos/pokeapi/blob/master/screenshoots/modal%20detalhes%20pokemon.png?raw=true"  />
<img alt="Carrinho de compras" src="https://github.com/ravenascampos/pokeapi/blob/master/screenshoots/carrinho%20de%20compras.png?raw=true"  />
<img alt="Modal do carrinho" src="https://github.com/ravenascampos/pokeapi/blob/master/screenshoots/modal%20carrinho.png?raw=true"  />
<img alt="Carregamento de pagina" src="https://github.com/ravenascampos/pokeapi/blob/master/screenshoots/carregamento.png?raw=true"  />
