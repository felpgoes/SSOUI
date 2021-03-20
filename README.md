# 1. Documentação Reactjs - Client

## 1.1 Iniciar o projeto:

Baixar as dependências utilizando yarn ou npm:

```jsx
*yarn ou yarn install*

**ou**

*npm install*
```

Para dar start no projeto, é necessário realizar o comando:

```jsx
*yarn start*

**ou**

*npm start*
```

## 1.2 Processo de desenvolvimento

Utilizado Reactjs na versão 17.0.1.

O projeto foi criado utilizando:

```jsx
npx create-react-app sso-ui
```

### 1.2.1 Componentes

Para organização dos componentes utilizei o padrão ***Atomic Design***, onde a separacao dos componentes é feita baseada em sua complexidade e subdivididos em ***atoms*** para utilizacão de tags únicas de html e ***molecules*** para união de dois ou mais atoms.

Para desenvolvimento de cada componente foi utilizado a biblioteca ***styled-components na versão 5.0.1***.

### 1.2.2 Gerenciamento de estado

Para gerenciamento de estado utilizei o ***redux na versão 7.2.0*** e como middleware do redux utilizei ***redux-saga na versão 1.1.3***.
