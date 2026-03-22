// K8S STEP 1 — Kubernetes Cluster Setup
// Tumhe kya karna hai:

// Cluster choose karo:

// Local: Minikube / Kind

// Cloud: AWS EKS, GCP GKE, Azure AKS

// Install kubectl (Kubernetes CLI) on local/CI server:

// # Linux
// curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
// chmod +x kubectl
// sudo mv kubectl /usr/local/bin/
// kubectl version --client


// Cluster verify karo:

// kubectl get nodes


// Agar nodes list ho rahe hain → cluster ready hai





// K8S STEP 2 — Docker Image Push to Registry

// Kubernetes cluster me container deploy karne ke liye image accessible hona chahiye, matlab Docker registry me push karna mandatory.

// Step 2.1 — Tag Docker Image
// docker tag mern-backend:${BUILD_NUMBER} username/mern-backend:${BUILD_NUMBER}


// username/mern-backend → Docker Hub / private registry repo

// ${BUILD_NUMBER} → unique Jenkins build number

// Step 2.2 — Push Image
// docker push username/mern-backend:${BUILD_NUMBER}


// Image ab registry me available hai → Kubernetes cluster pull kar sakta hai

// 💡 Note:

// Jenkins pipeline me ye stage Push Docker Image already configure kar sakte ho

// Kubernetes deployment ab image ko registry se pull karke pods me run karega










// Abhi humne sirf Docker image build aur registry me push karna setup kiya hai.

// Jenkins pipeline me abhi tak:

// CI stages → Checkout, Install, Lint, Test

// Docker build stage → image create

// Optional push stage → image registry me push

// 💡 Important:

// Ye sirf image ready karne ka step hai

// Kubernetes me deploy karne ke liye ab image ko cluster ke pods me run karna hoga → next step me karenge













// K8S STEP 3 — Kubernetes Deployment YAML Create Karna

// Ab hum deployment YAML banayenge jo Kubernetes ko batayega kaunse image kaunsa pod run karega.

// Step 3.1 — Create deployment.yaml
// apiVersion: apps/v1
// kind: Deployment
// metadata:
//   name: mern-backend-deployment
// spec:
//   replicas: 3
//   selector:
//     matchLabels:
//       app: mern-backend
//   template:
//     metadata:
//       labels:
//         app: mern-backend
//     spec:
//       containers:
//       - name: mern-backend
//         image: username/mern-backend:BUILD_NUMBER
//         ports:
//         - containerPort: 5000


// replicas: 3 → 3 pods run honge → load distribute

// image: → Jenkins build number ke saath tag image use karna




// Jenkins pipeline me kubectl apply -f deployment.yaml run karenge → automatic cluster me deploy

// Ye stage pipeline me CD ka part banega




// Bhai, abhi tak humne Kubernetes ke liye major setup ka kaam kar liya hai ✅

// Ab tak kya complete hua:

// Cluster ready → nodes verify ho gaye

// Docker image registry me push → cluster pull ke liye available

// Deployment + Service YAML create kiye → pods aur load balancer define

// 🔹 Abhi baki steps:

// Jenkinsfile me Kubernetes deployment stage add karna → ye automate karega:

// kubectl apply -f deployment.yaml

// New pods start / old pods replace

// Optional: Health check / rollout verification / notifications

// 💡 Summary:

// Kubernetes ka manual setup + deployment YAML ready

// Pipeline me automation stage add karna → final step

// Agar chaho, main step-by-step Jenkinsfile me K8S deployment stage add karna dikha doon.



// K8S STEP 4 — Jenkinsfile me Kubernetes Deployment Stage Add Karna

// Ab hum Jenkinsfile me CD stage add karenge jo automatically cluster me deploy karega.

// Step 4.1 — Example Deployment Stage
// stage('Deploy to Kubernetes') {
//   steps {
//     sshagent(['target-server-ssh']) { // optional if using remote server with kubectl
//       sh """
//         kubectl set image deployment/mern-backend-deployment \
//         mern-backend=username/mern-backend:${BUILD_NUMBER} --record
//         kubectl rollout status deployment/mern-backend-deployment
//       """
//     }
//   }
// }

// Explanation

// kubectl set image → deployment ka container image update karta hai

// --record → changes track karta hai → easy rollback

// kubectl rollout status → verify karta hai ki pods successfully updated ho gaye

// Jenkins pipeline → fully automated → code push → CI → Docker build → push → K8S deploy

// 💡 Optional:

// Agar cluster directly Jenkins server pe accessible hai → sshagent step optional

// Notifications / health check stage bhi add kar sakte ho




