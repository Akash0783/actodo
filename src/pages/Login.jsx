import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login(props){
    const [userinput, setuserinput] = useState("")
    const [passwordinput, setpasswordinput] = useState("")
    const [ruser, setRuser] =useState(true)  
    const navigate = useNavigate()
    const user = props.user
    const setuser = props.setuser
    
    const checkUser = ()=>{
      var userfound = false
      user.forEach(function(item){
        if(item.username===userinput && item.password===passwordinput){
          console.log("Login Success")
          userfound = true
          navigate("/landing", {state:{user:userinput}})
        }
      })
      if(userfound===false){
        console.log("Login Failed")
      }
    }

    const handleUinput = (evt)=>{
        setuserinput(evt.target.value)
    }
    const handlePinput = (evt)=>{
        setpasswordinput(evt.target.value)
    }
    return(
        <div className='bg-black p-10'>
        <div className='bg-[#EFEFEF] p-10  border rounded-md '>
           <h1 className='text-3xl font-medium'>Login</h1>
           {ruser? <p>I help you manage your activities after you login :)</p>: <p className='text-red-400'>Please Signup before you login!!</p>} 
           <div className="flex flex-col gap-2 my-2">
             <input onChange={handleUinput}  className="w-52 p-1 border-black border rounded-md bg-transparent" type="text" placeholder="Username" />
             <input onChange={handlePinput}  className="w-52 p-1 border-black border rounded-md bg-transparent" type="password" placeholder="Password" />
             <button onClick={checkUser} className="bg-[#8272DA] w-24 p-1 rounded-md">Login</button>
             <p>Dont have an account? <Link to={"/signup"} className='underline'>Signup</Link></p>
           </div>
        </div>
    </div>
    )
}
export default Login