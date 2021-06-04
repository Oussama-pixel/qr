import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import QRcodes from '../components/QRcodes';

export default function QrUserScreen() {
    const [input, setInput] = useState("");
    const handleInputChange = (e)=>{
        setInput(e.target.value);
    }
    
    const handleInputSubmit = ()=>{
        console.log(input.length);
        if(input.length==0){
            alert("veuiller entrez quelque chose")
            return 
        }
        const elt = document.getElementsByClassName("qrcodes");
        console.log(elt);
        ReactDOM.render(<QRcodes value={input}/>,document.getElementsByClassName("qrcodes")[0]);
        setInput("");
    }
    return (
        <div >
            <div className="input-field">
            <input id="input" type="text" placeholder="enter the URL :" onChange={handleInputChange}/>
             <input id="submit" type="button" value="submit" onClick={handleInputSubmit}/> 
            </div>
            <div className="qrcodes">

            </div>
        </div>
    )
}
