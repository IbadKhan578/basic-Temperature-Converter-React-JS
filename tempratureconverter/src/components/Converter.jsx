import React, { useState } from 'react';

function Converter(){

    let[celsius,Setcelsius] = useState("");
    let [farenheit,SetFarenheit]=useState("")

    function handleCelsius(e){
        const value = e.target.value;
        Setcelsius(value);
        SetFarenheit(value===''?'':  parseFloat((value*(9/5)+32)) );
       

    }

     function handleFarehnheit(e){
        const value = e.target.value;
        SetFarenheit(value);
        Setcelsius(value===''?'': parseInt((((value-32)*5)/9)) )  //((value - 32) * 5) / 9
     

    } //(32°F − 32) × 5/9

    return(
        <div className="converter">
            <h1> Temprature Converter</h1>  
            <label className='calsius'>Calsius
                <input type="number"  value={celsius} placeholder='0'
                onChange={handleCelsius} />

            </label>

              <label >Farenheit
                <input type="number"  value={farenheit} placeholder='32' 
                onChange={handleFarehnheit} />

            </label>
            
        </div>


    )


}

export default Converter;