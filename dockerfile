# 1️⃣ Use official Node image
FROM node:22.17.0

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4️⃣ Copy all project files
COPY . .

# 5️⃣ Expose the port your app runs on (example: 5000)
EXPOSE 5000

# 6️⃣ Command to start the app
CMD ["npm", "start"]
