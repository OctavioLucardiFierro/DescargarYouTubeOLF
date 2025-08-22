import CheckboxList from './checkBox';
import './form.css'

const FormDesc = ()=>{

    function enviarLink() {
        const link = document.getElementById("linkInput").value;

        //console.log(link=="");
        if(link!=""){
            fetch("http://localhost:5000/descargar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ link })
            })
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "video.mp4";
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
            
            <CheckboxList></CheckboxList>

            <button type="onSubmit" onClick={enviarLink}>Descargar</button>
        </div>
    </>)
}

export default FormDesc;