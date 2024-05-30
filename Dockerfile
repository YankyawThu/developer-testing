# Use the official Node.js 18 image.
FROM node:20

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the local code to the container image.
COPY . .

# Build the Next.js app.
RUN npm run build

# Start the Next.js app.
CMD ["npm", "start"]

# Document that the service listens on port 3000.
EXPOSE 3000
