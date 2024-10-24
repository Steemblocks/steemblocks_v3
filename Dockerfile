# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Install Yarn globally
RUN npm install -g yarn

# Copy package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application files
COPY . .

# Build the React app for production
RUN yarn build

# Stage 2: Serve the app using Nginx
FROM nginx:stable-alpine

# Copy the built React app from the build stage to Nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy the custom Nginx configuration file to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port that Nginx will listen on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
