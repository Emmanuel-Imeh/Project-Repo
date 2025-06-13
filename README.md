# CLOUD ENGINEERING SECOND SEMESTER EXAM PROJECT
## TITHE: THE FUTURE OF CLOUD NATIVE
This documentation details the steps taken to complete the project.  

**TASK:**
- Server setup
- Web server setup
- Deployment

## Technologies Required

- HTML5
- CSS3 (with custom animations)
- JavaScript (Vanilla)
- SVG Graphics
- [Nginx](https://www.nginx.com/) (for web server setup)
- AWS EC2 (for deployment)
- Git & GitHub (for version control and collaboration)
- Visual Studio Code (as the primary code editor)

**Getting started with the task.**  
## SERVER SETUP
### 1. Launch an AWS EC2 Instance 
1. [**Sign in to AWS Console:**](https://aws.amazon.com/) Go to the AWS Management Console and sign in to your account.  
2. **Navigate to EC2:** In the search bar, type "EC2" and select the EC2 service.
3. **Launch Instance**: Click on "Launch instances."
4. **Choose an Amazon Machine Image (AMI):**  
- Select an Amazon Linux AMI (e.g., Amazon Linux 2023 or Amazon Linux 2). These are optimized for AWS and often provide a good balance of performance and compatibility.
5. **Choose an Instance Type:**  
- For a simple web server, a t2.micro or t3.micro instance type is usually sufficient and eligible for the AWS Free Tier.
6. **Configure Instance Details:**  
- Keep most settings as default unless you have specific requirements.
- Ensure "Auto-assign Public IP" is enabled so your instance gets a public IP address.
7. **Add Storage:**  
- The default storage (8GB) is usually enough for a basic web server. You can increase it if needed.
8. **Configure Security Group:** This is crucial for allowing web traffic.  
- **Create a new security group** or select an existing one.
- Give it a descriptive name (e.g., cloud-project-team) and a description.
- **Add Inbound Rules:**  
    - SSH (Port 22): This allows you to connect to your instance via SSH.
Source: My IP (most secure, only allows your current IP) or a specific IP range. Avoid 0.0.0.0/0 (anywhere) for SSH in production for security reasons.
    - HTTP (Port 80): This allows web traffic to your Nginx server.
Source: Anywhere (0.0.0.0/0) for public access.
    - HTTPS (Port 443): If you plan to serve content over SSL/TLS (highly recommended for production).
Source: Anywhere (0.0.0.0/0) for public access.
9. **Create a Key Pair:**
- Choose an existing key pair or create a new one. This .pem file is essential for connecting to your instance via SSH.
- Download the .pem file and keep it secure. You won't be able to download it again.
10. **Launch Instance:** Review your settings and click "Launch instance."
### 2. Connect to Your EC2 Instance
Once your instance is running (its "Instance State" changes to "Running"), you can connect to it.  
1. **Get Public IP/DNS:** On the EC2 Instances dashboard, select your instance and copy its Public IPv4 address or Public IPv4 DNS.  
2. **Open Terminal/SSH Client:**
    - **Linux/macOS:** Open a terminal.
    - **Windows:** Use Git Bash, WSL (Windows Subsystem for Linux), or a client like PuTTY (if using PuTTY, you'll need to convert your .pem key to .ppk format).  
3. **Set Key Permissions (Linux/macOS):**  
    - Navigate to the directory where you saved your .pem file.
    - Change its permissions: chmod 400 your-key-pair-name.pem
4. **Connect via SSH:**
    - Use the command:** ssh -i /path/to/your/key-pair-name.pem ec2-user@YOUR_INSTANCE_PUBLIC_IP_OR_DNS
    - Replace /path/to/your/key-pair-name.pem with the actual path to your key file.
    - Replace YOUR_INSTANCE_PUBLIC_IP_OR_DNS with the actual public IP or DNS of your EC2 instance.
    - The default username for Amazon Linux is ec2-user.  
- Once connected to EC2 instance: update system's package list.   
    `sudo apt update && sudo apt upgrade 
    `
## **WEB SERVER SETUP (Nginx)**
### **INSTALL NGINX**
- To install nginx web server: `sudo apt install nginx -y`
- Confirm nginx is installed: `nginx -v`
- Start Nginx Service: `sudo systemctl start nginx`
- Enable Nginx to Start on Boot: `sudo systemctl enable nginx`
- Check Nginx Status: `sudo systemctl status nginx`  
You should see "active (running)" in the output.
## **DEPLOYMENT**
### The default web root for Nginx on Ubuntu is /var/www/html/.
- Navigate to the web root: `cd /var/www/html/`


- Remove the default Nginx welcome page (optional, but good practice before deploying your own):
`sudo rm index.nginx-debian.html`  
- Create your own index.html (or upload your website files): `sudo vi index.html`
- Set Permissions (Important!): Ensure Nginx has the necessary permissions to read your files. The default www-data user/group is typically used by Nginx.

```
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/ 
```  
- Restart Nginx (good practice after content changes, though often not strictly necessary for simple file changes in the default root): `sudo systemctl restart nginx`
- Refresh your browser. You should now see your custom HTML page.

### HOSTED PUBLIC IP ADDRESS AND IMAGE OF RENDERED PAGE.
- [Hosted IP Address](http://34.240.4.106)  
![Rendered Page in browser](./Asset/WebPage.png)
