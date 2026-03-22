// Production-Level CI Pipeline Steps (Step-by-Step)
// 1️⃣ Version Control Setup

// Tumhara backend code GitHub / GitLab / Bitbucket me ho

// Branching strategy clear ho (dev, staging, main/master)

// Jenkinsfile repository me commit hoga

// 2️⃣ Jenkins Setup

// Jenkins install ho aur accessible ho

// Required plugins install ho:

// Git plugin

// NodeJS plugin

// Docker plugin (optional, agar Docker build karna hai)

// Pipeline plugin (mandatory for Jenkinsfile pipelines)

// 3️⃣ Jenkinsfile Creation

// Backend repo me Jenkinsfile create karo (root folder)

// Pipeline stages define karna:

// Checkout → Git repository se latest code

// Install dependencies → npm ci

// Lint / Code Quality → npm run lint

// Unit Tests → npm test (Jest / Mocha / Chai)

// Build Docker Image → docker build (optional)

// Archive artifacts / test reports

// 4️⃣ Build Triggers

// Jenkinsfile me ya Jenkins job me specify:

// Git push trigger

// Merge request / Pull request trigger

// Scheduled builds (optional)

// 5️⃣ Notifications

// Slack / Email / MS Teams notification on:

// Build success

// Build failure

// Test failures

// 6️⃣ Optional: Docker + Deployment

// Build ke baad nayi Docker image push karo registry me

// Deployment ke liye:

// Test server / staging environment → auto deploy

// Production → manual approval / Jenkins pipeline stage

// 7️⃣ Test Reports & Artifacts

// Unit test reports → Jenkins me publish (JUnit format)

// Code coverage reports → Jenkins me show

// Optional: SonarQube integration for static code analysis

// 8️⃣ Summary Flow
// Git Push / PR
// ↓
// Jenkins Pipeline triggers
// ↓
// Checkout → npm ci → lint → test → Docker build → Archive artifacts
// ↓
// Notifications
// ↓
// (Optional) Deploy to staging/production









// STEP 1 — Jenkinsfile create karna
// Tumhe kya karna hai:

// Apne backend repo ke root folder me ek file banao:

// Jenkinsfile


// Filhaal ye empty hi rehne do, next step me hum isme stages likhenge.



// STEP 2 — Checkout Stage

// Ab hum Jenkinsfile me Git repository se code pull karne ka stage add karenge.

// Karne wale steps:

// Jenkinsfile me likho (Declarative Pipeline style):

// pipeline {
//   agent any
//   stages {
//     stage('Checkout') {
//       steps {
//         checkout scm
//       }
//     }
//   }
// }


// checkout scm → automatically current repo ka latest code pull karega








// STEP 3 — Install Dependencies Stage

// Ab hum Node dependencies install karenge (npm ci), taaki har build clean ho.

// Jenkinsfile me add karo:
// pipeline {
//   agent any
//   stages {
//     stage('Checkout') {
//       steps {
//         checkout scm
//       }
//     }
//     stage('Install Dependencies') {
//       steps {
//         sh 'npm ci'
//       }
//     }
//   }
// }


// dependencies → production ke liye required packages (Express, JWT, bcrypt, etc.)

// devDependencies → development/testing ke liye required (nodemon, jest)

// 2️⃣ npm ci ka kaam

// Clean install karta hai exact versions jo package-lock.json me locked hain

// Purane node_modules ko remove karke fresh install

// CI/CD pipelines me npm ci recommended hai instead of npm install












// STEP 4 — Lint / Code Quality Stage

// Ab hum pipeline me code quality check add karenge, jaise ESLint run karna.

// Jenkinsfile me add karo:
// pipeline {
//   agent any
//   stages {
//     stage('Checkout') {
//       steps { checkout scm }
//     }
//     stage('Install Dependencies') {
//       steps { sh 'npm ci' }
//     }
//     stage('Lint') {
//       steps {
//         sh 'npx eslint .'
//       }
//     }
//   }
// }


// Note:

// npx eslint . → poore backend folder me lint check karega



                    // Lint / Code Quality Stage ka matlab
                    // 1️⃣ Lint kya hai?

                    // Lint ek tool hai jo tumhare code ko analyze karta hai aur batata hai:

                    // Syntax errors

                    // Code style issues

                    // Best practices violations

                    // Potential bugs

                    // Basically, “code ko clean aur standard banane” ka tool hai.

                    // 2️⃣ Example

                    // Tumhare backend me agar koi line hai:

                    // const secret = "mySecret"
                    // console.log(secret)


                    // ESLint → warning de sakta hai:

                    // Missing semicolon

                    // console.log production me nahi hona chahiye

                    // Tum build fail kar sakte ho agar rules strict hain

                    // 3️⃣ ESLint ka role in CI

                    // Jenkins me Lint stage run hoti hai

                    // Agar developer ne koi style ya syntax mistake ki → build fail

                    // Team me code quality maintain hoti hai

                    // Automatic feedback → errors jaldi fix hote hain








