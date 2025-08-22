import './listElement.css'

const ListElement = ({titulo, lista = [],ol})=>{
    
    return(<>
        <div className="listContainer">
            <h2>{titulo}</h2>

           { ol?        
                <ol>
                    {lista.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            : 
                <ul>
                    {lista.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
           }        
                
            


        </div>
    </>)
}

export default ListElement;