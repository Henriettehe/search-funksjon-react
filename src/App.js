import './App.css';
import Main from './components/Main';
import './recipes.css';
import {Route, Routes} from 'react-router-dom'
import RecipePage from './components/RecipePage';
//import recipes from './resources/recipes';
import Layout from './components/Layout';
import { useEffect, useState } from 'react';

function App() {

  //Lager en state, for å holde på dataen. 
  const [recipes, setRecipes] = useState([])
  //Lager søkestate: 
  const [search, setSearch] = useState('chicken')

  const getRecipes = async() =>{
      const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=3c7a2588&app_key=c1b0e527c39077ebaa8bb2412b7ebd3d`)
      const data = await response.json()
      console.log(data.hits)
      setRecipes(data.hits)
      
  }
  console.log("sjekk", search)

  //For å holde på sideeffekter av de ulike funksjonene, useEffect - brukes for å kjøre en kodedel på nytt. Eks ved tastetrykk etc. Legger du noe inni [] legegr du en betingelse. 
  useEffect(() => {
    getRecipes()
  }, [])
 
  return (
   <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Main recipes={recipes} setSearch={setSearch} getRecipes={setRecipes}/>} />
        <Route path=':slug' element={<RecipePage recipes={recipes} />} />
      </Route>     
   </Routes>
  
  );
}

export default App;

