// Code push (Git)
//        ↓
// CI Pipeline (Jenkins)
// - Checkout
// - npm ci
// - Lint
// - Unit Test
// - Docker Build
//        ↓
// CD Pipeline (Jenkins)
// - Connect to target server
// - Stop old container
// - Pull/run new Docker image
// - Verify deployment



// CD (Continuous Deployment) Me Ab Kya-Kya Steps Honge
// 1️⃣ Server Setup (Target Machine)

// Jahan app deploy hoga (AWS EC2 / VPS / On-prem / Local):

// Docker install

// Jenkins se server connect ho sake (SSH)

// 2️⃣ Jenkins ko Deployment Server se Connect

// SSH key generate

// Public key server me add

// Jenkins me SSH credentials add

// Isse Jenkins remote server pe command chala sakega.

// 3️⃣ Build ke baad Server pe Deploy Script chale

// Webhook ke through Jenkins:

// Image build kare

// Remote server pe:

// docker pull / docker build
// docker stop old container
// docker run latest container

// 4️⃣ Docker Image ko Registry me Push

// Taaki deployment server image download kar sake:

// Options:

// Docker Hub

// GitHub Container Registry

// AWS ECR

// Self-hosted registry

// Process:

// Jenkins image build

// Jenkins image push

// Deployment server pull

// 5️⃣ Auto Restart / Auto Cleanup

// Deployment ke dauran:

// Old containers stop

// Old dangling images prune

// New container launch

// 6️⃣ (Optional) Environment Management

// .env files

// Secrets safe

// Development vs Production configs

// 7️⃣ Deployment Confirmation

// Deployment ke baad:

// Health check run

// If OK → Success

// If fail → Rollback

// 🔥 End Result
// git push
// ↓
// Jenkins build
// ↓
// Docker image push
// ↓
// Deployment server pulls new image
// ↓
// Container restart
// ↓
// App deployed automatically


// Aap batao:

// ➡️ AWS EC2 pe deploy karna chahte ho
// ya
// ➡️ Local machine ko hi deployment server banana chahte ho

// Us hisaab se next step start karte hain.








// CD STEP 1 — Target Server Setup

// Pehla kaam: jahaan backend deploy karna hai wahan server ready karna.

// Tumhe kya karna hai:

// Server choose karo

// Local machine, AWS EC2, VPS, ya koi remote Linux server

// Install Docker

// Backend container ke liye Docker chahiye

//Ye commands Jenkins me nahi, manually target server pe run karni hain taaki server deploy ready ho jaye

// # Linux example
// sudo apt update
// sudo apt install docker.io -y
// docker --version


// Optional: Docker Compose (agar multiple containers run karne hain)

// Check

// docker ps


// Ye ensure karega ki server ready hai Docker containers run karne ke liye





// CD STEP 2 — Jenkins se Target Server Connect Karna

// Ab hum Jenkins ko configure karenge taaki wo remote server se connect karke deployment commands run kar sake.

// Step 2.1 — SSH Key Generate

// Jenkins server pe SSH key generate karo:

// ssh-keygen -t rsa -b 4096 -C "jenkins@ci-server"


// Default path press karo → ~/.ssh/id_rsa

// Passphrase optional

// Ye generate karega:

// id_rsa → private key (Jenkins me use hoga)

// id_rsa.pub → public key (target server me add karenge)

// Step 2.2 — Public Key Add to Target Server

// Target server pe login karo

// Jenkins public key ko authorized_keys me add karo:

// mkdir -p ~/.ssh
// cat id_rsa.pub >> ~/.ssh/authorized_keys
// chmod 600 ~/.ssh/authorized_keys

// ✅ Purpose

// Jenkins ab SSH ke through password-less login kar sakta hai

// Ye secure aur automated deployment ke liye mandatory hai




// D STEP 3 — Jenkins Credentials Configure Karna

// Ab hum Jenkins me SSH credentials add karenge taaki pipeline target server se connect kar sake.

// Step 3.1 — Jenkins Dashboard

// Jenkins → Manage Jenkins → Credentials

