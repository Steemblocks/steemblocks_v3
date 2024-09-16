# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:stable-alpine

# Copy the built React app from the build stage to Nginx public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that Nginx will run on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
