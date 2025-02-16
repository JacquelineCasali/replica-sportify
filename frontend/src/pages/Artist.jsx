import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import { Head } from "../components/Head/Head"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useParams } from "react-router-dom"
import SongList from "../components/Song/SongList"
import {artistArray} from "../database/artists"
import { songsArray } from "../database/songs"
function Artist() {
const {id}= useParams();


//filtrando por id
const {name,banner}=artistArray.filter((currenteArtistObj)=>currenteArtistObj.id===Number(id))[0]

// filtrando por musica 
const songArrayList=songsArray.filter((currenteSongtObj)=>currenteSongtObj.artist===name)

const randomIndex=Math.floor(Math.random()*(songArrayList.length-1));
const  randomIndexFormat=songArrayList[randomIndex].id


  return (
    <>
<Head title={`Artista `}/>
<div className="artist">
           
<div className="artist__header" style={{backgroundImage: 
`linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`


}}>
<h2 className="artist__title">{name}</h2>

</div>

<div className="artist__body">
  
  <h2>Populares</h2>
<SongList songsArray={songArrayList} />
  
  </div>  
<Link to={`/song/${randomIndexFormat}`}>
<FontAwesomeIcon className="single-item__icon single-item__icon--artist" icon={faCirclePlay} />

</Link>
    
    </div>
    </>

  )
}

export default Artist
