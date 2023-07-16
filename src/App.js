import style from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import React, {useState} from 'react';
import axios from "axios"

// const example = {
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//    },
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };

function App() {
   // const array = useState([])//useState() siempre retorna un array, ---> [state, setState]
   // const state = array[0]
   // const setState = array[1]
   function onSearch(id) {
      //! funcion que agrega personajes
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      }
      ).catch(err => console.log(err))
   }

   function onClose(id){
      //! funcion que elimina personajes
      setCharacters(
         characters.filter((pj) => {
            return pj.id !== id
         })
      )

   }

   const [characters, setCharacters] = useState([])
   
   return (
      <div className= {style.App}>
         <div >
            <Nav onSearch={onSearch}/>
            <Cards characters = {characters} onClose = {onClose}/>
         </div>
      </div>
   );
}

export default App;
