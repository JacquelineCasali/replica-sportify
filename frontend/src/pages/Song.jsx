import { Link, useParams } from "react-router-dom"
import Player from "../components/player/Player"
import { songsArray } from "../database/songs";
import { artistArray } from "../database/artists";


function Song() {
  const {id}= useParams();
  //filtrando por id
  const {image ,name, duration,artist}=songsArray.filter((currenteSongObj)=>currenteSongObj.id===Number(id))[0];
  const artists=artistArray.filter((currenteArtistObj)=>currenteArtistObj.name===artist)[0];
console.log(artists)
  return (
    <div className="song">
<div className="song__container">
<div className="song__image-container">
<img 
   
     src={image} alt={`Imagem da Música ${name}`} />
   
</div>

</div>
<div className="song__bar">
<Link to={`/artist/${artists.id}`} className="song__artist-image">
<img 
width={75}
height={75}   
   src={artists.image} alt={`Imagem do artista ${artist}`} />
</Link>
<Player duration={duration}/>
<div >
  <p className="song__name">{name}</p>
  <p>{artist}</p>
</div>

</div>

    </div>
  )
}

export default Song

