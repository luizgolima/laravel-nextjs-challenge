# Define a imagem base com Node.js
FROM node:latest

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração do projeto
COPY package*.json ./
COPY . .

# Instala as dependências do projeto
RUN npm ci --only=production

# Constrói a aplicação Next.js
RUN npm run build

# Expõe a porta do servidor de produção (se necessário)
# EXPOSE 3000

# Comando para iniciar o servidor de produção
CMD ["npm", "run", "dev"]
