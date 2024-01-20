import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function Signup(props){

    const user = props.user
    const setuser = props.setuser
    const navigate = useNavigate()
    const [userinput, setuserinput] = useState("")
    const [passwordinput, setpasswordinput] = useState("")

    const handleUinput = (evt)=>{
        setuserinput(evt.target.value)
    }
    const handlePinput = (evt)=>{
        setpasswordinput(evt.target.value)
    }

    const addUser = ()=>{
       setuser([...user,{username:userinput,password:passwordinput}])   
       console.log(user)
       navigate("/")
    }

    return( 
        <div className='bg-black p-10'>
            <div className='bg-[#EFEFEF] p-10  border rounded-md '>
               <h1 className='text-3xl font-medium'>Hey Hi</h1>
               <p>Sign Up here</p>

               <div className="flex flex-col gap-2 my-2">
                 <input onChange={handleUinput} className="w-52 p-1 border-black border rounded-md bg-transparent" type="text" placeholder="Username" />
                 <input onChange={handlePinput} className="w-52 p-1 border-black border rounded-md bg-transparent" type="password" placeholder="Password" />
                 <input className="w-52 p-1 border-black border rounded-md bg-transparent" type="password" placeholder="Confirm Password" />
                 <button onClick={addUser} className="bg-[#FCA201] w-24 p-1 rounded-md">Signup</button>
                 <p>Already have an account? <Link to={"/"} className='underline'>Login</Link></p>
               </div>
            </div>
        </div>
    )
}
export default Signup