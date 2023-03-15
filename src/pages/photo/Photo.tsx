import { api } from "../../helpers/PlacehouderApi"
import { GaleryType, PhotoType } from "../../types/type";
import { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import  styles  from './Photo.module.css'

export const Photo = () => {
     const [photo, setPhoto] = useState<PhotoType>();
     const [load, setLoad] = useState(false);
     const navigate = useNavigate();
     const params = useParams();

     const loadPhoto = async () => {
          setLoad(true);
          let json = await api.getPhoto(params.slug);
          setPhoto(json);
          setLoad(false);
     }

     useEffect( () => {
          loadPhoto();
     }, [])     

     return (
     <div>
          {load &&
               <div><h3>Carregando...</h3></div>
          }

          {!load && photo &&
          <div>
               <div className={styles.title}>
               <h3>{photo.title}</h3>
               <button onClick={() => {navigate(-1)}}>voltar</button>
               </div>
              <img src={photo.url} alt="" />
          </div>
          }
     </div>
    )
}