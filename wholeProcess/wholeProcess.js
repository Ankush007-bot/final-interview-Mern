// 🌐 Ocean Beach App – Production Deployment Checklist
// 1. Server Setup

//  VPS / Cloud server launch (Ubuntu 22.04)

//  SSH login setup (key-based preferred)

//  System update & upgrade:

// sudo apt update && sudo apt upgrade -y

// 2. App Environment

//  Node.js & NPM install:

// curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
// sudo apt install -y nodejs


//  Git install:

// sudo apt install git -y


//  App clone & dependencies install:

// git clone <repo_url>
// cd your-app
// npm install


//  Build production Next.js app:

// npm run build

// 3. Process Management

//  PM2 install globally:

// sudo npm install -g pm2


//  Start app via PM2:

// pm2 start npm --name "oceanbeach" -- start
// pm2 save
// pm2 startup

// 4. Domain Setup

//  Domain purchased: oceanbeach.com

//  DNS setup at registrar:

// A record: @ → VPS IP

// CNAME: www → oceanbeach.com

//  Nginx config update:

// server_name oceanbeach.com www.oceanbeach.com;


//  Restart Nginx:

// sudo nginx -t
// sudo systemctl restart nginx

// 5. SSL / HTTPS

//  Install Certbot:

// sudo apt install certbot python3-certbot-nginx -y


//  Generate & configure SSL:

// sudo certbot --nginx -d oceanbeach.com -d www.oceanbeach.com
// sudo certbot renew --dry-run

// 6. Environment & Security

//  Set .env.production with DB credentials, JWT secrets, API keys

//  PM2 restart with updated env:

// pm2 restart oceanbeach --update-env


//  Security headers (Helmet), rate limiting, firewall (UFW)

// 7. Monitoring & Logging

// PM2 logs: pm2 logs oceanbeach

// Nginx logs: sudo tail -f /var/log/nginx/access.log / error.log

// Uptime monitoring (UptimeRobot / Pingdom)

// 8. Optional Optimizations

// Enable gzip compression in Nginx

// CDN (Cloudflare / CloudFront) for static assets

// Caching (Redis / browser caching)

// 9. Final Testing

// Open browser: https://oceanbeach.com

// Check padlock icon (HTTPS)

// Test all pages, forms, API endpoints

// Test DB connectivity

// 🗺 Deployment Flow Diagram
// User Browser
//     |
//     | HTTPS Request
//     v
//    Cloudflare/CDN (optional)
//     |
//     v
//   Nginx Reverse Proxy (port 80/443)
//     |
//     v
// PM2 managed Node.js / Next.js app (port 3000)
//     |
//     v
// Database (MongoDB / PostgreSQL / MySQL)



////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
// Step 0: Server Buy / Launch

// Cloud provider choose karo:

// AWS EC2, DigitalOcean Droplet, Linode, Vultr, Google Cloud

// Server configuration choose karo:

// OS: Ubuntu 22.04 LTS (recommended)

// RAM: 1–2 GB minimum (Next.js small app ke liye enough)

// Storage: 20 GB+

// SSH credentials set karo:

// Username (mostly root)

// Password ya SSH key (recommended)

// Server launch karte hi aapko IP address mil jayega, ye domain aur SSH login ke liye use hoga.





// SSH credentials set karo

// Username: root

// Authentication: SSH key preferred (password optional)

// Server launch karte hi aapko IP address milta hai

// Ye IP address aage domain linking & SSH login me use hoga





// Step 1: Server Login & Update

// Apne SSH credentials use karke server se connect karo:

// ssh username@server_ip


// Agar key-based login hai:

// ssh -i /path/to/private_key username@server_ip


// Password-based login hai → password enter karo

// Server ke packages update & upgrade karo:

// sudo apt update && sudo apt upgrade -y


// Ye ensure karega ke server latest security patches aur updates ke saath ready ho











// Step 2: Node.js & Git Install

// Node.js setup script download karo

// curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -


// Node.js & Git install karo

// sudo apt install -y nodejs git


// Version check karo

// node -v
// npm -v
// git --version


// Node.js app chalane ke liye Node aur NPM zaruri hain, Git code clone karne ke liye












// Step 3: App Clone & Build

// Server me directory me jao aur repo clone karo

// cd ~
// git clone <your-repo-url>
// cd your-app


// <your-repo-url> ko apne GitHub/Bitbucket repo URL se replace karo

// Dependencies install karo

// npm install


// Next.js app build karo (production ke liye)

// npm run build


