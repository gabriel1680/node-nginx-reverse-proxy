# Description

Um projeto simples de aplicação do conceito de proxy reverso utilizando uma api node, com banco de dados mysql e um 
webserver nginx. Aplicação em containers com docker-compose e dockerize.

Ao acessar a rota "/" da aplicação um nome aleatório é cadastrado no banco de dados e todos os nomes serão listados na tela principal.

A rota "/overview" contém uma breve descrição do projeto em inglês.
# Start

```sh
git clone https://github.com/gabriel1680/node-nginx-reverse-proxy.git
```

```sh
cd ./node-nginx-reverse-proxy
```

```sh
  make up
```