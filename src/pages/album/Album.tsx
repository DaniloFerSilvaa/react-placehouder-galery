import { api } from "../../helpers/PlacehouderApi"
import { GaleryType, PhotoType } from "../../types/type";
import { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import  styles  from './Album.module.css'


export const Album = () => {
     const [galery, setGalery] = useState<GaleryType>();
     const [photos, setPhotos] = useState<PhotoType[]>([]);
     const [load, setLoad] = useState(false);
     const navigate = useNavigate();
     const params = useParams();

     const loadGalery = async () => {
          setLoad(true);
          let galeryData = await api.getGalery(params.slug);
          let photosData = await api.getAllPhotos(params.slug)
          setGalery(galeryData);
          setPhotos(photosData);
          setLoad(false);
     }

     useEffect( () => {
          loadGalery();
     }, [])     

     const handleClick = ( id:number ) => {
          navigate(`/photo/${id}`)
     }    

     return (
     <div>
          {load &&
          <h3>Carregando.....</h3>
          }
          {!load && galery && photos.length &&
               <div>
                    <h1>{galery.title}</h1> 
                    <button onClick={() => {navigate(-1)}}>voltar</button>
                    <hr />
                    <div className={styles.photoArea}>
                         {
                              photos.map((item, index) => (
                         
                                   <div key={index} className={styles.post} onClick={() =>handleClick(item.id)}>
                                        <img src={item.thumbnailUrl} alt="" />
                                   </div>
                                   
                              ))
                         }
                    </div>
               </div>
               

          }
     </div>
    )
}