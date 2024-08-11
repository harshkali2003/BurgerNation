import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function SignUp() {
    const [fName , setFName] = useState("")
    const [lName , setLName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const navigate = useNavigate()

    const userRegister = async (e)=>{
      e.preventDefault()
       let data = await fetch('http://localhost:5000/register' , {
          method:'post',
          body:JSON.stringify({fName,lName,email,password}),
          headers : {'Content-Type' : 'application/json'}
        })
        let result = await data.json()
        console.log(result);
        if(result){
          navigate('/log')
          localStorage.setItem('user',JSON.stringify(result))
        }
        else{
          navigate('/sign')
        }
        
    }
  return (
    <div class="flex items-center justify-center bg-gradient-to-r from-white to-blue-600 h-screen w-screen">
      <form class="bg-transparent ">
      <input type="text" placeholder='First Name' class="block text-xl rounded-lg w-64 mb-7 p-2" value={fName} onChange={(e)=>{setFName(e.target.value)}}/>
      <input type="text" placeholder='Last Name' class="block text-xl rounded-lg w-64 mb-7 p-2"value={lName} onChange={(e)=>{setLName(e.target.value)}}/>
      <input type="email" placeholder='Email' class="block text-xl rounded-lg w-64 mb-7 p-2" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <input type="password" placeholder='Password' class="block text-xl rounded-lg w-64 mb-7 p-2" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <button class="text-2xl text-white border-2 text-center w-full rounded-md" onClick={userRegister}>SIGN UP</button>
      </form>
    </div>
  )
}
