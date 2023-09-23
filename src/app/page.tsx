'use client'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [categories, setCategories] = useState(['Cats'])

  const search = (newCategory:any) =>{
    if (!categories.includes(newCategory)){
      setCategories([ newCategory, ...categories]);
    }    
  }

  return (
    <div className=" bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x flex flex-col justify-start items-start p-10 w-100">
      <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold mb-4 text-white animate-float">
        Giffy App
      </h1>
      <p className="text-lg md:text-2xl lg:text-2xl mb-8 text-white">
      The app to find the best gifs on the internet.

      <a
        href="https://github.com/DaianaArena"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-lg md:text-2xl lg:text-2xl pl-1 text-yellow-300 "
      >
        
          Developed by Daiana Arena ♥ 
          
      </a>
      </p>

      
      <AddCategory 
        onNewCategory={(e:any) => search(e)}
      /> 
      
      

   
            
        
        {
          categories.map(category => 

            <GifGrid key={category} category={category}/>
            
                
          
          )
        }
     



      
    </div>
  )
}
//<button onClick={search}>Search</button>