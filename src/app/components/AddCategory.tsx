'use client'
import { useState } from "react"


const AddCategory = ( {onNewCategory}: any) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChanged = (e: any)=> {
        setInputValue(e.target.value);
    }

    const onSubmit = (e: any)=> {
        e.preventDefault();
        if (inputValue.length >= 1){
            onNewCategory(inputValue)
            //setCategories((categories:any) => [inputValue, ...categories])
            setInputValue("")
        }
        
    }

  return (
    <form onSubmit={e => onSubmit(e)} className="text-lg md:text-2xl lg:text-2xl mb-8 bg-yellow-400 w-60">
        <input 
            type='text'
            placeholder="Search a gif"
            value={inputValue} 
            onChange={e => onInputChanged(e)}
            className="text-lg md:text-2xl lg:text-2xl p-2 w-100 "
        />
    </form>    
  )
}

export default AddCategory //