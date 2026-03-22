// 🌱 Step 1: Kubernetes kya hai (simple)

// Kubernetes = Container orchestration tool
// Matlab:

// Jab tu multiple containers (like multiple Docker containers) chalata hai, to unka scaling, load balancing, restart, update etc. automatically manage karta hai.

// Example:
// Tu ek Node.js app ko 3 containers me chalana chahta hai — manual Docker se mushkil hai,
// but Kubernetes bolta hai:

// “Main sambhal lunga — bas config likh de.” 😎





// ⚙️ Step 2: Local setup (Kubernetes install)

// Tera goal:
// 👉 Kubernetes ko apne Windows system me local environment me chalana (taaki tu easily test aur learn kar sake).

// 🪟 Option 1: Docker Desktop ke through (Recommended)

// Tu ne pehle hi Docker install kar rakha hai, to sabse easy ye raasta hai 👇

// 🧭 Step-by-step:

// Docker Desktop open kar.

// Top right corner me ⚙️ (Settings icon) pe click kar.

// Left sidebar me → Kubernetes tab pe click kar.

// Wahan “Enable Kubernetes” likha hoga —
// ✅ us checkbox ko tick kar de.

// Click Apply & Restart.

// ⏳ Ab wait kar 2–3 minutes.

// Docker Desktop background me:

// ek single-node Kubernetes cluster install karega (jisse tu local me experiment kar sake),

// aur ek kubectl command-line tool ready kar dega.

// 🔍 Verify installation

// Terminal (PowerShell / cmd / VSCode terminal) me ye commands chala:

// kubectl version --client
// kubectl get nodes

// Output example:
// Client Version: v1.31.0
// Server Version: v1.31.0
// NAME             STATUS   ROLES           AGE   VERSION
// docker-desktop   Ready    control-plane   5m    v1.31.0


// Agar STATUS me Ready likha hai ✅
// → matlab Kubernetes successfully chalu ho gaya.






// 🧠 Step 3: Kubernetes Basic Concepts

// Kubernetes me 5 main building blocks hote hain 👇

// Concept	Simple Meaning	Real-Life Example
// Pod	Smallest unit — ek ya zyada containers ka group	Ek delivery vehicle jisme ek package (container) hai
// Deployment	Template jo batata hai ki kitne Pods chahiye aur kaise manage karne hain	Zomato bolta hai “Mujhe hamesha 3 delivery vehicles chahiye active”
// ReplicaSet	Ye ensure karta hai ki deployment me jitne Pods tu ne specify kiye hain, utne hamesha chal rahe ho	Agar ek vehicle breakdown ho gaya to company ek naya bhej deti hai
// Service	Pod ko world ke samne expose karta hai (jaise IP/Port)	Delivery app ka public number jisse log contact kar sakein
// Namespace	Cluster ke andar logical division (different environments)	“Production”, “Testing”, “Dev” — sab alag departments
// 🔍 1️⃣ Pod

// Smallest runnable unit in Kubernetes

// Ek pod ke andar ek ya ek se zyada containers ho sakte hain (mostly ek hi hota hai)

// Example command:

// kubectl get pods

// 🧱 2️⃣ Deployment

// Tu bolta hai: “Mujhe 3 pods chahiye is image se.”

// Deployment khud Pods create, restart, aur update karega.

// Example:

// spec:
//   replicas: 3

// ♻️ 3️⃣ ReplicaSet

// Deployment ke andar hota hai.

// Ye ensure karta hai ki 3 me se koi ek pod crash ho gaya to ek naya pod auto-create ho jaye.

// 🌐 4️⃣ Service

// Kubernetes me Pods ke IPs change hote rehte hain.

// Service ek stable IP provide karti hai taaki tu app ko reliably access kar sake.

// Example types:

// ClusterIP → internal access only

// NodePort → localhost:port se access

// LoadBalancer → external public access (like browser)

// 🧭 5️⃣ Namespace

// Jaise company me “Dev”, “QA”, “Prod” environments alag hote hain.

// Kubernetes me ye separation namespace se hoti hai.

// Command:

// kubectl get namespaces

// 🖼️ Visual Summary (Simple Diagram):
// Cluster
// │
// ├── Namespace: default
// │   ├── Deployment (Node-App)
// │   │   ├── ReplicaSet
// │   │   │   ├── Pod #1 → Container (Node.js app)
// │   │   │   ├── Pod #2 → Container (Node.js app)
// │   │   │   └── Pod #3 → Container (Node.js app)
// │   └── Service → Load balances between Pods
// │
// └── Namespace: kube-system (internal stuff)





// Perfect bhai 💪 chalo ab Step 4: Tera pehla Kubernetes app deploy karte hain — ye sabse mazedar aur practical step hai 🔥

