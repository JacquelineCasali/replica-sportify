import "../header/header.css"
import logo from "../../assets/logo/spotify-logo.png"
import { Link } from "react-router-dom"
export default function Header() {
  return (
    <div className="header">
   <Link to={"/"}>
   <img src={logo} alt="logo" />
   </Link>
   
   
   <Link to ={"/"}>
   <h1>
   Spotify
   </h1>
  </Link>
    </div>
  )
}
