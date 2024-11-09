# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the files to the working directory
COPY . .

# Expose port 3000 so that you can access json-server from outside the container
EXPOSE 3000

# Specify the command to run when the container starts
CMD ["npm", "start"]