// Ye command aapki app ko production-ready bana dega, ready to run on port 3000










// Ab chalte hain Step 4: PM2 – Background me app run karna

// Step 4: PM2 Setup & App Start

// PM2 install karo globally

// sudo npm install -g pm2


// App PM2 se start karo

// pm2 start npm --name "oceanbeach" -- start


// PM2 process save karo (server reboot ke baad auto-start ke liye)

// pm2 save
// pm2 startup


// Logs check karo

// pm2 logs oceanbeach


// PM2 ensure karta hai ki app 24/7 background me chale, aur server reboot ke baad bhi automatically start ho











// Ab chalte hain Step 5: Nginx Setup & Domain Linking

// Step 5: Nginx Setup & Domain Linking

// Nginx install karo

// sudo apt install nginx -y


// Nginx config file create karo

// sudo nano /etc/nginx/sites-available/oceanbeach


// Config file me ye content daalo

// server {
//     listen 80;
//     server_name oceanbeach.com www.oceanbeach.com;

//     location / {
//         proxy_pass http://localhost:3000;
//         proxy_http_version 1.1;
//         proxy_set_header Upgrade $http_upgrade;
//         proxy_set_header Connection 'upgrade';
//         proxy_set_header Host $host;
//         proxy_cache_bypass $http_upgrade;
//     }
// }


// Config enable karo & Nginx restart karo

// sudo ln -s /etc/nginx/sites-available/oceanbeach /etc/nginx/sites-enabled/
// sudo nginx -t
// sudo systemctl restart nginx


// Ab aapki app HTTP (port 80) pe domain se access ho sakti hai












// Step 5 me hum kya kar rahe hain:

// Nginx install kar rahe hain → ye ek web server hai jo internet se aane wale requests ko aapki Node.js app (port 3000) tak forward karta hai.

// Domain link kar rahe hain → aapka domain (oceanbeach.com) ab server ke app se connect ho jaye.

// Reverse proxy setup kar rahe hain → matlab: user browser se oceanbeach.com open karega, aur Nginx us request ko port 3000 pe running Node.js app ko forward karega.

// Nginx restart kar rahe hain → taaki naye configuration changes apply ho jaye.

// Result: Ab aapki app HTTP me domain ke saath publicly accessible ho gayi hai (abhi tak HTTPS/SSL nahi laga).












// Ab chalte hain Step 6: SSL / HTTPS via Let’s Encrypt

// Step 6: SSL / HTTPS Setup

// Certbot install karo (Nginx plugin ke saath)

// sudo apt install certbot python3-certbot-nginx -y


// SSL certificate generate & Nginx me configure karo

// sudo certbot --nginx -d oceanbeach.com -d www.oceanbeach.com


// Email daalo (LetsEncrypt notifications ke liye)

// Terms accept karo

// Certbot automatically HTTPS enable kar dega

// Auto-renewal test karo

// sudo certbot renew --dry-run


// Result: Ab aapki app https://oceanbeach.com
//  pe secure access ho sakti hai







// Step 7: Final Checks

// Browser me open karo:

// https://oceanbeach.com


// Check karo ki padlock icon aa raha hai (HTTPS secure)

// Sare pages, forms aur buttons properly kaam kar rahe hain

// PM2 logs check karo:

// pm2 logs oceanbeach


// Dekho koi errors to nahi

// Nginx logs check karo:

// sudo tail -f /var/log/nginx/error.log
// sudo tail -f /var/log/nginx/access.log


// Optional:

// Database connection test karo

// API endpoints test karo

// Forms / authentication test karo

// Result: Ab aapki Ocean Beach app fully production-ready, secure, domain ke saath globally accessible hai. ✅

// Bhai, agar chaho to mai ab ekdum simple single copy-paste block bana du jisme poora deployment start se end tak ho jaye, sirf commands run karne ki zarurat ho.








// Summary:

// Current status:

// Server ready (Ubuntu)

// Node.js, Git install

// App clone & build

// PM2 background process

// Nginx + domain linking

// SSL / HTTPS

// App live globally

// Next optional / advanced steps:

// Step 8: Docker → app containerize

// Step 9: Kubernetes → orchestration & scaling

// Step 10: CI/CD → automatic deployment on code push

// Step 11: Load Balancer → multiple servers / replicas traffic manage

// Step 12: Logging & Monitoring → errors & metrics track

// Step 13: CDN & Caching → fast global delivery





//Jab wapas deployment continue karna ho, seedha bata dena, hum Docker → Kubernetes → CI/CD → Load Balancer
//  step-by-step continue karenge.