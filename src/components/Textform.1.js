import React,{useState} from 'react';



export default function Textform(props) {
    const handleUpClick = ()=>{
       // console.log("Upprcase was clicled"+ text);
        let newText =text.toUpperCase();
        setText("you have clicked on handleUpClick")
        setText(newText)
    }
    const handleLoClick = ()=>{
        // console.log("Upprcase was clicled"+ text);
         let newText =text.toLowerCase();
        
         setText(newText)
    }
    const handleClearClick = ()=>{
       ;
         let newText ='';
        
         setText(newText)
    }
    const handleCopy = ()=>{
        
        var text=document.getElementById("mybox")
         text.select();      
         navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpace=() =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '))
    }

    const handleOnChange=(event)=>{
     
       setText(event.target.value);
    }
    

    const [text, setText]= useState(' ');
    
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
             <div class="mb-3">
                
                <textarea class="form-control" value={text} onChange={handleOnChange}  id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick} >clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace} >Remove Extra Space</button>

        </div>
        <div className="container my-3">
            <h2>your text summery</h2>
            <p>{text.split(" ").length}words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}
