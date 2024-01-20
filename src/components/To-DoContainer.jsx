import Addtodoform from "./Addtodoform"
import Addtodolist from "./Addtodolist"
import { useState } from "react"

function ToDo(){
    const [listactivity, setlistactivity] = useState([{id:1, Activity:"Go for a Walk"},{id:2, Activity:"Have Breakfast"}, {id:3, Activity:"Take a Shower"}])
    return(
        <div>
           <div className="flex gap-5 flex-wrap">
             <Addtodoform listactivity = {listactivity} setlistactivity = {setlistactivity}></Addtodoform>
             <Addtodolist listactivity = {listactivity} setlistactivity = {setlistactivity}></Addtodolist>
           </div>
        </div> 
    )
}
export default ToDo
