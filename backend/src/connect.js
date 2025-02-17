//conexação banco de dados
import {MongoClient} from "mongodb"
const URI="mongodb+srv://jcasalia:casali@cluster0.9xs2t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client= new MongoClient(URI);
export const db=client.db("sportify");
// const songCollection=await db.collection("artists").find({}).toArray();

// console.log(songCollection);