# Task Manager

## Visão Geral

O Task Manager é uma aplicação web para gerenciar suas atividades diárias. Com esta aplicação, você pode cadastrar novas tarefas, marcar tarefas como feitas e finalizadas. O projeto é composto por um frontend desenvolvido em Next.js e um backend utilizando Java Spring Boot com um banco de dados temporário H2.

## Funcionalidades

- **Cadastrar Tarefas**: Adicione novas tarefas à sua lista.
- **Marcar Tarefas como Feitas**: Atualize o status das tarefas para feito.
- **Finalizar Tarefas**: Marque tarefas como finalizadas quando concluídas.

## Tecnologias Utilizadas

### Frontend

- [Next.js](https://nextjs.org/): Framework React para renderização do lado do servidor.
- [React](https://reactjs.org/): Biblioteca JavaScript para construção de interfaces de usuário.

### Backend

- [Spring Boot](https://spring.io/projects/spring-boot): Framework Java para construção de aplicações web robustas.
- [H2 Database](http://www.h2database.com/html/main.html): Banco de dados em memória usado para desenvolvimento e testes.

## Instalação

### Pré-requisitos

- Node.js
- NPM ou Yarn
- Java JDK 11 ou superior
- Maven

### Estrutura do Projeto

- frontend/: Contém o código do frontend Next.js.
- backend/: Contém o código do backend Spring Boot.

### Endpoints do Backend

- GET /api/tasks: Lista todas as tarefas.
- POST /api/tasks: Cria uma nova tarefa.
- PUT /api/tasks/{id}: Atualiza uma tarefa existente.
- DELETE /api/tasks/{id}: Deleta uma tarefa.