// Domain: (global) → Add Credentials

// Step 3.2 — Add SSH Key

// Kind: SSH Username with private key

// Username: server ka user (jaise ubuntu)

// Private Key:

// Option 1: Enter directly → paste id_rsa content

// Option 2: From file → upload id_rsa file

// ID / Description: Give a name → target-server-ssh

// ✅ Purpose

// Pipeline me securely SSH login possible

// Password prompt nahi aayega

// Fully automated deployment




// CD STEP 4 — Jenkinsfile me Deployment Stage Add Karna

// Ab hum Jenkinsfile me ek stage add karenge jo remote server pe Docker image pull/run karega.

// Step 4.1 — Example Deployment Stage (Declarative Pipeline)
// stage('Deploy to Server') {
//   steps {
//     sshagent(['target-server-ssh']) { // Jenkins me jo credential ID diya tha
//       sh '''
//         ssh -o StrictHostKeyChecking=no ubuntu@server-ip "
//           docker pull username/mern-backend:${BUILD_NUMBER} &&
//           docker stop mern-backend || true &&
//           docker rm mern-backend || true &&
//           docker run -d -p 5000:5000 --name mern-backend username/mern-backend:${BUILD_NUMBER}
//         "
//       '''
//     }
//   }
// }

// Explanation

// sshagent(['target-server-ssh']) → Jenkins credential use karta hai

// docker pull → latest build image pull karta hai

// docker stop / docker rm → old container ko stop & remove karta hai

// docker run → new container start karta hai, backend live

// 💡 Benefit:

// Fully automated deployment → developer ko manually login karne ki zarurat nahi

// Zero downtime + versioned image deployment




// CD STEP 5 — Optional: Post Deployment Verification & Notifications

// Ab hum deployment ke baad verification aur notifications add karenge taaki team ko automatically pata chal jaye ki deployment successful hai ya fail hua.

// Step 5.1 — Verify Deployment

// Simple curl command se backend API check karo:

// stage('Verify Deployment') {
//   steps {
//     sshagent(['target-server-ssh']) {
//       sh '''
//         ssh -o StrictHostKeyChecking=no ubuntu@server-ip "
//           curl -f http://localhost:5000/health || exit 1
//         "
//       '''
//     }
//   }
// }


// Agar curl fail hua → Jenkins build fail ho jayega

// Note: /health endpoint tumhare backend me create karna optional hai → simple response return kare (e.g., {status: "ok"})

// Step 5.2 — Notifications

// Slack / Email / MS Teams me notification bhejne ke liye Jenkins me plugin configure karo

// Pipeline me post block use karo:

// post {
//   success {
//     echo 'Deployment Successful ✅'
//   }
//   failure {
//     echo 'Deployment Failed ❌'
//     // Send email / slack notification here
//   }
// }


// 💡 Benefit:

// Team ko automatic feedback → quick response for failures

// Production deployment confidence increase








// CD STEP 6 — Final Pipeline Flow

// Ab humari production-ready CI/CD pipeline complete ho gayi hai.

// Pipeline Flow Summary

// CI Pipeline (Continuous Integration)

// Checkout code

// Install dependencies (npm ci)

// Lint / code quality check (npx eslint .)

// Unit tests (npm test)

// Docker image build (mern-backend:${BUILD_NUMBER})

// Optional: Push image to registry

// CD Pipeline (Continuous Deployment)

// Jenkins connects to target server via SSH

// Pull latest Docker image

// Stop & remove old container

// Run new container

// Verify deployment (curl / health check)

// Notifications to team (success/failure)

// 💡 Key Benefits

// Fully automated CI + CD

// Versioned Docker images → easy rollback

// Zero manual intervention → production-ready

// High confidence deployment → test + lint + verification included

// ✅ Ab tumhare MERN backend login system ke liye complete CI/CD pipeline ready hai.

// Agar chaho, main tumhare liye final Jenkinsfile ka fully integrated version bana ke step-by-step explain kar du,
//  jisme CI + CD dono stages included ho.