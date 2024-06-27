import React from 'react'
import IconoCarrito from "../asset/statics/carrito.png"
import IconoVolver from "../asset/statics/volver.png"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <Link to = "carrito">
        <img src= {IconoCarrito} alt="" className="carritou"/>
      </Link>
      <Link to = "/">
        <img src= {IconoVolver} alt="" className="volver"/> 
      </Link>

      {/* antes estaba asi, lo arregle al final del proyecto con  el github de jony
      <a href="carrito.html"><img src= {IconoCarrito} alt="" className="carritou"/></a>
      <a href=""><img src= {IconoVolver} alt="" className="volver"/></a>  */}

      <h1 className="titulo">
        Dev <br />
        RockStore
      </h1>

    </>
  )
}
