# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Run Prisma migrations and generate the Prisma client
RUN npx prisma migrate dev --name init && \
    npx prisma generate

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
