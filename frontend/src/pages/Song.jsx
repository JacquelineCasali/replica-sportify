import { Link, useParams } from "react-router-dom"
import Player from "../components/player/Player"
import { songsArray } from "../database/songs";
import { artistArray } from "../database/artists";


function Song() {
  const {id}= useParams();
  //filtrando por id
  const {image ,name, duration,artist,audio}=songsArray.filter((currenteSongObj)=>currenteSongObj._id===(id))[0];
  const artists=artistArray.filter((currenteArtistObj)=>currenteArtistObj.name===artist)[0];
// filtrando por musica 
const songArrayList=songsArray.filter((currenteSongtObj)=>currenteSongtObj.artist===artist)
const randomIndex=Math.floor(Math.random()*(songArrayList.length-1));

const  randomIdFormatArt=songArrayList[randomIndex]._id
const randomIndex2=Math.floor(Math.random()*(songArrayList.length-1));
const  randomId2FormatArt=songArrayList[randomIndex2]._id

  return (
    <div className="song">
<div className="song__container">
<div className="song__image-container">
<img 
   
     src={image} alt={`Imagem da Música ${name}`} />
   
</div>

</div>
<div className="song__bar">
<Link to={`/artist/${artists._id}`} className="song__artist-image">
<img 
width={75}
height={75}   
   src={artists.image} alt={`Imagem do artista ${artist}`} />
</Link>
<Player duration={duration}
randomIdFormatArt={randomIdFormatArt}
randomId2FormatArt={randomId2FormatArt}
audio={audio}
/>
<div >
  <p className="song__name">{name}</p>
  <p>{artist}</p>
</div>

</div>

    </div>
  )
}

export default Song

