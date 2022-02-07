FROM node:12.22.7 AS build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build-stage /app/build/ /usr/share/nginx/html

# Expose port 8087
EXPOSE 8087