import React, {useState} from 'react'
import { useNavigate , Link} from 'react-router-dom'

export default function LogIn() {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    
    const navigate = useNavigate()

    const userLog = async (e)=>{
        e.preventDefault()
        let data = await fetch('http://localhost:5000/login' ,{
          method:'post',
          body:JSON.stringify({email , password}),
          headers : {'Content-Type' : 'application/json'}
        })
        let result = await data.json()
        console.log("LOGGED IN");
        if(result){
          navigate('/')
          localStorage.setItem('data',JSON.stringify(result))
        }
        else{
          navigate('/sign')
        }
    }
  return (
    <div class="flex items-center justify-center bg-gradient-to-r from-gray-500 to-indigo-500 h-screen w-screen">
    <form class="bg-transparent ">
    
    <input type="email" placeholder='Email' class="block text-xl rounded-lg w-64 mb-7 p-2" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <input type="password" placeholder='Password' class="block text-xl rounded-lg w-64 mb-7 p-2" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <button class="text-2xl text-white border-2 text-center w-full rounded-md" onClick={userLog}>LOG IN</button>
    <p class="block text-xl text-white mt-7">New User <span class="text-red-600 ml-2"><Link to="/sign">Sign Up</Link></span></p>
    </form>
  </div>
  )
}
