import React from 'react'
import "./Song.css"
import { Link } from 'react-router-dom'

export default function SongItem({image ,name, duration, index,id}) {

   
  return (
    <Link to={`/song/${id}`} className='song-item'>
   <div className='song-item__number-album'>
   
     <p>{index+1}</p>
    
    <div className='song-item__album'>
     <img 
     className='song-item__image'
     src={image} alt={`Imagem da Música ${name}`} />
   
   <p className='song-item__name'>{name}</p>
   </div>
   </div>
   <p>{duration}</p>
   
    </Link>
  )
}
