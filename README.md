<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

<h2>Description</h2>

Sales Management System

This project aims to create a complete online store system using modern web development technologies. The system consists of a RESTful API on the backend, developed using the Nest.js framework, to manage the buying and selling operations in the online store. TypeScript is also used for data typing and code quality improvement.

The system addresses important aspects such as authentication and authorization, session management, data validation, security, scalability, and performance. Good web development practices have been applied, including writing unit tests and creating clean, testable, and maintainable code.

By the end of this project, the necessary skills to create a complete online store system using modern web development technologies have been acquired. This project is ideal for web developers who want to enhance their skills in modern technologies, write high-quality code, and ensure code quality through unit testing.

<h2>Description translation</h2>

Sistema de Gerenciamento de Vendas

Este projeto tem como objetivo criar um sistema completo de loja online utilizando tecnologias modernas de desenvolvimento web. O sistema consiste em uma API RESTful no backend, desenvolvida utilizando o framework Nest.js, para gerenciar as operações de compra e venda na loja online. Também é utilizado o TypeScript para tipagem de dados e melhoria da qualidade do código.

O sistema aborda aspectos importantes como autenticação e autorização, gerenciamento de sessões, validação de dados, segurança, escalabilidade e performance. Foram aplicadas boas práticas de desenvolvimento web, incluindo a escrita de testes unitários e a criação de um código limpo, testável e de fácil manutenção.

Ao final deste projeto, foram adquiridas habilidades necessárias para criar um sistema de loja online completo, utilizando tecnologias modernas de desenvolvimento web. Este projeto é ideal para desenvolvedores web que desejam aprimorar suas habilidades em tecnologias modernas, escrever código de alta qualidade e garantir a qualidade do código por meio de testes unitários.

<h2>Used resources</h2>


- Backend:
  - Framework: Nest.js
  - Linguagem: TypeScript

<h2>Implemented Features</h2>

- API RESTful para gerenciamento das operações de compra e venda.

Addressed Aspects

- Autenticação e autorização.
- Gerenciamento de sessões.
- Validação de dados.
- Segurança.
- Escalabilidade e performance.
- Boas práticas de desenvolvimento web.
- Testes unitários.

<h2>Commands Used (Project with NestJS)</h2>

- `npm i -g @nestjs/cli` (Install NestJS CLI)

- `nest new sales-backend` (create NestJS project)

- `nest g module user` (crating a module user called)

- `nest g controller user` (crating a controller user called)

<h3>Basic explanation of the architecture in NestJS</h3>

_O que são interfaces e DTOS dentro do módulo user?_
_Interfaces_ - é os dados em si, aquilo q salva no banco de dados, mas se trata de dados especificos do usuário como suas informações de endereço, telefone dados pessoais, id, password e etc...


_DTO_ - é um dataTransfer, dados que serão transferidos, por exemplo a senha do usuário, a gente não salva senha diretamente no banco de dados pq se um dia o banco for hackeado o hacker terá acesso a senha, então enviamos a senha ao DTO e ele irá criptografar a senha e enviar ao banco de dados a senha criptografada.


<h3>Installation</h3>

```bash
$ npm install
```

Running the app

```bash
 development
$ npm run start 
run the system once

 watch mode
$ npm run start:dev
Run the system whenever changes are saved


 production mode
$ npm run start:prod
```

Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)
