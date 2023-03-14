import { api } from "../../helpers/PlacehouderApi"
import { GaleryType } from "../../types/type";
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import  styles  from './Galery.module.css'


export const Galery = () => {
     const [galerys, setGalery] = useState<GaleryType[]>([]);
     const [load, setLoad] = useState(false);
     const navigate = useNavigate();

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

     return (
     <div>
          {load &&
               <div><h3>Carregando...</h3></div>
          }

          {!load && galerys.length &&
               galerys.map((item, index)=>(
                    <div key={index} 
                    className={styles.list} 
                    onClick={() => handleClick(item.id)}
                    >
                         {item.title} <br />
                    </div> 
               ))
          }
     </div>
    )
}