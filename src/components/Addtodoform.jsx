import { useState } from "react"

function Addtodoform(props){
    const listactivity = props.listactivity
    const setlistactivity = props.setlistactivity

    const [newActivity, setnewActivity] = useState("")
    const handleChange = (evt)=>{
        setnewActivity(evt.target.value)
    }
    const handleClick = ()=>{
        setlistactivity([...listactivity,{id:listactivity.length+1, Activity: newActivity} ])
    }

    return(
            <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-medium '>Manage Activities</h1>
            <div>
                <input  value={newActivity} onChange={handleChange}  className= 'border border-black bg-transparent p-1' placeholder="Next Activity?"/>
                <button onClick={handleClick} className='bg-black text-white p-1 border border-black'>Add</button>
            </div>
            </div>
    )
}
export default Addtodoform