import { useState } from "react";
import './checkBox.css';

function CheckboxList() {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value); // Solo se permite un valor
    //console.log("valor actual: " + value);
  };

  return (
    <div>
      <h3>Formatos de descarga:</h3>

        <div className="formatContainer">
          <label>
          <input
            id="radio1"
            type="radio"
            value="full"
            checked={selected === "full"}
            onChange={handleChange}
        /><span for="radio1">Video + Audio (MP4 + MP3)</span>

      </label>
        
      
        <label> 
            <input
              id="radio2"
              type="radio"
              value="mp3"
              checked={selected === "mp3"}
              onChange={handleChange}
          />
          <span for="radio2">Solo MP3</span>
        </label>
      
      
        <label>
            <input
              id="radio3"
              type="radio"
              value="mp4"
              checked={selected === "mp4"}
              onChange={handleChange}
            /><span for="radio3">Solo MP4</span>
        </label>
        </div>
    </div>
  );
}

export default CheckboxList;
