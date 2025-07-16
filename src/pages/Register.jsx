import React, { useState } from 'react'

const Register = () => {
    const [userData, setUserData]= useState({
        name:"",
        email: "",
        password: ""

    })

    const changeHandler=(e)=>{
setUserData(prev=>({...prev, [e.target.name]: e.target.value}))
    }
     const registerButton=()=>{
        console.log(userData)
        setUserData({
            name: "",
            email: "",
            password: ""
        })
     }
  return (
    <div>
 <div>New to Pavilion Bank? Register Here</div>
 <div>
    <label> Name </label>
    <input type='text' name='name' value={userData.name} onChange={changeHandler}/>
 </div>
 <div>
    <label> Email </label>
    <input type='email' name='email' value={userData.email}  onChange={changeHandler}/>
 </div>
 <div>
    <label> Password </label>
    <input type='password' name='password' value={userData.password}  onChange={changeHandler}/>
 </div>
 <div>
    <button onClick={registerButton}> Register</button>
 </div>
 

    </div>
   

  )
}

export default Register