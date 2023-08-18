# App @ http://localhost:3001/

# backend services: redis & mongodb
docker compose -f ./todo-backend/docker-compose.dev.yml up -d

# frontend build
docker build ./todo-frontend -t todo-frontend

# frontend up
docker run --rm -d --name todo-frontend-app -p 3001:80 todo-frontend

# backend app
cd todo-backend
npm run dev


