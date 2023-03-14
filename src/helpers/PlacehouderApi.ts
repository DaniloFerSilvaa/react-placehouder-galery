import axios from "axios"

const axiosInstance = axios.create({
     baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const api = {
     getAllGalery: async () => {
          let response = await axiosInstance.get('albums');
          return response.data;
     },
     getGalery:async (id:number) => {
          let response = await axiosInstance.get(`albums/${id}`);
          return response.data;
     },
     getAllPhotos:async (albumId:number) => {
          let response = await axiosInstance.get(`albums/${albumId}/photos`);
          return response.data;
     },
     getPhoto:async (id:number) => {
          let response = await axiosInstance.get(`photos/${id}`);
          return response.data;
     }
}