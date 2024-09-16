# Example Dockerfile for a React app
FROM node:16-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen_lockfile

# Copy local code to the container
COPY . .

# Build the project
RUN yarn build

# Install `serve` to serve the app on port 3000
RUN yarn global add serve

# Command to run the serve
CMD ["serve", "-s", "build", "-l", "3000"]
