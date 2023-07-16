import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   return (
      <div className={style.cards}>
         {props.characters.map((pj) => {
            return (
            <Card 
               id = {pj.id}
               name = {pj.name}
               species = {pj.species}
               gender = {pj.gender}
               image = {pj.image}
               onClose = {props.onClose}
            />
            )
         })}
      </div>
      )
}
