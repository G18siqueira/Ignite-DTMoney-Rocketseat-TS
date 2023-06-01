# Projeto do modulo 3 da Rocketseat (Ignite) - Trilha ReactJS

## Sobre o Projeto

Nesse módulo, o objetivo do projeto é focar no consumo de APIs, fazendo requisições entre o front-end e o back-end, além de abordar as funcionalidades do React para melhorar o desempenho, utilizando Context Selectors, useCallback, memo e useMemo.

O DT Money é um controle financeiro com cadastro de entradas/saídas, cálculo do total e um campo de busca para filtrar as transações

## Tecnologias Utilizadas

- Vite
- React
- TypeScript
- ESLint
- Styled Components (que foi uma experiência muito satisfatória, já que até o momento eu utilizava o Sass para estilizar meus projetos)
- React Hook Form
- Zod
- uuid v4
- Axios
- Json Server
- Radix UI
- React Icons

## Como Iniciar o Projeto

1. Certifique-se de ter o Node.js e o npm instalados em sua máquina.
2. Faça o clone deste repositório para o seu ambiente local.
3. No diretório do projeto, execute o comando `yarn install` para instalar as dependências necessárias.
4. Após a instalação, execute o comando `yarn dev` para iniciar a aplicação em um ambiente de desenvolvimento.
5. Abra o navegador e acesse `http://localhost:3000` para visualizar a aplicação.
5. O projeto estará disponível no seu navegador em http://localhost:3000.

## Recursos e Funcionalidades

- Cadastro de transação (Entrada ou Saída)

Também adicionei algumas funcionalidades além das abordadas no módulo, que foram:

- Edição e exclusão de uma transação;
- Paginação;
- Data da última transação cadastrada de acordo com o tipo (entrada e saída);
- Quantidade de transações cadastradas.

Para simular uma API REST, utilizei o json-server no ambiente local e, para fazer o deploy, como ainda não tenho conhecimento para criação de APIs, precisei pesquisar como criar uma API REST com todos os métodos para atender o projeto (GET, POST, PUT, PATCH e DELETE), além do filtro. Foi um belo desafio, mas consegui fazer com Node.js e Express e fiz o deploy na Vercel (https://dtmoney-server-test.vercel.app/api/transactions).
