# Usa uma imagem do Node.js
FROM node:22.13.1

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Expõe a porta padrão do Angular (4200)
EXPOSE 4200

# Comando para iniciar o servidor de desenvolvimento
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
