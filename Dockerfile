# Use a imagem node.js como base
FROM node:18-bullseye

# Defina o diretório de trabalho como /app
WORKDIR /app

# Copie a BD para o diretório de trabalho
COPY myJSONDatabase.json .

# Instale as dependências
RUN npm install json-server -g

# Exponha a porta 3000
EXPOSE 3000

# Defina o comando padrão a ser executado quando o contêiner for iniciado
# CMD ["json-server", "-H", "0.0.0.0", "myJSONDatabase.json"]
CMD ["json-server", "--watch", "myJSONDatabase.json", "--port", "3000", "--host", "0.0.0.0"]