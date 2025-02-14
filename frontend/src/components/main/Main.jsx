
import "./main.css"


import ItemList from "../itemList/ItemList"
import { artistArray } from "../../database/artists"
import { songsArray } from "../../database/songs"
export default function Main() {
  return (
    <div className="main">
        
      {/* item List de Artista */}
     <ItemList title="Artistas" items={5}
      itemsArray={artistArray} path="/artists" idPath="artist"/>
    {/* item List de Musica */}
    <ItemList title="Músicas" items={10} itemsArray={songsArray}
     path="/songs"
     idPath="song"
     />
    </div>
  )
}
