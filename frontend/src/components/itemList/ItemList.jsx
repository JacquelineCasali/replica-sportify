/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";
import SingleItem from "../singleItem/SingleItem";
import "./ItemList.css"


const ItemList=({title,items,itemsArray, path,idPath})=> {
 
  return (
    <div className="item-list">
    <div className="item-list__header">

<h2>{title} populares </h2>
<Link to={path} >Mostrar tudo</Link>
</div>

<div className="item-list__container">

{/* quantidade que aparece na tela usa o filter index menor*/}
{itemsArray.filter((currentValue,index)=>index < items)
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