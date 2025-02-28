

import React, {useContext, useState} from "react";
import { ItemCount } from "../itemCount/itemCount";
import { NumeroEnCarrito } from "../numerocarritocontexto/contextocarrito";
import { Link } from "react-router-dom";



export const ItemDetail= ( {itemEncontrado} )=>{
    const {addItems}=useContext(NumeroEnCarrito)
    const [numero , setNumero] = useState(1)
    const [estado, setEstado]=useState("none")
    const [show, setShow]=useState(false)
    const [estadoDos, SetEstadoDos]=useState("block")
    const [estadoTres, SetEstadoTres]=useState("flex")
    const funcionDoble=(numeroAPasar, item, cantReal )=>{
        onAdd()
        addItems(numeroAPasar, item, cantReal )
        
        }
    const onAdd=()=>{
        setShow(!show)
        setEstado("block")
        SetEstadoDos("none")
        SetEstadoTres("none")
    }
    const clickMas=(e)=>{
        e.preventDefault();
        if(numero<itemEncontrado.stock){
        setNumero(numero+1)}
    }
    const clickMenos=(e)=>{
        e.preventDefault();
        if(numero>1){
        setNumero(numero-1)}
    }
    



    
//el state corresponiente a la busqueda del item con respecto al id q tenemos

//cuando el id cambia, se dispara el setitemencontrado que le cambia el valor a item encontrado
/* useEffect(()=>{
setItemEncontrado( Lista.find(e=>{
    return (e.id===id)
 }))
}, [id]) */
if(itemEncontrado.length===0){
    return(
        <div className="loading">
        <div className="spinner-border text-danger spiner" role="status"></div>
    <p className="texto-carga">Cargando productos...</p>
    </div>
        )
}



return(
    <div className="row d-flex justify-content-center" >
        <div className="col-lg-1 d-none d-lg-flex "><Link to={"/categoria/all"} className="buton3">Volver</Link>
        </div>
        <div className="col-11">
            <div className="container item-detail">
                <div className="row contenedor-detail">
                    <div className="col-12 col-lg-8 contenedor-img-detail"><img className="imagen-detail" src={itemEncontrado.ruta} alt="foto" /></div>
                    <div className="col-12 col-lg-4 textos-detalles">
                        <h1  className="dos">{itemEncontrado.name}</h1>
                        <p className="detail-description">{itemEncontrado.description}</p>
                        <p className="aviso"> Las PCs completas tardan entre 48hs y 72hs hábiles en ser armadas e instalarles el Windows, una vez armada, se realiza el envío o entrega correspondiente.</p>
                        <h4 className="detail-precio">Precio contado: <span className="precio-detail-numero">{`$${itemEncontrado.price}`}</span></h4>
                        <p style={itemEncontrado>2 ? {color: 'green'} : {color: 'red'}} className="stock">stock: {itemEncontrado.stock}</p>
                        {itemEncontrado.stock> 0 ? (<ItemCount stock={itemEncontrado.stock} clickMas={clickMas} clickMenos={clickMenos} initial={1} count={numero} estado={estado} estadoDos={estadoDos} onAdd={onAdd} stockReal={itemEncontrado.stock} show={show} estadoTres={estadoTres} funcionDoble={(numeroAPasar, item, cantReal)=>funcionDoble(item, numeroAPasar, cantReal)} item={itemEncontrado}/>) : (<p className="sin-stock">Sin stock! Consultar por WhatsApp</p>)
                        }
                        
                        <Link className="link-volver"  to="/categoria/all"> 
                            <div className="linea-boton">
                                <button className="buton2">Volver al catálogo</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}