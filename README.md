# Sobre o projeto

Este é o repositório do projeto desenvolvido para o teste técnico de **Pessoa Desenvolvedora Frontend** na TTZ. O projeto foi feito com **Next.js**, **React**, **TailwindCSS** e integra-se com a API MockAPI.io para gerenciar OKRs (Objectives and Key Results).

- **Live Demo**: [https://objetivos-theta.vercel.app/](https://objetivos-theta.vercel.app/)

## Como rodar o projeto

### Pré-requisitos

- Node.js (recomendado versão 16 ou superior)
- NPM ou Yarn

### Passos para rodar

1. **Clone este repositório**

   ```bash
   git clone https://github.com/maaure/objetivos
   ```

2. **Instale as dependências**

   Navegue até o diretório do projeto e instale as dependências:

   ```bash
   cd objetivos
   npm install
   ```

   ou, se estiver utilizando Yarn:

   ```bash
   yarn install
   ```

3. **Configure a API**

   O projeto utiliza a API pública da MockAPI para gerenciar os dados de OKRs. Se necessário, clone a API ou crie a sua própria no [MockAPI.io](https://mockapi.io/).

   Endpoints principais:

   - `https://67b107eb3fc4eef538e904b0.mockapi.io/api/okrs`
   - `https://67b107eb3fc4eef538e904b0.mockapi.io/api/okrs/${id}/resultKeys`

4. **Rodando o projeto**

   Para rodar o servidor de desenvolvimento, execute o seguinte comando:

   ```bash
   npm run dev
   ```

   ou

   ```bash
   yarn dev
   ```

   O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

### Funcionalidades

- Cadastro e visualização de **Objetivos**.
- Cadastro de **Resultados-chave** para cada Objetivo.
- Cadastro de **Entregas** com percentual de conclusão.

### Dependências

- **React** e **Next.js** para o framework.
- **TailwindCSS** para o estilo.
- **Axios** para requisições HTTP.
- **Shad/cn** para os componentes React.
- **React Hook Form** para controle de formulários.

### Testes

O projeto foi configurado para utilizar o **Vitest** para testes. Para rodar os testes, use o comando:

```bash
npm run test
```

ou

```bash
yarn test
```

### Contato

Se tiver dúvidas, entre em contato comigo:

- **Email**: [pedromaure@gmail.com](mailto:pedromaure@gmail.com)

---

NANDATÊ
