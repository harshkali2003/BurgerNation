import React from 'react'
import backPic from '../Images/BURGERS DAY.png'
import veg from '../Images/pexels-valeriya-1639565.jpg'
import chicken from '../Images/pexels-valeriya-1199957.jpg'
import plain from '../Images/pexels-marta-dzedyshko-1042863-2067403.jpg'

export default function Main() {
  return (
    <>
    <div    >
      <div class="h-screen">
        <img src={backPic} alt="" class="h-screen w-screen"/>
        </div>
   
      <section class="py-12">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-semibold text-gray-800">Our Burgers</h2>
                <p class="mt-4 text-gray-600">delicious tasty burgers in the town</p>
            </div>
            <div class="flex flex-wrap justify-center">
                <div class="w-full md:w-1/3 p-4">
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
                        <img src={veg} alt="Veg Burger" class="w-full h-48 object-cover"/>
                        <div class="p-6">
                            <h3 class="text-2xl font-semibold text-gray-800">Veg Burger</h3>
                            <p class="mt-4 text-gray-600">A veggie burger is a hamburger made with a patty that does not contain meat, or the patty of such a hamburger</p>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/3 p-4">
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
                        <img src={chicken} alt="Chicken Burger" class="w-full h-48 object-cover"/>
                        <div class="p-6">
                            <h3 class="text-2xl font-semibold text-gray-800">Chicken Burger</h3>
                            <p class="mt-4 text-gray-600"> Crispy seasoned chicken breast, topped with mandatory melted cheese, piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo</p>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/3 p-4">
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
                        <img src={plain} alt="Plain Burger" class="w-full h-48 object-cover"/>
                        <div class="p-6">
                            <h3 class="text-2xl font-semibold text-gray-800">Plain Burger</h3>
                            <p class="mt-4 text-gray-600">Freshly baked toasted buns using old-fashioned, slow-rising sponge dough. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
    
    </>
  )
}