// 🚀 Step 4: First App Deployment on Kubernetes

// Maan le tu ne ek Node.js app banayi hai (Docker image ready hai):

// ankush/login-app:latest


// Ab hum ye app Kubernetes cluster (jo Docker Desktop se chal raha hai) me deploy karenge.

// 🧩 1️⃣ Create Deployment YAML

// Ek file bana le apne folder me naam:

// deployment.yaml


// Usme likh:

// apiVersion: apps/v1
// kind: Deployment
// metadata:
//   name: login-app-deployment
// spec:
//   replicas: 3               # 3 pods (containers) chalenge
//   selector:
//     matchLabels:
//       app: login-app
//   template:
//     metadata:
//       labels:
//         app: login-app
//     spec:
//       containers:
//       - name: login-app
//         image: ankush/login-app:latest   # apni image ka naam
//         ports:
//         - containerPort: 5000


// 🧠 Ye file bolti hai:

// “Kubernetes bhai, mujhe ankush/login-app ke 3 containers chahiye, port 5000 pe.”

// 🌐 2️⃣ Create Service YAML

// Ab ek aur file bana:

// service.yaml


// Usme likh:

// apiVersion: v1
// kind: Service
// metadata:
//   name: login-app-service
// spec:
//   type: LoadBalancer
//   selector:
//     app: login-app
//   ports:
//   - port: 80
//     targetPort: 5000


// 🧠 Ye file bolti hai:

// “Jo bhi request port 80 pe aaye, use Pods ke 5000 port pe bhej do.”

// 🧱 3️⃣ Apply dono files

// Ab terminal (VSCode ya PowerShell) me ja ke commands chala:

// kubectl apply -f deployment.yaml
// kubectl apply -f service.yaml

// 🔍 4️⃣ Verify kar
// kubectl get pods
// kubectl get svc


// Agar output me aisa dikhe 👇

// NAME                                    READY   STATUS    RESTARTS   AGE
// login-app-deployment-6f5b7c8b7d-x7k9s   1/1     Running   0          2m
// login-app-deployment-6f5b7c8b7d-r9v2f   1/1     Running   0          2m
// login-app-deployment-6f5b7c8b7d-q3l7p   1/1     Running   0          2m


// Aur service ke liye:

// NAME                 TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
// login-app-service    LoadBalancer   10.96.123.45    localhost     80:30000/TCP   2m


// ✅ Teri app successfully Kubernetes pe chal gayi!

// 🌍 5️⃣ Access kar

// Ab apne browser me likh:

// http://localhost:80


// ya

// http://localhost:30000


// (depends on what shows in kubectl get svc)

// Itna karte hi tu ne officially apna first Kubernetes deployment complete kar liya 🎉


// ⚙️ Step 5: Kubernetes Important Commands (Practical Use)

// Yahan hum sabse zyada use hone wale kubectl commands seekhenge —
// ye Kubernetes ka main CLI tool hai (Docker ke docker command jaisa hi).

// 🔍 1️⃣ Check current running resources
// kubectl get pods


// 👉 sabhi running pods dikhata hai
// Output:

// NAME                                    READY   STATUS    RESTARTS   AGE
// login-app-deployment-xxxx               1/1     Running   0          3m

// kubectl get deployments


// 👉 tere deployments (templates) dikhata hai

// kubectl get svc


// 👉 services (port expose hone wali) list karta hai

// 🧱 2️⃣ Pod ka detail info dekhna
// kubectl describe pod <pod_name>


// Example:

// kubectl describe pod login-app-deployment-xxxx


// 👉 ye command batata hai:

// pod kis image se bana

// kya environment vars hain

// kya koi error aya hai

// ports, IP, node details

// 📜 3️⃣ Pod ka log dekhna
// kubectl logs <pod_name>


// Example:

// kubectl logs login-app-deployment-xxxx


// 👉 Jaise tu console.log() karta hai Node.js me — ye usi ka output hota hai container ke andar se.
// Perfect debugging ke liye helpful.

// 🧠 4️⃣ Pod ke andar jaake debug karna
// kubectl exec -it <pod_name> -- bash


// Example:

// kubectl exec -it login-app-deployment-xxxx -- bash


// 👉 Ye container ke andar shell khol dega (jaise tu docker exec -it karta hai).
// Wahan jaake tu check kar sakta hai:

// ls
// cat app.js
// node --version

// ⚖️ 5️⃣ Scale up / down (replicas change karna)

// Man le tu 3 containers chala raha tha, ab 5 karne hain 👇

// kubectl scale deployment login-app-deployment --replicas=5


// Check kar:

// kubectl get pods


// Output me 5 pods dikhenge —
// Kubernetes ne 2 aur create kar diye 🔥

