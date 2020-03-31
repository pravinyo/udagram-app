## Udagram Simple Cloud based Web App  [![Build Status](https://travis-ci.com/pravinyo/udagram-app.svg?branch=master)](https://travis-ci.com/pravinyo/udagram-app)
Developed as a part of Cloud Developer Nanodegree  with Udacity.

Key Components:
- [Frontend Component](frontend/README.md):
 `Built using Typescript, Nodejs and Ionic, Cloudfront, docker-container`
 
 - [Backend REST API for User Service](backend/restapi-user/README.md):
 `Built using Nodejs, Typescript, docker-container, AWS Postgress, sequalize`
 
 - [Backend REST API for Feed Service](backend/restapi-feed/README.md):
 `Built using Nodejs, Typescript, docker-container, AWS Postgress,S3 Buckert for media, sequalize`

 - [Backend REST API for Image Filter Service](backend/restapi-image-filter/README.md):
 `Built using Nodejs, Typescript, docker-container, S3 Buckert for media`
 
 - Deployment Component:
    - [`It dockerizes the component and host on docker hub`](deployment/docker/README.md)
    - [`Kubernetes pull the images from registry and host the container application as pod on clustor in AWS`](deployment/kubernetes/README.md)
 
 ## CI/CD:
 - We are using Travis CI and CD for build and deployment on docker hub.
 - When new change is been made and ready to submit. PR is required to be raised.
 - PR will go to CI/CD Pipeline.
 - Deployemnt is available only in dev and master branch.
 
## Additional Details:
- Docker Hub: https://hub.docker.com/repository/docker/pravinyo/
- Travis : https://travis-ci.com/github/pravinyo/udagram-app