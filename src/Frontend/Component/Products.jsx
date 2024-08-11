import React, { useEffect, useState } from 'react'

export default function Products() {
  const [name , setName] = useState([])

  useEffect(()=>{
    fetchProduct()
  },[])

  const fetchProduct = async ()=>{
    let data = await fetch('http://localhost:5000/products')
    data = await data.json()
    setName(data)
  }
  console.log(name);
  

  return (
   
  <>

  <div class="container mx-auto">
        <div class="bg-white shadow-md rounded my-6 h-screen">
            <table class="min-w-max w-full table-auto">
                <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-left cursor-pointer">Name</th>
                        <th class="py-3 px-6 text-left cursor-pointer">TYPE</th>
                        <th class="py-3 px-6 text-left cursor-pointer">PRICE</th>
                    </tr>
                </thead>
           

            <tbody class="text-gray-600 text-sm font-light">
              {

                name.map((item)=>
                  <tr class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-3 px-6 text-left whitespace-nowrap">{item.name}</td>
                <td class="py-3 px-6 text-left">{item.type}</td>
                <td class="py-3 px-6 text-left">{item.price}</td>
                </tr>
                
                )

              }
                  
                
                </tbody>

         
            </table>
        </div>
    </div>
     </>
  
    )
  }
