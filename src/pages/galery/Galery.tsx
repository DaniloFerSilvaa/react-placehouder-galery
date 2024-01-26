import { api } from "../../helpers/PlacehouderApi"
import { GaleryType } from "../../types/type";
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import  styles  from './Galery.module.css'
import { sacarCarta, Carta } from "../../types/typesCards";

export const Galery = () => {
     const [galerys, setGalery] = useState<GaleryType[]>([]);
     const [load, setLoad] = useState(false);
     const navigate = useNavigate();
     const [carta, setCarta] = useState<Carta>()

     const loadGalery = async () => {
          setLoad(true);
          let json = await api.getAllGalery();
          setGalery(json);
          setLoad(false);
     }

     useEffect( () => {
          loadGalery();
     }, [])     

     const handleClick = (albumId:number) => {
          navigate(`/album/${albumId}`)
     }


     const handleCards = () => {
          const carta = sacarCarta()
          setCarta(carta);
     }

     return (
     <div>
          {load &&
               <div><h3>Carregando.....</h3></div>
          }

          <div className={styles.cards}>
               Carta: naipe:{carta?.naipe} <br/> valor: {carta?.valor} <br/>
               <button
                    onClick={() => handleCards()}
               >SACAR CARTA</button>
          </div>

          {!load && galerys.length &&
               <ul className={styles.ul}>
                    {
                         galerys.map((item, index) => (
                         <li key={index} 
                         className={styles.list} 
                         onClick={() => handleClick(item.id)}
                         >
                              {item.title} <br />
                         </li> 
                    ))
                    }
               </ul>
          }
          
     </div>
    )
}