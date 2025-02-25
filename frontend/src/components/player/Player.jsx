import React, { useEffect, useState } from 'react'
import "./Player.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep, 
  faCirclePlay,faCirclePause,
  faForwardStep } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const formtTime=(timeInSeccond)=>{
  // Math.floor arredonda
  // .toString().padStart(2,0) formatando com duas casas
  const minutes=Math.floor(timeInSeccond/60).toString().padStart(2,"0")
  const seconds=Math.floor(timeInSeccond-minutes*60).toString().padStart(2,"0")
return `${minutes}:${seconds}` 

}

export default function Player({duration,randomIdFormatArt,randomId2FormatArt,audio}) {
 const audioPlayer=useRef();
 const [isPlay,setIsPlayer]=useState(false)
const [currentTime,setCurrentTime]=useState(formtTime(0))

 
 const playPause=()=>{
  // esta tocando 
  isPlay? audioPlayer.current.pause():audioPlayer.current.play();
  setIsPlayer(!isPlay)

 }
// rodar o conometro 
useEffect(()=>{
  const intervalId =  setInterval(()=>{
  // atualizar o cronometro em qual momento da musica esta 

  setCurrentTime(formtTime(audioPlayer.current.currentTime))
  },1000)
  //limpar
  return()=>clearInterval(intervalId)
  
},[isPlay])




  return (
    <div className='player'>
   <div className='player__controllers'>
<Link to={`/song/${randomIdFormatArt}`}>
<FontAwesomeIcon className=" player__icon" icon={faBackwardStep} />

</Link>
<FontAwesomeIcon className=" player__icon player__icon--play"
 icon={
  isPlay?faCirclePause:
  faCirclePlay}
 onClick={()=>{
  playPause()}}


 />

<Link to={`/song/${randomId2FormatArt}`}>
<FontAwesomeIcon className=" player__icon" icon={faForwardStep}

/>

</Link>

   </div>
   <div className='player__progress'>
<p >{currentTime}</p>
<div className='player__bar'>
    <div className='player__bar-progress'></div>
</div>
<p>{duration}</p>
   </div>
<audio 
ref={audioPlayer}
src={audio}></audio>
    </div>
  )
}
