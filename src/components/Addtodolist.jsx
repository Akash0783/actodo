import { useState } from "react"
import Todoitem from "./Todoitem"

function Todolist(props){
    const listactivity = props.listactivity
    const setlistactivity = props.setlistactivity
   
    return(
        <div className='bg-[#BDB4EA] border rounded-md p-2 flex-grow'> 
        <h1 className='text-2xl font-medium'>Today's Activity</h1>
        {listactivity.length===0?  <p>You Haven't Added anything yet</p>: " "}    
        {
         listactivity.map(function(item,index){
         return(<Todoitem item={item} index= {index} listactivity = {listactivity} setlistactivity = {setlistactivity} id={item.id} />)})
        }
    </div>
    )
}
export default Todolist