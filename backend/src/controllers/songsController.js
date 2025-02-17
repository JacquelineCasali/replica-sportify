
import { db } from "../connect.js";

 
 
 const songsController ={
    listar: async(req,res)=>{
        res.send(await db.collection("songs").find({}).toArray() )
    }

    

}


export default songsController;