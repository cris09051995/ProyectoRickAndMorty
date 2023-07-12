import style from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import characters from './data.js';


function App() {
   return (
      <div className= {style.App}>
         <div >
            <Nav/>
            <Cards characters={characters} />
         </div>
      </div>
   );
}

export default App;
