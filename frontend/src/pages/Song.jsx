import { Link } from "react-router-dom"
import Player from "../components/player/Player"


function Song(name) {
  return (
    <div className="song">
<div className="song__container">
<div className="song__image-container">
<img 
   
     src={"https://i.scdn.co/image/ab67616d00001e02656f8291d741ad247ef330fe"} alt={`Imagem do artista ${name}`} />
   
</div>

</div>
<div className="song__bar">
<Link to="/artist/1" className="song__artist-image">
<img 
width={75}
height={75}   
   src={"https://i.scdn.co/image/ab67616d00001e02656f8291d741ad247ef330fe"} alt={`Imagem do artista ${name}`} />
</Link>
<Player/>
<div >
  <p className="song__name">Ultima Saudade</p>
  <p>Henrique</p>
</div>

</div>

    </div>
  )
}

export default Song

