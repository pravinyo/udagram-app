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
```http://{{HOST_NAME}}/deleteAll?user_id={{ID}}```

To make request for image processing:
```http://{{HOST_NAME}}/filteredimage?user_id={{ID}}&image_url={{URL}}```

