## 🚀 Tecnologias utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- [**JDK 11**](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html): Java Development Kit 11 - um kit de desenvolvimento para construção de aplicações e componentes usando a linguagem de programação Java;

- [**STS (Spring Tool Suite)**](https://spring.io/tools): um ambiente de desenvolvimento baseado em Eclipse, personalizado para desenvolvimento de aplicações Spring;

- [**Postman**](https://www.postman.com/): uma ferramenta que tem como objetivo testar serviços RESTful (Web APIs) por meio do envio de requisições HTTP e da análise do seu retorno;

  > A workspace do Postman com as requisições está disponível para download neste repositório. Baixe e importe o arquivo **`DSDeliver.postman_collection.json`** em seu Postman.

- [**Postgresql 12**](https://www.postgresql.org/download/): um sistema gerenciador de banco de dados objeto relacional (SGBD), desenvolvido como projeto de código aberto;

- [**pgAdmin**](https://www.pgadmin.org/): ferramenta para administração do Postgresql, permite fazer realizar as tarefas necessárias para administração do banco de dados;

- [**Heroku CLI**](https://devcenter.heroku.com/articles/heroku-cli): interface de linha de comando do Heroku que facilita a criação e gerenciamento de seus apps no Heroku diretamente de um terminal;

- [**Git**](https://git-scm.com/downloads): o sistema de controle de versão distribuído de código aberto mais utilizado;

- [**Visual Studio Code**](https://code.visualstudio.com/): um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS, recomendado para o desenvolvimento de aplicações web;

- [**Node.js**](https://nodejs.org/en/): um interpretador de JavaScript assíncrono com código aberto orientado a eventos;

- [**TypeScript**](https://www.typescriptlang.org/): um super conjunto da linguagem JavaScript que fornece classes, interfaces e tipagem estática opcional. Utilizado em conjunto com React no frontend web;

- [**React**](https://reactjs.org): uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (frontend) em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros;

- [**React Native**](https://facebook.github.io/react-native/): uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa;

## 📟 Layout

O layout das telas da aplicação **DSDeliver** foi desenvolvido pela equipe da [**DevSuperior**](https://github.com/DevSuperior/) através da ferramenta online [**Figma**](https://www.figma.com), um software de prototipação voltado para **UI Design (design de interface)**.
Você pode acessar o layout através deste link: [**DSDeliver**](https://www.figma.com/file/LAIvIzyaJsSl2A9NMrnR7W/DSDeliver01).

<figure>
<div align="center">
  <img src="https://github.com/HeitorPreviero/dsdeliver-sds2/blob/main/img/DSDeliver-Layouts.png"  alt="Layouts">
  <figcaption>Layout das telas da aplicação</figcaption>
</div>
</figure>

<figure>
<div align="center">
  <img src="https://github.com/HeitorPreviero/dsdeliver-sds2/blob/main/img/DSDeliver-Home.png"  alt="Página inicial">
  <figcaption>Página inicial</figcaption>
</div>
</figure>

<figure>
<div align="center">
  <img src="https://github.com/HeitorPreviero/dsdeliver-sds2/blob/main/img/DSDeliver-Orders.png"  alt="Página de pedidos">
  <figcaption>Página de pedidos</figcaption>
</div>
</figure>

<figure>
<div align="center">
  <img src="https://github.com/HeitorPreviero/dsdeliver-sds2/blob/main/img/DSDeliver-404.png"  alt="Página de erro 404">
  <figcaption>Página de erro 404</figcaption>
</div>
</figure>

## 🔧 Instalação e execução

Para baixar o código-fonte do projeto em sua máquina, primeiramente terá que ter instalado o [**Git**](https://git-scm.com/).

Com o Git instalado, em seu terminal execute o seguinte comando:

```bash
$ git clone https://github.com/HeitorPreviero/dsdeliver-sds2
```

### Backend

- Com o projeto baixado, abra-o em sua IDE (Spring Tool Suite).
- Como será executado localmente em sua máquina, abra o arquivo **`application.properties`** e altere o perfil ativo de **`prod`** para **`test`**:
- Execute o arquivo **`DsdeliverApplication.java`**.
- A aplicação Spring Boot será executada no endereço: _**`http://localhost:8080/`**_.

---

### Frontend web

Para instalar e executar o frontend-web do DSDeliver, terá que ter instalado em sua máquina também o [**Node.js**](https://nodejs.org/en/).

1. Vá até a pasta front-web do repositório:
   ```bash
   $ cd front-web
   ```
2. Instale as dependências do projeto:
   ```bash
   $ npm install
   ```
   Atenção, antes de executar a aplicação React:

> Para a busca de endereços no mapa, foi utilizado o [**Mapbox**](https://www.mapbox.com/), uma plataforma de mapeamento que permite que seus clientes criem soluções de mapeamento personalizadas.

- Então, se deseja carregar os endereços no mapa, você precisará [**criar uma conta gratuita na plataforma**](https://account.mapbox.com/auth/signup/) e utilizar seu token pessoal de acesso à API.
- Após a criação da sua conta, na página principal do MapBox, clique em “Account”. Em configurações, clique em **“API access tokens”** e depois em “Create a new token”;
- Copie o token gerado, e dentro da pasta **`front-web`**, crie um arquivo com a extensão **`.env`**, onde serão definidas as variáveis de ambiente do projeto.
- Adicione o seguinte conteúdo ao seu arquivo, substituindo **`token`** pelo seu token copiado:

  ```
  REACT_APP_ACCESS_TOKEN_MAP_BOX=token
  REACT_APP_API_URL=http://localhost:8080
  ```

- Inicie a aplicação React:
  ```bash
  $ npm start
  ```
- Acesse a aplicação pelo endereço: _**`http://localhost:3000/`**_.

---
