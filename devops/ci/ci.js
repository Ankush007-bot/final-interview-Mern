//A CI/CD pipeline is an automated process that helps developers build, test, and deploy software continuously and 
// reliably.

// CI (Continuous Integration)

// Developers push code frequently

// Code is automatically:

// Built

// Tested

// Checked for errors

// Ensures bugs are caught early

// CD (Continuous Delivery / Continuous Deployment)

// After CI succeeds, the code is:

// Delivery: Automatically prepared for release (manual approval required)

// Deployment: Automatically deployed to production with no manual steps









// STEPS TO CREATE CI/CD PIPELINE
// A MERN backend (Node.js + Express + MongoDB) login system ke liye CI/CD pipeline scratch se banane ke steps
//  (most common approach: GitHub + Docker + Jenkins/GitHub Actions + Cloud server):


// 1️⃣ Setup Version Control

// Code ko Git repository me daalo (GitHub/GitLab/Bitbucket).

// Branching system:

// main / master → production

// dev → development


// STEP 2 — Jenkins Setup for CI
// 1️⃣ Install Jenkins (server par)

// Aapko commands kaha chalani hain?

// Agar VPS/Cloud server (AWS, DO, etc.) par ho:
// Putty / MobaXterm / VSCode SSH se server login → terminal me commands run.

// Agar local machine par Jenkins install kiya hai:
// Local OS ka terminal / PowerShell / CMD me chalana hoga (Linux/Mac recommended).

// 1️⃣ AWS SERVER (EC2 / VPS)
// Commands kahaan chalengi?

// SSH terminal me

// Example:

// Agar tum mac/linux use kar rahe ho:

// ssh ubuntu@YOUR_SERVER_IP


// Windows ho to:

// PuTTY / MobaXterm / VSCode SSH

// Connect to server

// Fir terminal me commands chalao:

// sudo apt update
// sudo apt install openjdk-17-jdk -y
// ...

// Jenkins access:

// Browser me:

// http://SERVER_IP:8080

// Agar server fresh hai:

// sudo apt update
// sudo apt install openjdk-17-jdk -y


// Then:

// curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee \
//   /usr/share/keyrings/jenkins-keyring.asc > /dev/null

// echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
//  https://pkg.jenkins.io/debian-stable binary/" | \
//   sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null

// sudo apt update
// sudo apt install jenkins -y


// Jenkins start:

// sudo systemctl enable jenkins
// sudo systemctl start jenkins


// Then browser open:

// http://server-ip:8080

//FOR WINDOWS

// agar tum Windows me Jenkins MSI installer download karke install kar chuke ho, to Windows me koi commands likhne ki NEED nahi hai.

// Windows (MSI Install) → Simple rule

// ✔️ Just install → next → next
// ✔️ Jenkins service automatically start ho jati hai
// ✔️ No terminal commands required

// Jenkins access kaise karoge?

// Browser me:

// http://localhost:8080


// Pehli baar login ke liye password is file me hoga:

// C:\Program Files\Jenkins\secrets\initialAdminPassword


// Usi password ko copy karke setup complete kar dena.



//         STEP 2.2 — Jenkins me Git + Node.js setup

// Windows me Jenkins install ho gaya hai, ab hume:

// Git plugin install karna hai

// Jenkins ko Node.js chalane layak banana hai

// Taki CI pipeline me npm install, npm test jaisi commands chal sake

// Chalo step by step:

// 1️⃣ Jenkins Dashboard kholna

// Browser me jao:

// http://localhost:8080


// Login ho jao.

// 2️⃣ Git Plugin Install

// Left side → Manage Jenkins

// Plugins

// Available Plugins tab me jao

// Search karo:

// Git

// Install kar do

// Restart not required (optional)

// 3️⃣ NodeJS Plugin Install

// Same place:

// Plugins → Available

// Search:

// NodeJS

// Install

// This allows Jenkins to download Node versions automatically.

// 4️⃣ NodeJS Configure Karna

// Jenkins Dashboard → Manage Jenkins

// Global Tool Configuration

// Scroll down to:

// NodeJS installations

// Add NodeJS

// Fill:

// Name: node18
// Install automatically: ✔️
// Version: 18.x (Latest LTS)


// Save.

// 5️⃣ Verify Node Works in Jenkins Jobs

// Later jab hum job banayenge, wahaan:

// Build Environment me:

// Provide Node & npm environment check karna

