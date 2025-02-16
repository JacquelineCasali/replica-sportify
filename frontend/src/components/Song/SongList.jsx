import React, { useState } from 'react'
import "./Song.css"
import SongItem from './SongItem'
export default function SongList({songsArray}) {
 //  mostrar so cinco musicas

const [items,setItems]=useState(5)
 
  return (

 
 
 
 <div className='song-list'>


{songsArray.filter((currentValue,index)=>index<items).map((songs,index)=>(
 <SongItem 
 index={index}
 key={index}
 {...songs}/>
))}
      

{/* adicionado mais 5 lista  */}
 <p className='song-list__see-more'onClick={()=>{setItems(items + 5)
 
 }}>Ver Mais</p>
    </div>
  
  )
}