// Tumhara Docker build stage pipeline me rehna chahiye (image build ke liye)

// Lekin CD ke liye ab hum Docker run stage replace nahi kar rahe

// Ab Docker image registry me push karne ke baad → Kubernetes stage run karega

// 🔹 Recommended Flow

// CI Stages

// Checkout → Dependencies → Lint → Test

// Build Docker image → ${BUILD_NUMBER} tag ke saath

// Push Docker image → registry

// CD Stage

// Deploy to Kubernetes → kubectl set image ...

// kubectl rollout status ... → verify deployment



// Flow Simplified
// CI (Jenkins):
//   - Checkout
//   - npm ci
//   - Lint
//   - Unit test
//   - Docker build
//   - Push Docker image to registry

// CD (Jenkins):
//   - Pull latest image from registry
//   - Deploy to Kubernetes cluster
//   - Rollout status check
//   - Notifications




// FINAL STEP — Jenkinsfile Integration for CI + CD (Docker + Kubernetes)

// Ab hum ek complete Jenkinsfile banayenge jisme:

// CI Stages: Checkout, Dependencies, Lint, Test, Docker build & push

// CD Stage: Kubernetes deployment + rollout verification

// Step 1 — Create / Update Jenkinsfile in Project Root
// pipeline {
//   agent any
//   environment {
//     DOCKER_REGISTRY = 'username/mern-backend'
//     K8S_DEPLOYMENT = 'mern-backend-deployment'
//     BUILD_TAG = "${BUILD_NUMBER}"
//   }
//   stages {
//     stage('Checkout') {
//       steps { checkout scm }
//     }

//     stage('Install Dependencies') {
//       steps { sh 'npm ci' }
//     }

//     stage('Lint') {
//       steps { sh 'npx eslint .' }
//     }

//     stage('Unit Test') {
//       steps { sh 'npm test' }
//     }

//     stage('Build Docker Image') {
//       steps { sh "docker build -t ${DOCKER_REGISTRY}:${BUILD_TAG} ." }
//     }

//     stage('Push Docker Image') {
//       steps {
//         sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD"
//         sh "docker push ${DOCKER_REGISTRY}:${BUILD_TAG}"
//       }
//     }

//     stage('Deploy to Kubernetes') {
//       steps {
//         sshagent(['target-server-ssh']) {
//           sh """
//             kubectl set image deployment/${K8S_DEPLOYMENT} \
//             mern-backend=${DOCKER_REGISTRY}:${BUILD_TAG} --record
//             kubectl rollout status deployment/${K8S_DEPLOYMENT}
//           """
//         }
//       }
//     }
//   }

//   post {
//     success {
//       echo 'CI/CD Pipeline Completed Successfully ✅'
//     }
//     failure {
//       echo 'Pipeline Failed ❌'
//       // Optional: Send email/slack notification
//     }
//   }
// }

// Explanation

// Environment Variables → easy reference for image, deployment, build tag

// CI Stages → code checkout → dependencies → lint → test → Docker image

// Docker Push Stage → image registry me push

// CD Stage (K8S) → deployment update → rollout check

// Post Block → success/failure notifications

// 💡 Result:

// Tumhara MERN backend fully automated CI/CD pipeline ready hai

// Code push → Jenkins → Docker build → Registry → K8S deploy → sab automatic




// CI/CD Pipeline Flow (Docker + Jenkins + Kubernetes)
// ┌───────────────────────┐
// │   Developer Commit     │
// └──────────┬────────────┘
//            │ Webhook
//            ▼
// ┌───────────────────────┐
// │      Jenkins CI        │
// ├───────────────────────┤
// │ 1. Checkout code       │
// │ 2. Install deps        │
// │ 3. Lint                │
// │ 4. Run tests           │
// │ 5. Docker build        │
// │ 6. Push to registry    │
// └──────────┬────────────┘
//            │
//            ▼
// ┌───────────────────────┐
// │       Jenkins CD       │
// ├───────────────────────┤
// │ 7. SSH into server     │
// │ 8. kubectl update      │
// │ 9. rollout status      │
// └──────────┬────────────┘
//            │
//            ▼
// ┌───────────────────────┐
// │     Kubernetes         │
// ├───────────────────────┤
// │ Pod updated with new   │
// │ Docker image           │
// │ App live               │
// └───────────────────────┘

// Short Summary

// Developer code push karta → Jenkins trigger hota

// Jenkins Docker image banata + Docker Hub/Registry push karta

// Jenkins SSH se Kubernetes server me jaa kar:

// Deployment update karta

// Rollout success check karta

// New version live ho jati 🚀