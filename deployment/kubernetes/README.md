## Udagram Kubernetes backend cluster
It is used to deploy application in kubernetes(K8s) cluster environment. K8s allows us to deploy Cloud Native Application on Various Cloud Platform.

## Steps to locally setup cluster and run Udagram Application:
- Start the cluster: 
`` Here we are using minikube to locally simulate Single K8s Cluster. Run -> **minikube start**``
- Load secrets and configMap. `Run-> kubectl apply -f <secrets.yaml/configMap.yaml>`
- Load the container as Pod in Node:
    - Kubectl apply -f backend-`service_name`-deployment.yaml
    - Check status: `kubectl get pods`
    - Check build status: `kubectl describe pod/podname`
- Now, Our Pods are up and running but they cannot talk with proxy server and to allow pods to share information with proxy, we need to create service which will act as a middle persion to related those information. Service has other advantages as well like exposure of pod, scaling and managing pods out.
    - Run : kubectl apply -f backend-`service_name`-service.yaml for running pods.
- Now, Our pods are ready to talk with proxy and handle upstream request.
- Create Proxy server: `Run-> kubectl apply -f reverseproxy-deploymet.yaml`.
    - It will create proxy server and be the middle person to handle request from outside world and route it to appropriate service.
    - In order to handle request and interact with outside world, we need to expose it as service:  `Run-> kubectl apply -f reverserproxy-service.yaml`
    - We are not done here, we haven't yet exposed the port on which other can talk with proxy. `Run-> kubectl port-forward service/reverseproxy 8080:8080`
    - We are now ready to handle request and serve client application.
- It's time to run frontend service to consume out backend apis. Follows the steps here,
    - Run Pod: `kubectl apply -f frontend-deployment.yaml`
    - Run Service: `kubectl apply -f frontend-service.yaml`
    - Expose to outside world: `kubectl port-forward service/frontend 8100:8100`
- Since, Our proxy is already exposed on 8080 port, frontend will be able to discover it and query it.
- we have completed the deployment our Udagram to K8s cluster.

## How to stop
- delete pod: `kubectl delete -f *pod_name*.yaml`
- delete service: `kubectl delete -f *service_name*.yaml`

