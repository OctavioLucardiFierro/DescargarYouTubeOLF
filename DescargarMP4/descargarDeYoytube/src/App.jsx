import React, { useState, useEffect } from "react";
import './App.css'
import FormDesc from './Componentes/form/form'
import Linea from './Componentes/Elementos/linea'
import ListElement from './Componentes/Elementos/listElement'
import Como_Usar from './Componentes/Elementos/comoUsar.js'
import Descripcion from './Componentes/Elementos/descripcion.js'
import Footer from './Componentes/footer/footer.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="mainC">
        <FormDesc></FormDesc>
        <Linea tamano ='70%' />
        <div className="dataContainer">
            <ListElement titulo = "¿Cómo utilizar para convertir YouTube a MP3/MP4?" lista={Como_Usar} ol></ListElement>
            { windowWidth > 770 ? 
                <Linea tamano ='60%' vertical/>
              :
                <Linea tamano ='100%' />
            }
            <ListElement titulo = "Convertidor de YouTube gratuito y en línea" lista={Descripcion}></ListElement>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
