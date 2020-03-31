import { Router, Request, Response } from 'express';
import {filterImageFromURL, deleteLocalFiles} from './../util/util';

const router: Router = Router();
const userFilesTracker= new Map<string,string[]>();


router.get( "/image", async ( req, res ) => {
    
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

  router.get("/deleteAll", async(req, res)=>{

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
  router.get( "/", async ( req, res ) => {
    res.send(`<h2> How to use it</h2>
    <p>To delete the files, this is how our url looks like
    <br><i>http://{{HOST_NAME}}/api/v0/imagefilter/deleteAll?user_id={{ID}}</i>
    </p><p>
    To make request for image processing:<br><i>
    http://{{HOST_NAME}}/api/v0/imagefilter/image?user_id={{ID}}&image_url={{URL}}</i></p>
    <br><b>Note: Use any random string for userId</b>`)
  } );

export const FilterRouter: Router = router;