function Todoitem(props){

    const listactivity = props.listactivity
    const setlistactivity = props.setlistactivity
    
    const handleDelete = (removeid)=>{

       var temparr = listactivity.filter(function(item){

        if(item.id == removeid){
            return false
        }
        else{
            return true
        }
       })
         setlistactivity(temparr)
    }
    
    return(
        <div className='flex justify-between'>
            <p>{props.index+1} {props.item.Activity}</p>
            <button className='text-red-500' onClick={ ()=>handleDelete(props.id)}>Delete</button>
        </div>
    )
}
export default Todoitem