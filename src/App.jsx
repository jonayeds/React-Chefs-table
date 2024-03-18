


import { useState } from 'react'
import Header from './components/header'
import Cooking from './components/main/cooking'
import Recipes from './components/main/recipes'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  
  
  
  const [singleItem, setSingleItem] = useState([])
  const [preparing, setPreparing] = useState([])
  const handlePreparing = (p) =>{
    
    const filterItems = singleItem.filter(item => p.recipe_id != item.recipe_id)
    const newItems = [...filterItems]
    setSingleItem(newItems)
    const newPreparing = [...preparing, p]
    setPreparing(newPreparing)
  }
    const handleWantToCook = p =>{
      const isExist = singleItem.find(item => p.recipe_id === item.recipe_id)
      console.log(isExist)
      if(!isExist){
        const newList = [...singleItem, p]
        setSingleItem(newList) 
      } 
      else{
         toast("Already Selected!")
       }
    }
    // console.log(preparing)

  return (
    <div className='max-w-[1270px] mx-auto'>
     <Header></Header>
     <main>
      <div className='text-center mt-24'>
      <h1 className='text-5xl font-bold'>Our Recipes</h1>
      <p className='mt-10 font-semibold text-gray-600 '>Welcome to our collection of mouthwatering recipes that will tantalize your taste buds and inspire your culinary adventures! <br /> Whether you are a seasoned chef or a novice in the kitchen, our curated list of recipes offers something for everyone.</p>
      </div>
      <div className='mt-20 flex justify-center gap-10 flex-col lg:flex-row '>
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <Cooking singleItem={singleItem} handlePreparing={handlePreparing} preparing={preparing}></Cooking>
      </div>
      
     </main>
     
     <ToastContainer />
    </div>
  )
}

export default App
