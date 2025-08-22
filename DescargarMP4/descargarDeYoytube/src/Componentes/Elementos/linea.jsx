import './linea.css'

const Linea =({ tamano, vertical })=>{
    if(vertical){
        return(<><div className="lineaVertical" style={{ width: 0}}></div></>)
    }else{
        return(<><div className="lineaHorizontal" style={{ width: tamano}}></div></>)
    }
}

export default Linea;