# Base image
FROM node:16-alpine3.15

# Make folder to put files in
RUN mkdir -p /usr/src/app/storefront

# Set working directory so that all subsequent commands run in this folder
WORKDIR /usr/src/app/storefront

# Copy package .json and install dependencies
COPY package*.json ./
RUN npm install

# Copy app
COPY . .

# Expose port to access server
EXPOSE 4000

# Command to run app
CMD [ "npm", "start"]