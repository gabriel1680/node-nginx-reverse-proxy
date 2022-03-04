# Description

Foi crada uma imagem de um servidor nodejs que se comunicasse com um banco de dados mysql através de uma rede interna do container e também que tivesse o nginx como proxy reverso recebendo as requisições. Dessa vez foi necessário utilizar o docker compose para realizar o build das três imagens, sendo as imagens do servidor node e ngnix provenientes de dois Dockerfiles diferentes. Foi necessário também criar a rede interna para que pudesse ser compartilhada entre os serviços. Porém somente o nginx poderia ser acessado por meio do docker host. Ao fazer isso um problema surge, o docker não possui a função que aguarda um container está totalmente no ar antes de subir outro, e o serviço do node só poderia estar no ar depois que o mysql estivesse configurado e rodando. Para tanto se fez necessário o uso do Dockerize, um serviço que possibilita subir o container do node somente quando o mysql já estivesse pronto!


# Nodejs with Nginx as Reverse Proxy

Um projeto simples de aplicação do conceito de proxy reverso utilizando uma api node, com banco de dados mysql e um 
webserver nginx. Aplicação em containers com docker-compose e dockerize.

# Api

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