// node18 select karna

// Isse Jenkins me npm and node commands chal payengi.

// 👍 Step 2.2 Done
// Tumhari side se confirm message chahiye:

// ✔️ Git plugin installed
// ✔️ NodeJS plugin installed
// ✔️ node18 configure ho gaya


// STEP 2.3 — Part A

// ❗ Abhi sirf Jenkins me new job banana hai
// Baaki kuch nahi.

// Karna kya hai:

// Jenkins Dashboard open karo

// New Item click karo

// Name likho:

// mern-backend-ci


// Freestyle project select karo

// OK click

// Ye step kar lo.
// Jab ho jaye, sirf reply karo:


// STEP 2.3 — Part B

// Ab job ke andar Git repo set karna hai.

// Karne wale steps:

// Job open karo

// Left me Configure click

// Scroll karke Source Code Management pe jao

// Git select karo

// Apne backend repo ka URL paste karo
// Example:

// https://github.com/yourname/yourrepo.git



// STEP 2.3 — Part C

// Ab hume branch set karni hai jisse Jenkins code pull kare.

// Karna kya hai:

// Wahin Git settings me

// “Branches to build” section me jao

// Is value ko replace karo:

// */dev


// Matlab Jenkins sirf dev branch pull karega.


// STEP 2.3 — Part D

// Ab job ko Node.js environment dena hai, taaki hum npm install jaise commands run kar saken.

// Karna kya hai:

// Job settings me Build Environment section tak scroll karo

// Checkbox tick karo:

// Provide Node & npm environment


// Dropdown me select karo:

// node18


// Ye wahi Node version hai jo humne pehle configure kiya tha.


// TEP 2.3 — Part E

// Ab ek build step add karna hai taaki Jenkins npm install run kare.

// Karna kya hai:

// “Build” section me neeche scroll karo

// Add Build Step click

// Windows ho to select:

// Execute Windows batch command


// Command box me likho:

//npm install


// STEP 2.3 — Part F

// Ab job ko save karke ek test build run karna hai.

// Karna kya hai:

// Page ke bottom pe Save click karo

// Left me:

// Build Now


// click karo
// 3. Build complete hone ka wait karo
// 4. Left side “Build History” me build number pe green check mark aana chahiye
// 5. Output check karne ke liye:

// Build number click

// Console Output



// STEP 2.4 — Part A

// ❗ Is step ka goal:
// GitHub se Jenkins automatically build trigger ho jaye jab dev branch me push karo.

// Sabse pehle:

// Jenkins me webhook trigger enable karna
// Karna kya hai:

// Job open karo

// Configure click

// Scroll to section:

// Build Triggers


// Checkbox enable karo:

// GitHub hook trigger for GITScm polling


// Save.


// STEP 2.4 — Part B

// Ab hum GitHub me webhook add karenge, taaki GitHub push hote hi Jenkins ko signal mil jaye.

// Karna kya hai (GitHub repo me):

// Repo open karo

// Top menu → Settings

// Left sidebar → Webhooks

// Add webhook click

// Now fill:
// Payload URL
// http://YOUR_JENKINS_IP:8080/github-webhook/


// Example:

// Local PC:

// http://localhost:8080/github-webhook/


// AWS server:

// http://SERVER_PUBLIC_IP:8080/github-webhook/

// Content type

// Select:

// application/json

// Which events?

// Choose:

// Just the push event


// Finally:

// Add webhook



// STEP 2.4 — Part C

// Ab hum test karte hain ki webhook sahi kaam kar raha hai ya nahi.

// Karna kya hai:

// Apni dev branch me code me kuch chota sa change karo
// Jaise README.md me ek line add kar do:

// testing webhook trigger


// Commit + push:

// git add .
// git commit -m "test webhook"
// git push origin dev


// Ab Jenkins dashboard open karo

// Agar sab sahi hai to:

// Automatically Build Now trigger ho jayega

// Build history me naya build appear ho jayega

// Agar Jenkins automatically build start ho gaya




// Ab chalte hain STEP 3 — Docker Setup (Jenkins ke through), phir CD ki taraf jayenge.

// Jaise pehle, chote chote steps me.

// STEP 3 — Docker Setup

// Goal:

// Backend ka Docker image create karna

// Jenkins se build karwana

// STEP 3.1 — Part A

// Abhi hum sirf Dockerfile banayenge.

// Aapki backend project root folder me ek file banao:
// Dockerfile


