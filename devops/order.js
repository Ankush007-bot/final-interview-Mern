// 🧭 Real-World Project Deployment Flow (Correct Order)
// 🧑‍💻 1️⃣ Development Phase

// Goal: App banana aur local me run karna.
// ✅ Steps:

// Code likhna (Node.js / React / etc.)

// npm start se local testing

// Database setup (local ya Docker container me)

// 📦 2️⃣ Dockerization

// Goal: App ko ek portable container me daalna.
// ✅ Steps:

// Dockerfile likhna

// Docker image banana:

// docker build -t ankush/login-app:v1 .


// Local test karna:

// docker run -p 5000:5000 ankush/login-app:v1


// Image ko push karna Docker Hub / ECR / GHCR pe:

// docker push ankush/login-app:v1

// 🔄 3️⃣ CI/CD Pipeline Setup

// Goal: Code push hote hi automatic build, test, aur deploy ho.
// ✅ Steps:

// GitHub repository create karna

// Jenkins / GitHub Actions me CI/CD pipeline banana

// Step 1: Code pull (GitHub se)

// Step 2: Docker image build

// Step 3: Image push (Docker Hub pe)

// Step 4: Deploy command trigger (Kubernetes ya server pe)

// ☸️ 4️⃣ Kubernetes Deployment

// Goal: App ko scalable, managed environment me run karna.
// ✅ Steps:

// deployment.yaml aur service.yaml likhna

// Apply karna:

// kubectl apply -f deployment.yaml
// kubectl apply -f service.yaml


// Verify:

// kubectl get pods
// kubectl get svc

// 🌍 5️⃣ Server Deployment (Production Environment)

// Goal: App ko internet pe live karna.
// ✅ Steps:

// Cloud server setup (AWS EC2 / GCP / Render / DigitalOcean)

// Docker / Kubernetes environment install

// Jenkins pipeline se automatic deploy

// Domain connect + SSL setup

// Monitoring tools (Prometheus, Grafana, etc.)

// ⚙️ 6️⃣ Maintenance & Scaling

// Goal: App ko continuously monitor aur improve karna.
// ✅ Steps:

// Rolling updates (v2, v3, etc.)

// Auto-scaling (Horizontal Pod Autoscaler)

// Log monitoring

// Backup & restore setup

// 🔁 Summary: Order of Real-World Flow
// Step	Stage	Tools
// 1️⃣	Develop the app	Node.js / React
// 2️⃣	Containerize app	Docker
// 3️⃣	Automate build/test	Jenkins / GitHub Actions
// 4️⃣	Deploy to cluster	Kubernetes
// 5️⃣	Host on server	AWS / Render / GCP
// 6️⃣	Maintain & scale	Monitoring + Auto-Scaling







// Real-World CI/CD + Kubernetes Flow (Clear Picture)
// 🧩 Step 1–4 tak kya hota hai

// Tu ne:

// Code likha (Node.js / React)

// Docker image banayi (Dockerfile se)

// CI/CD pipeline setup ki (Jenkins / GitHub Actions)

// Kubernetes deployment files likh li (deployment.yaml, service.yaml)

// ⚙️ Ab Step 5 se pehle kya hota hai (real industry me)

// CI/CD pipeline ke andar ek “Deploy to Kubernetes Cluster” stage hoti hai 👇
// jab developer code push karta hai GitHub pe →
// pipeline automatically:

// Code pull karti hai

// git pull origin main


// Docker image build karti hai

// docker build -t ankush/login-app:v2 .


// Docker Hub pe push karti hai

// docker push ankush/login-app:v2


// Kubernetes server pe deploy karti hai

// kubectl apply -f deployment.yaml
// kubectl apply -f service.yaml


// ⚡ Ye 4th step hi “Deploy to Kubernetes Cluster” kehlata hai
// aur ye automatically hota hai — Jenkins ya GitHub Actions se.

// 🧱 Kubernetes Cluster Kahan Hota Hai?

// Woh kisi server (cloud / VM) pe hota hai:

// AWS EKS (Elastic Kubernetes Service)

// GCP GKE

// Azure AKS

// ya manually Docker Desktop / Minikube

// CI/CD pipeline usi cluster ke config (kubeconfig) ka use karti hai connect hone ke liye.