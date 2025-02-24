import React, { useState } from 'react'
import "./Player.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep, 
  faCirclePlay,faCirclePause,
  faForwardStep } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useRef } from 'react'



export default function Player({duration,randomIdFormatArt,randomId2FormatArt,audio}) {
 const audioPlayer=useRef();
 const [isPlay,setIsPlayer]=useState(false)
//  console.log(audioPlayer,current)
 
 const playPause=()=>{
  // esta tocando 
  isPlay? audioPlayer.current.pause():audioPlayer.current.play();
  setIsPlayer(!isPlay)
 }
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
<p >00:00</p>
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
