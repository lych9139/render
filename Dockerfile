FROM node:latest
EXPOSE 3000
WORKDIR /app
COPY files/* /app/

RUN apt-get update &&\
    apt-get install -y iproute2 &&\
    npm install -r package.json &&\
    npm install -g pm2 &&\
    
<<<<<<< HEAD
    chmod +x web.js cf
=======
    chmod +x web.js
>>>>>>> a92ec6f9adf64dd325c43767251cd3c9d87531af

ENTRYPOINT [ "node", "server.js" ]