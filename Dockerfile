# ===== 1. Use lightweight Node.js base image =====
FROM node:20-alpine

# ===== 2. Set working directory =====
WORKDIR /app

# ===== 3. Copy package files and install dependencies =====
COPY package*.json ./
RUN npm install --production

# ===== 4. Copy the rest of the app =====
COPY . .

# ===== 5. Expose port 3000 =====
EXPOSE 3000

# ===== 6. Run the backend (which also serves the frontend) =====
CMD ["node", "server.js"]

