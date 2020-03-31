# Udagram Image Filtering Microservice

This micro service has following endpoints:
- /filteredimage
- /deleteAll

## filtered Image endpoint
It takes 2 url parameter userId and imageUrl. User Id is used to track the request made by specific user and imageUrl is required to process and return the results to the user.

## deleteAll endpoint
It takes UserId as url paramter which used to delete all the tracking data and remove the user data from the server.


## How to use it
To delete the files, this is how our url looks like
```http://{{HOST_NAME}}/api/v0/imagefilter/deleteAll?user_id={{ID}}```

To make request for image processing:
```http://{{HOST_NAME}}/api/v0/imagefilter/image?user_id={{ID}}&image_url={{URL}}```

## Tech stack:
- Nodejs
- TypeScript
- Docker
- EC2

## How to setup and run:
- Download necessary dependencies for the component: `Run-> npm install`
- Now, Our dependencies are available. It time to run the app and checkout in browser: `Run-> npm run dev`
- Now, Open browser and type: `localhost:8080/api/v0/imagefilter/image/<endpoint>`
- Now, you are ready to use this service to authenticate your users.

## How to deploy to DockerHub
- Once, you're sure component is working fine locally, you can push it to hub
- Login with docker locally by providing username and password: `Run -> docker login`
- Build Image: `Run -> docker build -t <repository>/<Image Name>:<Tag>`
- Push to Hub: `Run-> docker push <repository>/<Image name>:<tag>`
- Congrats, you have successfully published you image to hub.