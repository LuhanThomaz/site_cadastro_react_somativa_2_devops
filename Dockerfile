#Faz a selação da imagem que será utilizada como base
FROM node:lts-bookworm 
#condigura o diretório a ser utilizado
WORKDIR /app
COPY . /app
#faz a execução da instalação
RUN npm install -g npm@10.1.0
#apresenta qual a versão do npm está instalada
CMD  npm --version
