import React , { useEffect, useState }  from 'react'

export default function Menu() {
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
        <div class="text-center text-4xl text-orange-700 "><p>TODAY'S MENU</p></div>
          <div class="bg-white shadow-md rounded my-6 h-screen">
              <table class="min-w-max w-full table-auto">
                  <thead>
                      <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                          <th class="py-3 px-6 text-left cursor-pointer">Name</th>
                          
                      </tr>
                  </thead>
             
  
              <tbody class="text-gray-600 text-sm font-light">
                {
  
                  name.map((item)=>
                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-left whitespace-nowrap">{item.name}</td>
                  
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
