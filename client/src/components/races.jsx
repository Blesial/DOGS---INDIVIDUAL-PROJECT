// import {Link} from 'react-router-dom';
// import { connect } from 'react-redux'; // CONECTA COMPONENTE CON EL ALMACEN. 
// import { addCharacter } from "../redux/actions";
// import { deleteCharacter } from "../redux/actions";
// import { useState, useEffect } from "react";
import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { fetchRaces } from "../actions";
import Race from "./race";
// import 'bootstrap/dist/css/bootstrap.min.css'



export default function Races () {
   const dispatch = useDispatch()
   const store = useSelector(store => store)
   useEffect(()=>{
      dispatch(fetchRaces())
   }, [dispatch]); // ver si genera problemas meter el dispatch ahi . soluciona un error que me tira react 
   return (
      <div>
         { store.race.length > 0 ? store.race.map((race) => {
            return <Race key={race.id} name={race.name} image={race.image} temperaments={race.temperaments} weight={race.weight}/>}) :
         store.races.map((race) => {
         return <Race key={race.id} name={race.name} image={race.image} temperaments={race.temperaments} weight={race.weight}/>
         })}
      </div>
   )
}

// }, LA IMAGE ME LLEGA ASI CUANDO APLICO EL SEARCH. 
// "id": 1,
// "name": "Affenpinscher",
// "bred_for": "Small rodent hunting, lapdog",
// "breed_group": "Toy",
// "life_span": "10 - 12 years",
// "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
// "origin": "Germany, France",
// "reference_image_id": "BJa4kxc4X",
// "image": {
//    "id": "BJa4kxc4X",
//    "width": 1600,
//    "height": 1199,
//    "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
// }
// },
// function Example(props) {
//    const [isFav, setIsFav] = useState (false);

//    useEffect(() => {
//       props.myFavorites.forEach((fav) => {
//          if (fav.id === props.id) {
//             setIsFav(true);
//          }
//       });
//    }, [props.myFavorites, props.id]);

//    const handleFavorite = () => {
//       if (isFav === true) {
//          setIsFav(false);
//          props.deleteCharacter(props.id)
//       }
//       else {
//          setIsFav(true);
//          props.addCharacter(props)
//       }
//    }

//    return (
     
//       <div className='card text-center bg-black'>
//        <button className='btn btn-outline-dark' onClick={() => {props.onClose(props.id)}}>X</button>

//        <img src={props.image} alt={props.name} />
//          <div className="card-body text-white">
//          <h2 className="card-title">{props.name}</h2>
//          <div className="card-text text-secondary">
//          <p>{props.species}</p>
//          <p>{props.gender}</p>
//          </div>
//          { isFav ? (
//             <button onClick={handleFavorite}> ❤️ </button>
//          ) : (
//             <button onClick={handleFavorite}>🤍</button>
//          )}
//          <Link to={`/detail/${props.id}`}>
//        <button className='btn btn-outline-dark'>DETAIL</button>
//          </Link>

//          </div>
//          </div>
//    );
// }


// export function mapStateToProps (state) {
//     return {
//        myFavorites: state.myFavorites // PASA POR PROPS LO QUE ESTAMOS SOLICITANDOLE AL ESTADO GLOBAL
//     }
//  }
 
 
//  export function mapDispatchToProps (dispatch) { // Y ESTA PARA PODER ENVIAR ACTIONS AL STORE DESDE LOS COMPONENTES DE REACT
//     return {
//        addCharacter: function (character) {
//           dispatch(addCharacter(character))
//        },
//        deleteCharacter: function (id) {
//           dispatch(deleteCharacter(id))
//        }
//     }
//  }
 
//  export default connect (mapStateToProps, mapDispatchToProps)(Example)
//  // RECIBE 2 ARGUMENTOS.  1 : MAPEA EL ESTADO GLOBAL DE LA APP A LA PROP DEL COMPONENTE.
 
//  // PARA CONECTAR EL STORE CON CADA COMPONENTE. DE ESTA MANERA EL COMPONENTE RECIBE POR PROPS EL ESTADO Q NECESITA DEL STORE. CADA VEZ Q EL STORE
//  // SE MODIFICA, SE ACTUALIZARA EL COMPONENTE.  RECORDAR Q CADA VEZ Q SE ACTUALIZA EL ESTADO DE COMPONENTE SE ACTUALIZARA EL COMPONENTE. 