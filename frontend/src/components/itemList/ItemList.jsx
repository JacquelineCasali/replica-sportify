


import { Link,useLocation } from "react-router-dom";
import SingleItem from "../singleItem/SingleItem";
import "./ItemList.css"


const ItemList=({title,items,itemsArray, path,idPath})=> {
 {/* descobrindo em qua url estou  */}
  const {pathname}= useLocation()
  //true esta na home falso nao esta na home
const isHome= pathname === "/"
  // na home mostrar a quantidade determinada fora mostrar tudo 
    const finalItems=isHome?items:Infinity;



  return (
    <div className="item-list">
    <div className="item-list__header">

<h2>{title} populares </h2>


{/* so mostra o mostrar tudo na home  */}
{isHome?( <Link to={path} >Mostrar tudo</Link>):(<></>) }

</div>

<div className="item-list__container">

{/* quantidade que aparece na tela usa o filter index menor*/}
{itemsArray.filter((currentValue,index)=>index < finalItems)
.map((currObj,index)=><SingleItem 
idPath={idPath}
key={`${title}-${index}`}
{...currObj}
/>)}



</div>

    </div>
  )
}
export default ItemList;