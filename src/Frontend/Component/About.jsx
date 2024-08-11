import React from "react";



export default function About() {
  
  return (
    <div class="bg-gray-100">
  
    <section class="bg-cover bg-center h-screen" >
        <div class="bg-black bg-opacity-50 h-full flex items-center justify-center">
            <h1 class="text-yellow-500 text-5xl font-bold">Welcome to Burger Nation</h1>
        </div>
    </section>

    <section class="py-12">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-semibold text-gray-800">Our Story</h2>
                <p class="mt-4 text-gray-600">From a small food truck to a beloved burger joint, discover our journey.</p>
            </div>
            <div class="flex flex-wrap justify-center">
                <div class="w-full md:w-1/3 p-4">
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
                        <img src="https://example.com/history.jpg" alt="Our History" class="w-full h-48 object-cover"/>
                        <div class="p-6">
                            <h3 class="text-2xl font-semibold text-gray-800">Our History</h3>
                            <p class="mt-4 text-gray-600">Founded in 2010, Burger Haven started as a small food truck on the streets of New York City...</p>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/3 p-4">
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
                        <img src="https://example.com/ingredients.jpg" alt="Our Ingredients" class="w-full h-48 object-cover"/>
                        <div class="p-6">
                            <h3 class="text-2xl font-semibold text-gray-800">Our Ingredients</h3>
                            <p class="mt-4 text-gray-600">We believe in using only the freshest ingredients to create our signature burgers...</p>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/3 p-4">
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
                        <img src="https://example.com/community.jpg" alt="Community" class="w-full h-48 object-cover"/>
                        <div class="p-6">
                            <h3 class="text-2xl font-semibold text-gray-800">Community</h3>
                            <p class="mt-4 text-gray-600">Burger Haven is committed to giving back to the community that has supported us...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section class="bg-gray-50 py-12">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-semibold text-gray-800">Meet Us</h2>
                <p class="mt-4 text-gray-600">The people behind the perfect burger.</p>
            </div>
            <div class="flex flex-wrap justify-center">
               
                <div class="w-full sm:w-1/2 md:w-1/4 p-4">
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="https://example.com/manager.jpg" alt="Restaurant Manager" class="w-full h-48 object-cover"/>
                        <div class="p-6 text-center">
                            <h3 class="text-xl font-semibold text-gray-800">Harsh Vardhan</h3>
                            <p class="text-gray-600">Founder</p>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </section>

  
    <footer class="bg-gray-800 py-6">
        <div class="container mx-auto text-center text-white">
            <p>&copy; 2024 Burger Haven. All rights reserved.</p>
        </div>
    </footer>
    </div>
  );
}
 