// Similarly, agar kam karne hain:

// kubectl scale deployment login-app-deployment --replicas=2

// 💣 6️⃣ Delete karna (clean up)
// kubectl delete -f deployment.yaml
// kubectl delete -f service.yaml


// 👉 Ye tere resources hata dega cluster se.

// ⚡ Quick Summary Table:
// Command	Description
// kubectl get pods	List all pods
// kubectl get svc	List all services
// kubectl logs <pod>	See logs of a pod
// kubectl exec -it <pod> -- bash	Enter inside pod
// kubectl scale deployment <name> --replicas=n	Change number of pods
// kubectl delete -f <file>	Delete resource





// 🚀 Step 6: Rolling Update (Zero Downtime Deployment)

// Imagine kar:
// Teri app v1 me chal rahi hai — ankush/login-app:v1
// Ab tu ne kuch code update kiya aur image bana liya ankush/login-app:v2.

// Tu chaahta hai:

// “Purani app band na ho, naye version wale pods gradually replace ho jaayein.”

// Isi ka naam hai Rolling Update 🎯

// 🧩 1️⃣ Update kar deployment.yaml

// Sirf image tag badal de:

// containers:
// - name: login-app
//   image: ankush/login-app:v2
//   ports:
//   - containerPort: 5000

// ⚙️ 2️⃣ Apply update
// kubectl apply -f deployment.yaml


// Kubernetes automatically karega:

// Pehle kuch old pods delete nahi karega

// Ek–ek karke naye pods (v2) start karega

// Jab new pods “Ready” ho jaayenge, tab old wale remove karega
// ✅ Zero downtime update!

// 🔍 3️⃣ Check update progress
// kubectl rollout status deployment/login-app-deployment


// Output:

// deployment "login-app-deployment" successfully rolled out

// 📜 4️⃣ Verify version
// kubectl get pods -o wide
// kubectl describe deployment login-app-deployment | grep Image


// Tu dekh lega ke image v2 ho gayi hai.

// 🕐 5️⃣ Rollback (agar galti ho jaaye)
// kubectl rollout undo deployment/login-app-deployment


// 👉 Ye immediately purani v1 image waale pods wapas la dega.

// ✅ Summary
// Action	Command
// Update deployment	kubectl apply -f deployment.yaml
// Check rollout status	kubectl rollout status deployment/<name>
// Rollback	kubectl rollout undo deployment/<name></name>












/////*********** */

// Agar tu Docker + Kubernetes stage skip karke direct EC2 (server) pe deploy kar de, to difference kuch is tarah hoga:

// 1️⃣ Direct EC2 Deployment (Docker / Kubernetes skip)
// Process:

// App code ko EC2 server pe copy karenge (via SCP / Git clone)

// Node.js app ko wahan direct run karenge:

// npm install
// node app.js


// Optional: PM2 / systemd se background me run karenge

// Expose port via EC2 security group

// Pros:

// Simple setup, beginners ke liye easy

// Fewer tools, less learning overhead

// Cons / Risks:

// Scaling manually:

// Agar traffic badh gaya → manually aur EC2 instance ya process start karna padega

// Downtime on update:

// App update karne pe server me app ko stop + replace karna padega → downtime

// Environment issues:

// Dev machine aur EC2 environment mismatch ho sakta hai (dependency / OS version issues)

// No orchestration / self-healing:

// Agar app crash ho gaya → manually restart karna padega

// 2️⃣ Docker + Kubernetes Deployment
// Process:

// App Docker image me pack karenge → portable

// Kubernetes cluster pe deploy karenge

// CI/CD pipeline se automatic build + deploy

// Pros:

// Scaling automatic:

// ReplicaSet / HPA se pods automatically increase/decrease

// Rolling update / zero downtime:

// App update hoti hai → old pods gradually replace ho jate hain

// Self-healing:

// Pod crash ho gaya → Kubernetes automatically restart kar deta hai

// Portable & consistent environment:

// Docker image + K8s = same app dev/test/prod environments

// CI/CD integration smooth:

// Pipeline directly deploy karega cluster me

// Cons:

// Initial learning curve zyada

// Cluster setup + maintenance chahiye

// ⚡ Simple Summary Table
// Feature	Direct EC2	Docker + Kubernetes
// Scaling	Manual	Automatic
// Updates	Downtime	Rolling update / zero downtime
// Crash recovery	Manual	Automatic
// Environment consistency	Risk of mismatch	Guaranteed (Docker image)
// CI/CD integration	Simple / partial	Fully automated

// 💡 Bottom line:

// Agar app small project / test / hobby → direct EC2 fine hai

// Agar app production, scalable, reliable, maintainable → Docker + Kubernetes is the standard