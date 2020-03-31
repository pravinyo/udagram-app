## Frontend Component 
`It is the UI that User will use to interact with the application`

## Tech stack:
- Nodejs
- TypeScript
- Docker
- Ionic/Angular

## How to setup and run:
- Download necessary dependencies for the component: `Run-> npm install`
- Now, Our dependencies are available. It time to run the app and checkout in browser: `Run-> ionic serve`


## How to deploy to DockerHub
- Once, you're sure component is working fine locally, you can push it to hub
- Login with docker locally by providing username and password: `Run -> docker login`
- Build Image: `Run -> docker build -t <repository>/<Image Name>:<Tag>`
- Push to Hub: `Run-> docker push <repository>/<Image name>:<tag>`
- Congrats, you have successfully published you image to hub.