import Card from "./components/Card";
import Header from "./components/Header";
import ToDo from "./components/To-DoContainer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App()
{
  const [user, setuser] = useState(
    [
      {
        username: "akash",
        password:"123"
      }
    ]
  )

  return(
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login user = {user} setuser = {setuser} />}></Route>
    <Route path='/signup' element={<Signup user = {user} setuser = {setuser}  />}></Route>
    <Route path='/landing' element={<Landing />}></Route>
    </Routes>
    
    </BrowserRouter>

    
  </div>
  )
}
export default App;
  