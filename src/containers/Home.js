import React, { useContext, useEffect } from 'react'
import Contexto from '../context/Contexto'
import "../asset/css/Home.css"
import Item from '../components/Item.js'
export default function Home() {
  useEffect(()=>{
    listameProductos();
  }, []);
  const { listameProductos, productos} = useContext(Contexto)
  return (
    <>
      <div className="container">
        <div className="wraper">
          <div className="home">
            {productos.map((item)=> (
            <Item {...item} key = {item.id}> </Item>
            ))}
          </div>
        </div>
      </div>
    </>

  )
}
