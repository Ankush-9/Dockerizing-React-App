# Dockerizing-React-App
#Credits The Project used in this repository has been used from --> https://github.com/Haider7214/SpringBoot.git

# Requirements for the VM:
The author has used Amazon Linux VM to dockerize the react app
Connect to The Linux VM on your terminal
Make sure git,docker and nodejs are installed 
If not installed follow the commands~
    sudo yum install docker -y
    sudo yum install git -y
    sudo yum install nodejs -y

    Enable Docker by executing the following commands-
    sudo systemctl start docker
    sudo systemctl enable docker
    sudo usermod -aG docker ec2-user

   Enable nodejs18 package~
   sudo amazon-linux-extras enable nodejs18
   
Verify the installation as~
git -v
docker -v
node -v
npm -v

# To dockerize the react app refer to below explanation: 
First clone the project using the following command~ 
     git clone https://github.com/Ankush-9/Dockerizing-React-App

*Everything is available and no configuration is required 

Just get into the cloned repo directory~ 
cd Dockerizing-React-App

Now follow the commands to dockerize the app~
   docker build -t web-app .
   docker images
   docker run -d -p 80:80 web-app
   docker ps

Our app will be running 

*To access the app copy the public ip
of VM and on browser hiy as :
   <public-ip>:80

*Make sure All traffic is enabled in security groups of the instance
