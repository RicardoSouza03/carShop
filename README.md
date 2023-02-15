# Car shop project
This is a project developed during my period as a student on [*Trybe*](https://www.betrybe.com/).

### What I have done:
I developed this project with the purpose of improving my skills with, object oriented programming(OOP) and API - CRUD, utilizing MongoDB as a database through mongoose framework, to manage a car concessionaire.

# Tecnologies

```
Docker
Typescript
Sinon, mocha, chai - Unit Tests
MongoDB
Mongoose
Express
```
# How it works
This project has no front end, so it is more difficult to visualize what it does, but I will explain.

<details>
  <summary><strong>Routes</strong></summary>
  
  ### There is two routes that has the same purposes, they are: /cars and /motorcycles.
  Their HTTP methods are:

  ## Post:
  - post */motorcycles* or */cars*: </br>
  It recives an object that represents the vehicle, and returns the same object with the vehicle id, like this:

  *Object that user send*
  ```json
  {
    "model": "Marea",
    "year": 2002,
    "color": "Black",
    "status": true,
    "buyValue": 15.990,
    "doorsQty": 4,
    "seatsQty": 5,
  }
  ```
  *Response that user recives*
  ```json
  {
    "id": "6348513f34c397abcad040b2",
    "model": "Marea",
    "year": 2002,
    "color": "Black",
    "status": true,
    "buyValue": 15.990,
    "doorsQty": 4,
    "seatsQty": 5,
  }
  ```

  ## Get:
  - get */motorcycles* or */cars*: </br>
  That returns a list of vehicles like this example:
  ```json
  [
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Honda Cb 600f Hornet",
      "year": 2005,
      "color": "Yellow",
      "status": true,
      "buyValue": 30.000,
      "category": "Street",
      "engineCapacity": 600,
    },
    {
      "id": "634852326b35b59438fbea31",
      "model": "Honda Cbr 1000rr",
      "year": 2011,
      "color": "Orange",
      "status": true,
      "buyValue": 59.900,
      "category": "Street",
      "engineCapacity": 1000,
    },
  ]
  ```
  - get */motorcycles/id* or */cars/id*: </br>
  That returns the vehicle that matches the id, like this:
  ```json
    {
      "id": "634852326b35b59438fbea31",
      "model": "Honda Cbr 1000rr",
      "year": 2011,
      "color": "Orange",
      "status": true,
      "buyValue": 59.900,
      "category": "Street",
      "engineCapacity": 1000,
    }
  ```

  ## Put:
  - put */motorcycles/id* or */cars/id*: </br>
  It will update the vehicle informations that has the same id, with the new ones provided.
  
  *Object that user send*
  ```json
  {
    "model": "Marea",
    "year": 2012,
    "color": "Red",
    "status": true,
    "buyValue": 20.000,
    "doorsQty": 4,
    "seatsQty": 5,
  }
  ```
  *Response that user recives*
  ```json
  {
    "id": "6348513f34c397abcad040b2",
    "model": "Marea",
    "year": 2012,
    "color": "Red",
    "status": true,
    "buyValue": 20.000,
    "doorsQty": 4,
    "seatsQty": 5,
  }
  ```

  ### Delete:

  - delete */motorcycles/id* or */cars/id*: </br>
  It will delete the vehicle that has the id passed on the url. </br>
  *It only returns a 200 status*

</details>

<details>
  <summary><strong>Exceptions</strong></summary>

  ### When trying to access any of the routes that needs id, will be two exceptions that will throw an error:

  - The first one is when the user gives an invalid mongoID, for example:
    - <strong>get /motorcycles/12</strong> <-- 12 is an invalid mongo id. </br>
    So it will return the following object:
  ```json
  { "message": "Invalid mongo id" }
  ```

  - The second one is when the user gives an id that does not exists, for example:
    - <strong>put /cars/6348513f34c397abcad040c9</strong> <-- it is an valid mongo id, but does not exist on database. </br>
    It can return the following objects based on route:
  ```json
  { "message": "Car not found" }
  ```
  ```json
  { "message": "Motorcycle not found" }
  ```

</details>

<details>
  <summary><strong>How to run</strong></summary>

  - First step, you want to clone this repository, use:
  ```
  git clone git@github.com:RicardoSouza03/carShop.git
  ```

  - after that you have to access the file with the project, use:
  ```
  cd carShop
  ```

  - Once inside the project file, I advise to run it with docker, since it is already done:
    - docker will create two containers, one for the database, called car_shop_db, and another for the application, called car_shop.
  ```
  docker-compose up -d
  ```
  
  - To start the application you have to utilize the container car_shop, install the dependencies, and after that start the application, you can do that using the following lines:
  ```
  docker exec -it car_shop bash
  npm i
  npm run dev
  ```

  - And finally, you can use it with some REST client to test this API.
    - I utilized thunder client, but fell free to use any other.
</details>

## Trybe

<details>
  <summary><strong>Files given.</strong></summary>
  <ul>
    <li>Project files structure</li>
    <li>Eslint configs</li>
    <li>Docker config</li>
    <li>Jest configs</li>
    <li>Typescript config</li>
    <li>Dependecies</li>
  </ul>
</details>

#

<details>
<summary><strong>Versão em Portugues</strong></summary>

### O que foi feito:
Eu desenvolvi este projeto com o propóstio de melhorar minhas habilidades com a programação orientada a objeto (POO) e a criação de API - CRUD, utilizando como banco de dados o MongoDB através do framework mongoose, com a finalidade de administrar uma concessionária de carros.

# Tecnologias

```
Docker
Typescript
Sinon, mocha, chai - Testes unitários
MongoDB
Mongoose
Express
```
# Como funciona
Esse projeto não possui front end, o que dificulta a visualização do que ele faz, mas eu irei explicar.

<details>
  <summary><strong>Rotas</strong></summary>
  
  ### Existem duas rotas com os mesmos propósitos, estas são: /cars e /motorcycles.
  Os metódos HTTP delas são:

  ## Post:
  - post */motorcycles* ou */cars*: </br>
  Ela recebe um objeto que representa um veículo, e retorna o mesmo objeto, só que agora com o id deste veículo, exemplo:

  *Objeto que o usuário envia*
  ```json
  {
    "model": "Marea",
    "year": 2002,
    "color": "Black",
    "status": true,
    "buyValue": 15.990,
    "doorsQty": 4,
    "seatsQty": 5,
  }
  ```
  *Resposta que o usuário recebe*
  ```json
  {
    "id": "6348513f34c397abcad040b2",
    "model": "Marea",
    "year": 2002,
    "color": "Black",
    "status": true,
    "buyValue": 15.990,
    "doorsQty": 4,
    "seatsQty": 5,
  }
  ```

  ## Get:
  - get */motorcycles* ou */cars*: </br>
  Esta retorna uma lista com os veículos, exemplo:
  ```json
  [
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Honda Cb 600f Hornet",
      "year": 2005,
      "color": "Yellow",
      "status": true,
      "buyValue": 30.000,
      "category": "Street",
      "engineCapacity": 600,
    },
    {
      "id": "634852326b35b59438fbea31",
      "model": "Honda Cbr 1000rr",
      "year": 2011,
      "color": "Orange",
      "status": true,
      "buyValue": 59.900,
      "category": "Street",
      "engineCapacity": 1000,
    },
  ]
  ```
  - get */motorcycles/id* ou */cars/id*: </br>
  Esta retorna o veículo que contém o mesmo id passado, exemplo:
  ```json
    {
      "id": "634852326b35b59438fbea31",
      "model": "Honda Cbr 1000rr",
      "year": 2011,
      "color": "Orange",
      "status": true,
      "buyValue": 59.900,
      "category": "Street",
      "engineCapacity": 1000,
    }
  ```

  ## Put:
  - put */motorcycles/id* ou */cars/id*: </br>
  Ela ira atualizar as informações do veículo com o mesmo id, com as novas informações passadas, exemplo:
  
  *Objeto que o usuário envia*
  ```json
  {
    "model": "Marea",
    "year": 2012,
    "color": "Red",
    "status": true,
    "buyValue": 20.000,
    "doorsQty": 4,
    "seatsQty": 5,
  }
  ```
  *Resposta que o usuário recebe*
  ```json
  {
    "id": "6348513f34c397abcad040b2",
    "model": "Marea",
    "year": 2012,
    "color": "Red",
    "status": true,
    "buyValue": 20.000,
    "doorsQty": 4,
    "seatsQty": 5,
  }
  ```

  ### Delete:

  - delete */motorcycles/id* ou */cars/id*: </br>
  Ela ira deletar o veículo com o mesmo id passado na url. </br>
  *Somente retorna um status 200*

</details>

<details>
  <summary><strong>Exceções</strong></summary>

  ### Quando tentar acessar qualquer rota que utiliza o id, haveram duas exceções que acusará um erro:

  - A primeira é quando o usuário passa um mongoID inválido, por exemplo:
    - <strong>get /motorcycles/12</strong> <-- 12 é um mongo id inválido. </br>
    Então será retornado o seguinte objeto:
  ```json
  { "message": "Invalid mongo id" }
  ```

  - A segunda é quando um usuário passa um id que não existe, por exemplo:
    - <strong>put /cars/6348513f34c397abcad040c9</strong> <-- este é um mongo id válido, mas não existe no banco de dados. </br>
    Então será retornado um dos seguintes objetos:
  ```json
  { "message": "Car not found" }
  ```
  ```json
  { "message": "Motorcycle not found" }
  ```

</details>

<details>
  <summary><strong>Como rodar</strong></summary>

  - Primeiramente, você deve clonar este repositório, rode:
  ```
  git clone git@github.com:RicardoSouza03/carShop.git
  ```

  - Após isto você deverá acessar a pasta com o projeto, rode:
  ```
  cd carShop
  ```

  - Agora já dentro da pasta, eu recomendo que rode o projeto com docker, já que já está pronto:
    - O docker ira criar dois containers, um para o banco de dados, chamado car_shop_db, e outro para a aplicação, chamado car_shop
  ```
  docker-compose up -d
  ```
  
  - E para inicar a aplicação, você têm de utilizar o container car_shop, instalar as dependências, e após isto inicia-la, você pode fazer isto através das seguintes linhas:
  ```
  docker exec -it car_shop bash
  npm i
  npm run dev
  ```

  - E finalmente você pode testar a API com algum cliente feito para isto.
    - Eu utilizei o thunder client mas fique a vontade para usar qualquer outro.
</details>

## Trybe

<details>
  <summary><strong>Pastas providas.</strong></summary>
  <ul>
    <li>Estruturas de pastas</li>
    <li>configurações Eslint</li>
    <li>configurações Docker</li>
    <li>configurações Jest</li>
    <li>configurações Typescript</li>
    <li>Dependências</li>
  </ul>
</details>

</details>