// STEP 5 — Unit Test Stage

// Ab hum pipeline me unit tests run karenge, jaise Jest ya Mocha tests tumhare login system ke liye.

// Jenkinsfile me add karo:
// pipeline {
//   agent any
//   stages {
//     stage('Checkout') { steps { checkout scm } }
//     stage('Install Dependencies') { steps { sh 'npm ci' } }
//     stage('Lint') { steps { sh 'npx eslint .' } }
//     stage('Test') {
//       steps {
//         sh 'npm test'
//       }
//     }
//   }
// }


// Note:

// npm test → package.json me defined test script run karega

// Windows ke liye: bat 'npm test'

// ✅ Purpose of Test Stage

// Backend functionality verify hoti hai

// Login logic, JWT, bcrypt, API responses

// Build fail hota agar koi test fail ho jaye

// Automatic feedback developer ko milta

// CI pipeline me automated verification → production-ready build











// STEP 6 — Docker Build Stage (Optional, Production Ready)

// Ab hum pipeline me Docker image build add karenge, taki backend containerized ho jaye.

// Jenkinsfile me add karo:
// pipeline {
//   agent any
//   stages {
//     stage('Checkout') { steps { checkout scm } }
//     stage('Install Dependencies') { steps { sh 'npm ci' } }
//     stage('Lint') { steps { sh 'npx eslint .' } }
//     stage('Test') { steps { sh 'npm test' } }
//     stage('Build Docker Image') {
//       steps {
//         sh 'docker build -t mern-backend:${BUILD_NUMBER} .'
//       }
//     }
//   }
// }


// Notes:

// ${BUILD_NUMBER} → Jenkins ka unique build number, image version ke liye

// Agar Windows: bat 'docker build -t mern-backend:%BUILD_NUMBER% .'

// ✅ Purpose

// Containerized backend → same environment on any server

// Versioned image → har build ka alag tag (BUILD_NUMBER)

// Ready for deployment → Docker registry me push ya Kubernetes me deploy


//Jenkins automatically har build ke liye unique build number generate karta hai

//Ye variable ${BUILD_NUMBER} Jenkins pipeline me available hota hai



// Jenkins Build Number = Version Control for CI Builds

// Har build ka unique number

// Jenkins automatically increment karta hai (1, 2, 3…)

// Docker image tag me use hota hai → mern-backend:1, mern-backend:2, etc.

// Tracking & Rollback

// Agar latest build crash ho gaya → previous build ka Docker image use karke rollback possible

// Easy to know: kaunsa build deployed hai

// Automation & Reproducibility

// Har build exact same code + dependencies ke saath generate hota hai

// Team members easily reference kar sakte hain


 // DOCKER STAGE LIKHNE K LIE PEHLE DOCKER CONFIGURE KRNA PDEGA SYSTEM M

//     STEP 1 — Docker Install
// Tumhe kya karna hai:

// Apne local PC (Windows/Linux/Mac) pe Docker install karo

// Windows: Docker Desktop → https://www.docker.com/products/docker-desktop

// Linux:

// sudo apt update
// sudo apt install docker.io -y


// Mac: Docker Desktop for Mac

// Install ke baad check karo:

// docker --version


// Agar version show ho raha hai → install successful





// STEP 2 — Jenkins ko Docker Access Dena (Local System)

// Agar tum local system pe Jenkins + Docker dono use kar rahe ho, to Jenkins ko Docker commands run karne ki permission deni padegi.

// Step for Windows (MSI Jenkins + Docker Desktop)

// Open services.msc

// Find Jenkins service → Right-click → Properties

// Log On tab me jao

// Select This account → apna Windows user choose karo (jo Docker Desktop access kar sakta hai)

// Password enter karo → Apply → OK

// Jenkins service Restart karo

// Step for Linux

// Jenkins user ko docker group me add karo:

// sudo usermod -aG docker jenkins
// sudo systemctl restart jenkins


// Ye ensure karega ki Jenkins user docker commands execute kar sake

// Step 2.1 — Test Docker Access

// Jenkins me Freestyle job banao

// Build step me add karo:

// docker info
// docker ps


// Run build → agar Jenkins successfully Docker info / containers show kar raha hai → setup sahi hai




// Optional: Docker Pipeline Plugin (Recommended)

// Ye step Jenkins me Docker commands aur pipelines easy banane ke liye hai.

