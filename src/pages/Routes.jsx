import { Routes,Route } from "react-router-dom";
import Home from "./Home"
import CLass  from "./class"
import {Edit} from "./Edit"
import { Login } from "./login/Login";
import { Register } from "./register/Register";
export  const Rout  = () =>{
 return(
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/class" element={<CLass/>}/>
         <Route path="/edit" element={<Edit/>}/>
         <Route path='login'element={<Login/>}></Route>
       <Route path='register'element={<Register/>}></Route>
         
     </Routes>
 )

}
