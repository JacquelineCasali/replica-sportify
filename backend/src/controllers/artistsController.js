
import { db } from "../connect.js";

const artistsController ={

    listar:async (req,res)=>{
        res.send(await db.collection("artists").find({}).toArray() )
    }

}


export default artistsController;