## Backend Component for User microservice 
`It is the microservice which is consumed by the Frontend component for User Authentication and allowing user to create post`

## Tech stack:
- Nodejs
- TypeScript
- Docker
- Postgress
- JWT

## How to setup and run:
- Download necessary dependencies for the component: `Run-> npm install`
- Now, Our dependencies are available. It time to run the app and checkout in browser: `Run-> npm run dev`
- Now, Open browser and type: `localhost:8080/api/v0/users`
- Now, you are ready to use this service to authenticate your users.

## How to deploy to DockerHub
- Once, you're sure component is working fine locally, you can push it to hub
- Login with docker locally by providing username and password: `Run -> docker login`
- Build Image: `Run -> docker build -t <repository>/<Image Name>:<Tag>`
- Push to Hub: `Run-> docker push <repository>/<Image name>:<tag>`
- Congrats, you have successfully published you image to hub.