// Aur isme ye content likho:

// FROM node:18

// WORKDIR /app

// COPY package*.json ./
// RUN npm install

// COPY . .

// EXPOSE 5000

// CMD ["npm", "start"]


// STEP 3.1 — Part B

// Ab same folder me ek .dockerignore file bhi banao.

// File name:
// .dockerignore

// Content:
// node_modules
// .git
// .gitignore
// README.md


// Ye kyon?

// Image halka rahe

// Extra folders docker image me copy na ho







// STEP 3.2 — Part A (Windows)

// Agar Windows + Jenkins MSI install use kar rahe ho:

// Docker Desktop install karo (agar nahi kiya)

// Docker Desktop open karke ensure karo ke running ho

// Jenkins service ko Docker access dene ke liye:

// services.msc open

// Jenkins service → right-click → Properties

// Log On tab me jao

// “This account” choose karo

// Apne Windows user ka username & password enter karo

// OK → Apply

// Jenkins service restart

// Iss se Jenkins ko Docker commands run karne ki permission mil jayegi.



// STEP 3.2 — Part B (Testing)

// CMD / PowerShell open karo aur test karo:

// docker --version


// Then Jenkins server machine ke CMD me:

// whoami


// If both work → good.


// STEP 3.3 — Jenkins job me Docker build command add karna
// STEP 3.3 — Part A

// Jenkins job open karo

// Configure me jao

// Neeche scroll karo:

// Build → Add build step → Execute Windows batch command

// Usme yeh command paste karo:

// docker build -t mern-backend .


// Ye command Jenkins ko bolegi:

// Project folder se

// Docker image mern-backend naam se build kar le

// Bas abhi sirf build, push/pull nahi.


// STEP 3.4 — Jenkins me Docker container run karwana

// Ab Jenkins se backend container automatically chalwana hai.

// STEP 3.4 — Part A

// Same place (Build section) me:

// Add build step → Execute Windows batch command

// Isme second command add karo:

// docker stop mern-backend-container || true
// docker rm mern-backend-container || true
// docker run -d -p 5000:5000 --name mern-backend-container mern-backend


// Meaning:

// Purana container ho to stop + delete

// Naya Docker container run

// Local:5000 → Container:5000




// STEP 3.5 — Save & Test Build
// STEP 3.5 — Part A

// Jenkins job me scroll down

// Save button dabao

// STEP 3.5 — Part B

// Ab manual test karte hain:

// Build Now click karo

// Agar sab set hai to:

// Console output me

// npm install chalega

// Docker image build hogi

// Container run hoga

// STEP 3.5 — Part C

// Test backend:

// Browser me jao:

// http://localhost:5000


// Agar API chal rahi hai → Docker + Jenkins working.





// ✔️ What We Have Done Till Now
// 1️⃣ Jenkins Install & Setup

// Jenkins install kiya (Windows MSI)

// Jenkins service run kara di

// Jenkins dashboard open

// Initial admin password / setup complete

// 2️⃣ New Jenkins Job (Pipeline for Backend)

// Freestyle project create kiya

// GitHub repo Jenkins me connect kiya

// Dev branch set ki:

// */dev


// GitHub webhook banaya so that:

// git push → Jenkins auto build

// Webhook test bhi safal

// 3️⃣ Docker Setup
// Backend project me:

// Dockerfile banaya

// .dockerignore banaya

// Jenkins me:

// Docker enable kiya (Jenkins ko Docker ka access diya)

// Build steps add kiye:

// 1. Docker image build
// docker build -t mern-backend .

// 2. Container deploy
// docker stop mern-backend-container || true
// docker rm mern-backend-container || true
// docker run -d -p 5000:5000 --name mern-backend-container mern-backend


// Build run karke test kiya

// Container successfully run ho gaya

// 4️⃣ Deployment Automation (Start of CD)

// Post-build action add ki:

// Build artifacts store ho sake (logs, outputs)

// 🔥 Current Status

// ✔️ CI working
// ✔️ Jenkins auto-build on push
// ✔️ Docker image ban rahi hai
// ✔️ Backend container auto-launch ho raha hai
// ✔️ CD start ho chuki hai




// Jab bhi aap naya code push karte ho, Jenkins:

// Git se latest code pull karta hai

// Docker image dobara build karta hai

// Purana container stop/remove

// Nayi image se naya container run


//git push → webhook → Jenkins build → new Docker image → new container