import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8081;

  const userFilesTracker= new Map<string,string[]>();
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  app.get( "/filteredimage", async ( req, res ) => {
    
    if(!req.query.image_url){
      res.status(422).send("Image Url required");
    }

    if(!req.query.user_id){
      res.status(422).send("UserId required");
    }

    const imageUrl = req.query.image_url;
    const userId = req.query.user_id;
    
    try{
      filterImageFromURL(imageUrl).then( value => {
  
        res.on("finish",() =>{
          let files:string[] = userFilesTracker.get(userId);
          
          if(files == undefined){
            files = [value];
          }else{
            files.push(value);
          }

          console.log("values: "+files);

          userFilesTracker.set(userId,files);
        });

        console.log("value is :"+value);
        res.status(200).sendFile(value);

      },issue => {
        res.status(422).send("Issue -> "+issue);
      });

      
    }catch(reason){
      res.status(422).send("There is issue in File:"+imageUrl);
    }
  });

  //! END @TODO1

  app.get("/deleteAll", async(req, res)=>{

    if(!req.query.user_id){
      res.status(422).send("UserId required");
    }

    const userId = req.query.user_id;

    const files  = userFilesTracker.get(userId);

    if(files!=undefined && files.length>0){
      deleteLocalFiles(files);
      userFilesTracker.delete(userId);
    }

    res.status(200).send("File removed");

  });
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send(`<h2> How to use it</h2>
    <p>To delete the files, this is how our url looks like
    <br><i>http://{{HOST_NAME}}/deleteAll?user_id={{ID}}</i>
    </p><p>
    To make request for image processing:<br><i>
    http://{{HOST_NAME}}/filteredimage?user_id={{ID}}&image_url={{URL}}</i></p>
    <br><b>Note: Use any random string for userId</b>`)
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();