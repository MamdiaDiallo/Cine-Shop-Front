import React from 'react';
import { FilmsInt } from '../model/model';
import '../style/card.css'
import { formatCurrency } from '../utilities/formatCurrency';
import { useShopping } from '../context/Shopping';
import { Button } from 'react-bootstrap';
interface PropsFilm {
    allFilms:FilmsInt[] | null;
}
const Card: React.FC<PropsFilm>= ({allFilms}) => {

  const {  getItemQuantity, increasePanierQuantity, decreasePanierQuantity, removeFromPanier} = useShopping()

  
    return (
        <div className='car'>
          
    {allFilms?.map((film) => (
  <div className='carddiv' key={film.id}>
    <div className='card bg-dark rounded-20'>
      {  getItemQuantity(film.id)
}
    <img src={film.image} alt={film.title} /> 
  <h2>Titre : {film.title}</h2>
  <p>Description : {film.description}</p>
  <h5>Sortie en :{film.date}</h5>
  <h5>Genre : {film.genre}</h5>
  <h5>Vendu : {film.popularity}</h5>
  <h5>Prix: {film.prix} €</h5>

  </div>
  { getItemQuantity(film.id)
 === 0 ? (
  <Button className="w-1000 bg-cyan" onClick={() => increasePanierQuantity(film.id)}>Ajouter au panier </Button>
  ):
  <div className='d-flex align-items-center flex-column' style={{gap:".5rem"}}>
  <div className='d-flex align-items-center flex-column' style={{gap:".5rem"}}>
    <button onClick={() => decreasePanierQuantity(film.id)}>-</button>
    <div><span className='fs-3'>{getItemQuantity(film.id)}</span> dans le panier </div>
    <button onClick={() => increasePanierQuantity(film.id)}>+</button>
  </div>
<Button className="bg-danger sm" onClick={() => removeFromPanier(film.id)}>Remove</Button>
  </div>}
  </div>
    ))}

            
        </div>
    );
};

export default Card;