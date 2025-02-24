//conexação banco de dados
import {MongoClient} from "mongodb"
import { config } from 'dotenv'
config()
const URI=process.env.DATABASE_URL;
const client= new MongoClient(URI);
export const db=client.db("sportify");
// const songCollection=await db.collection("artists").find({}).toArray();

// console.log(songCollection);