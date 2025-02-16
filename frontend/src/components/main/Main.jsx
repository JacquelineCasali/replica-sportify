

import "./main.css"

import { Head } from "../../components/Head/Head"
import ItemList from "../itemList/ItemList"
import { artistArray } from "../../database/artists"
import { songsArray } from "../../database/songs"
export default function Main({type,title}) {
  return (
    
    
    <div className="main">
        <Head title={title} /> 
      {/* item List de Artista  trazer todos os artistas type===undefined */}
    {type==="artists"  || type===undefined ? ( <ItemList title="Artistas" items={10}
  itemsArray={artistArray} path="/artists" idPath="artist"/>):(<></>)}  
      {/* item List de Musica */}
      {type==="songs" || type===undefined ?( <ItemList title="Músicas" items={20} itemsArray={songsArray}
     path="/songs"
     idPath="song"
     />):(<></>)
   
      }
    </div>
  )
}
