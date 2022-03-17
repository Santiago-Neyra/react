import React, {useEffect, useState} from "react";
import Lista from "../elementos.json"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/itemList";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../utils/firebase";

export const ItemListContainer =({greeting})=> {
    const [productos, setProductos]= useState([]);
    
    const {categoriaId} = useParams();
    useEffect(()=>{
        
    },[])
     

    console.log(categoriaId)
    useEffect(()=>{
    const getData= async()=>{
        const query = collection(db, 'item')
        const response= await getDocs(query);
        console.log("respuesta", response.docs)
        const data =response.docs.map(doc=>{ return ({id: doc.id, ...doc.data()}
        )})
        

        setProductos(data)
        console.log(data)
    }
    getData();
},[])
        

    
    const [productosFiltrados, setProductosFiltrados]=useState(productos)
    useEffect( () => {

        if(categoriaId){
        
        setProductosFiltrados(productos.filter(e=>e.marca===categoriaId))
        
        }
        
        if(categoriaId===undefined){
        
        setProductosFiltrados(productos)
        
        }
        
        
        
        },[categoriaId,productos])
    
    
    
    
    
    


/* // CREAMOS UNA PROMESA QUE TIENE DOS FUNCIONES, RESOLVE Y REJECT
const promesa = new Promise((resolve, reject)=>{
//CON ESTE SET TIMEOUT TARDAREMOS 2S EN RECIBIR RESPUESTA, SIMULANDO UN SERVIDOR
    setTimeout(()=>{
//NOS RETORNA UN ARREGLO
    resolve(Lista)
}, 2000);

})

//AL OBTENER LOS DATOS DEL SERVIDOR NOSOTROS UTILIZAMOS 
useEffect(()=>{
    //LLAMAMOS A PROMESA CUANDO OBTENEMOS EL RESULTADO
    promesa.then(resultado=>{
        setProductos(resultado)

    })
}) */

return(
    <ItemList productos={productosFiltrados.length>0? productosFiltrados:productos}   />

)


//PARTE INTEL

}