# Tesques 📝

## 📌 Sobre o projeto

**Tesques** é uma API de gerenciamento de tarefas (Tasks) desenvolvida para praticar conceitos de back-end e operações CRUD.

O sistema permite criar, visualizar, atualizar e remover tarefas. Cada tarefa possui:

* **Título**
* **Descrição**
* **Status de conclusão** (booleano para indicar se a tarefa foi concluída ou não)

Este projeto foi desenvolvido como um mini projeto para praticar desenvolvimento de API utilizando JavaScript no back-end.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Express.js
* Sequelize
* MySQL
* JavaScript

---

## 📂 Estrutura do projeto

```
src
│
├── controllers
│   └── taskController.js
│
├── models
│   └── Tasks.js
│
├── routes
│   └── tasksroutes.js
│
├── database
│   └── sqlConnection.js
│
└── app.js
```

---

## ⚙️ Como executar o projeto

### 1️⃣ Clonar o repositório

```
git clone https://github.com/seu-usuario/tesques.git
```

### 2️⃣ Entrar na pasta do projeto

```
cd tesques
```

### 3️⃣ Instalar as dependências

```
npm install
```

### 4️⃣ Configurar o banco de dados

Configure a conexão com o banco no arquivo:

```
src/database/sqlConnection.js
```

---

### 5️⃣ Rodar o servidor

```
node src/app.js
```

O servidor irá iniciar normalmente na porta definida no projeto.

---

## 📡 Rotas da API

### 🔎 Buscar todas as tasks

```
GET /tasks
```

---

### 🔎 Buscar task por ID

```
GET /tasks/:id
```

---

### ➕ Criar uma nova task

```
POST /tasks
```

Exemplo de body:

```json
{
  "title": "Estudar Node",
  "description": "Praticar CRUD com Sequelize",
  "completed": false
}
```

---

### ✏ Atualizar uma task

```
PUT /tasks/:id
```

---

### 🗑 Deletar uma task

```
DELETE /tasks/:id
```

---

## 🧠 Estrutura da Task

Cada tarefa possui os seguintes campos:

| Campo       | Tipo    | Descrição                        |
| ----------- | ------- | -------------------------------- |
| id          | Integer | Identificador da tarefa          |
| title       | String  | Título da tarefa                 |
| description | String  | Descrição da tarefa              |
| completed   | Boolean | Indica se a tarefa foi concluída |

---

## 🎯 Objetivo do projeto

O objetivo do projeto é praticar:

* criação de **APIs REST**
* operações **CRUD**
* uso de **ORM com Sequelize**
* organização de projeto em **controllers, models e routes**
* conexão com banco de dados

---

## 👨‍💻 Autor

Projeto desenvolvido por **Gustavo e Erick**.
