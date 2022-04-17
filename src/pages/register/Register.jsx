
import  React, { useState } from "react"
import {Link}  from "react-router-dom"
import axios from "axios"
import "./Register.css"
import { useNavigate } from "react-router-dom"

export const Register =( ) =>{
    const navigate =useNavigate()
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleChange =e=>{
        const{name,value} =e.target
        

      
       
        setUser({
            ...user,
            [name]:value,
           
           
           
           
        })
    }

    const register   =()=>{
        const {name,email,password} = user
        
        if(name && email  && password ){
           
            axios.post("http://localhost:2345/register",user).then(res=>{alert(res.data.message)
         navigate("/login")
        
        })
           

        }else{
            alert ("Please fill all the spaces")
        }
       
    }

    return (
        <div>
            <div className="r2">
                {console.log(user)}
            
            <input className="r3" type="text" name="name" value={user.name} placeholder="Enter Your Name" onChange={handleChange}/>
            <br />
            <br />
            <input className="r3" type="text" name="email" value={user.email} placeholder="Enter Your E-mail"  onChange={handleChange}/>
            <br /><br />
            <input className="r3" type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange}/>
            <br />
            <br />
            <button className="r4" onClick={register}>Create Account</button>
            <br />
            <br />
            <div>Or Sign Up With</div>
            <br />
            <div className="r5">
                <button className="Gbtn1">
                 <img className="img1" src="https://i.ibb.co/PFnVMG7/Screenshot-2022-03-30-220226.png" alt="" />
                
                </button>
                <button className="Gbtn2">
                    <img className="img2" src="https://i.ibb.co/1fNJnVd/Screenshot-2022-03-30-215245.png" alt="" />
                </button>
            </div>
            <br />
            <br />
            <label className="label" htmlFor="">Already have account ?</label>
            <Link className="link" to="/login">Login</Link>
            {/* <button className="r4">Log in</button> */}
            
            </div>
        </div>
    )
}