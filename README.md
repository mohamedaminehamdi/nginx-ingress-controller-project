# Node.js App with NGINX Reverse Proxy 

This project sets up a Node.js application behind an NGINX reverse proxy, containerized using Docker and orchestrated using Docker Compose. The NGINX server is configured via a custom nginx.conf file to proxy incoming HTTP requests to the Node.js app running on a separate container.