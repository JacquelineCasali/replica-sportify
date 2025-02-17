// insere no banco de dados
// import {artistArray} from "../../../frontend/src/database/artists.js"
//import {songsArray} from "../../../frontend/src/database/songs.js"

import { artistArray } from "../../frontend/src/database/artists.js";
import { songsArray } from "../../frontend/src/database/songs.js";
import { db } from "./connect.js";

// importar sem o id
const newArtistArray = artistArray.map((art)=>{
const newArtistObj= {...art};
delete newArtistObj.id
return newArtistObj
});

const newSongArray = songsArray.map((song)=>{
    const newSongtObj= {...song};
    delete newSongtObj.id
    return newSongtObj
    });


//  const response= await db.collection("songs").insertMany(newSongArray);
//  const responseArtist= await db.collection("artists").insertMany(newArtistArray);
//  console.log(response);
//  console.log(responseArtist);