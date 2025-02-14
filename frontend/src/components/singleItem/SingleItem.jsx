/* eslint-disable react/prop-types */
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SingleItem.css"
import { Link } from "react-router-dom";


export default function SingleItem({id,name,image,artist,idPath}) {
  return (
<Link  to={`${idPath}/${id}`} className="single-item">
<div className="single-item__div-image-button">


<div className="single-item__div-image">
<img src={image} alt={`Imagem do artista ${name}`} />

</div>
<FontAwesomeIcon className="single-item__icon "icon={faCirclePlay} />
</div>

<div className="single-item__texts">
<div className="single-item__2lines">
<p className="single-item__title">{name}</p>
</div>


<p className="single-item__type">{artist ? artist :"Artista"}</p>
</div>

</Link>
  )
}
