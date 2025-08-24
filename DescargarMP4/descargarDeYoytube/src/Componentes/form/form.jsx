import CheckboxList from './checkBox';
import { useState } from "react";
import './form.css'

const FormDesc = ()=>{
    const [formato, setFormat] = useState(""); // aca guardo el valor del checkbox

    function enviarLink() {
        const link = document.getElementById("linkInput").value;
        console.log("Al pulsar el boton el valor es de: " + formato);
        //console.log(link=="");

        if(formato == ""){
            alert("Te falta el formato")
        }
        if(link!=""){
            fetch("http://localhost:5000/descargar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ link,formato })
            })
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                formato == "mp3"? 
                    a.download = "audio.mp3"
                :
                    a.download = "video.mp4"
                a.click();
            });
        }else{
            alert("No hay link");
        }
    }

    return(<>
        <div className="formCont">
            <h1 className='main-title'>Descargar de Youtube</h1>

            <input className='ponerLink' id="linkInput" type="text" placeholder='Ingresar un link de Youtube...'/>
            
            <CheckboxList onChange={setFormat}></CheckboxList>

            <button type="onSubmit" onClick={enviarLink}>Descargar</button>
        </div>
    </>)
}

export default FormDesc;