// Step 3.1 — Plugin Install

// Jenkins dashboard → Manage Jenkins → Manage Plugins

// Available tab → search karo:

// Docker Pipeline


// Check mark → Install without restart

// Step 3.2 — Verify

// Plugin install hone ke baad:

// Jenkinsfile me docker.build() aur docker.image() commands use kar sakte ho

// Note: Ye mandatory nahi hai, lekin production-level pipeline me easy aur safe hota hai.





// Test Docker Commands in Jenkins

// Ab ensure karte hain ki Jenkins se Docker commands properly run ho rahe hain.

// Step 4.1 — Freestyle Job Test

// Jenkins dashboard → New Item → Freestyle project

// Name: Docker-Test

// Build → Add build step → Execute shell (Linux/Mac) ya Execute Windows batch command (Windows)

// Commands likho:

// docker info
// docker ps


// Save → Build Now

// Console output me check karo:

// Docker version

// Current containers list

// Agar sab sahi dikh raha hai → Jenkins properly Docker access kar raha hai






// Dockerfile in Backend Project

// Ab tumhare login backend project me Docker image build karne ke liye Dockerfile create karna hai.

// Step 5.1 — Create Dockerfile

// Backend project root folder me file banao:

// Dockerfile


// Content:

// FROM node:18

// WORKDIR /app

// COPY package*.json ./
// RUN npm ci

// COPY . .

// EXPOSE 5000

// CMD ["npm", "start"]


// Notes:

// WORKDIR /app → container ke andar working directory

// COPY package*.json ./ + RUN npm ci → clean dependencies install

// EXPOSE 5000 → backend port

// CMD ["npm", "start"] → container start command

// Step 5.2 — Optional: .dockerignore

// Same folder me .dockerignore banao:

// node_modules
// .git
// .gitignore
// README.md


// Ye image ko lightweight banata hai





// STEP 6 — Test Docker Build Locally

// Ab check karte hain ki Dockerfile sahi se image build kar raha hai.

// Step 6.1 — Open terminal in project root

// Run command:

// docker build -t mern-backend:test .


// -t mern-backend:test → temporary tag for testing

// . → current directory (Dockerfile location)

// Step 6.2 — Run Container
// docker run -d -p 5000:5000 --name mern-backend-test mern-backend:test


// -d → detached mode

// -p 5000:5000 → host port 5000 mapped to container port 5000

// --name mern-backend-test → container ka name

// Step 6.3 — Test

// Browser / Postman me:

// http://localhost:5000


// Agar backend respond kar raha hai → Dockerfile sahi hai






// STEP 7 — Jenkins Pipeline me Docker Build Stage Add Karna

// Ab hum Jenkinsfile me Docker image build stage add karenge, taaki har build ke saath Docker image automatically ban jaye.

// Step 7.1 — Jenkinsfile Update
// pipeline {
//   agent any
//   stages {
//     stage('Checkout') { steps { checkout scm } }
//     stage('Install Dependencies') { steps { sh 'npm ci' } }
//     stage('Lint') { steps { sh 'npx eslint .' } }
//     stage('Test') { steps { sh 'npm test' } }
//     stage('Build Docker Image') {
//       steps {
//         sh 'docker build -t mern-backend:${BUILD_NUMBER} .'
//       }
//     }
//   }
// }


// Notes:

// ${BUILD_NUMBER} → Jenkins automatically unique build number assign karta hai

// Windows: bat 'docker build -t mern-backend:%BUILD_NUMBER% .'

// ✅ Purpose

// Automated Docker image build per CI run

// Versioned image → rollback possible

// Production-ready artifact

           


//ACHIVED TILL NOW


// Ab tak tumhari CI pipeline fully ready hai:

// Git repo se code pull hota hai

// Dependencies clean install hoti hain (npm ci)

// Lint / code quality check hota hai (npx eslint .)

// Unit tests run hote hain (npm test)

// Docker image build hoti hai (mern-backend:${BUILD_NUMBER})

// Optional: Docker image registry me push

// 💡 Summary:

// Ye pura Continuous Integration (CI) ka flow cover karta hai

// Matlab har code push ke baad automated build, test aur Docker image creation ho raha hai




    //STAGES OF CI PIPELINE
// CI Pipeline Stages — Points Me

// Checkout

// Git repository se latest code pull

// Install Dependencies

// npm ci → clean dependencies install

// Lint / Code Quality

// npx eslint . → syntax errors, style issues, best practices check

// Unit Test

// npm test → backend functionality verify

// Build Docker Image

// docker build -t mern-backend:${BUILD_NUMBER} .

// Versioned Docker image generate