import React from 'react'
import { useNavigate } from "react-router-dom";


export default function User() {

  const auth = localStorage.getItem('user')
  const navigate = useNavigate()
  const removeUser =()=>{
    localStorage.clear()
    navigate('/log')
  }

  return (
    <div class="bg-gray-300 h-screen flex items-center justify-center">
         <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        <div class="text-center">
            <h2 class="text-2xl font-semibold text-gray-700">User Information</h2>
            <div class="mt-4">
                <p class="text-gray-600 text-sm">Name:</p>
                <p class="text-lg text-gray-800 font-medium" id="userName">{JSON.parse(auth).fName} {JSON.parse(auth).lName}</p>
            </div>
            <div class="mt-4">
                <p class="text-gray-600 text-sm">Email:</p>
                <p class="text-lg text-gray-800 font-medium" id="userEmail">{JSON.parse(auth).email}</p>
            </div>
            <div class="mt-6">
                <button id="logoutButton" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition" onClick={removeUser}>
                    Logout
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}
