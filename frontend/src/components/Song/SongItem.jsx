import React from 'react'
import "./Song.css"
import { Link } from 'react-router-dom'
import { songsArray } from '../../database/songs'
export default function SongItem({name}) {
// const { image ,name, duration, artist,    audio}=data
   
  return (
    <Link to="/song/1" className='song-item'>
   <div className='song-item__number-album'>
   
     <p>1</p>
    
    <div className='song-item__album'>
     <img 
     className='song-item__image'
     src={"https://i.scdn.co/image/ab67616d00001e02656f8291d741ad247ef330fe"} alt={`Imagem do artista ${name}`} />
   
   <p className='song-item__name'>Ultima Saudade</p>
   </div>
   </div>
   <p>02:30</p>
   
    </Link>
  )
}
