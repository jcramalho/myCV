# Use a imagem node.js como base
FROM node:18-bullseye

# Defina o diretório de trabalho como /app
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 3027 
